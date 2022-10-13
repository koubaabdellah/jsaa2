/*! See /acknowledgements.txt for open-source licenses */
"use strict"
define("web-experience-app/app",["exports","@ember/application","web-experience-app/resolver","ember-load-initializers","web-experience-app/config/environment"],(function(e,t,r,n,o){function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=p(e)
if(t){var o=p(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,"undefined"==typeof global&&"undefined"!=typeof window&&(window.global=window)
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)})(d,e)
var t,n,c,p=u(d)
function d(){var e
a(this,d)
for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
return f(s(e=p.call.apply(p,[this].concat(n))),"modulePrefix",o.default.modulePrefix),f(s(e),"podModulePrefix",o.default.podModulePrefix),f(s(e),"Resolver",r.default),e}return t=d,n&&i(t.prototype,n),c&&i(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}(t.default)
e.default=d,(0,n.default)(d,o.default.modulePrefix)})),define("web-experience-app/app/utils/get-feature",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getFeature=function(){return!1}})),define("web-experience-app/cldrs-shorts/ar",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"ar-DZ",parentLocale:"ar"},{locale:"ar",numbers:{decimal:{long:[[1e3,{zero:["0 ألف",1],one:["0 ألف",1],two:["0 ألف",1],few:["0 آلاف",1],many:["0 ألف",1],other:["0 ألف",1]}],[1e4,{zero:["00 ألف",2],one:["00 ألف",2],two:["00 ألف",2],few:["00 ألف",2],many:["00 ألف",2],other:["00 ألف",2]}],[1e5,{zero:["000 ألف",3],one:["000 ألف",3],two:["000 ألف",3],few:["000 ألف",3],many:["000 ألف",3],other:["000 ألف",3]}],[1e6,{zero:["0 مليون",1],one:["0 مليون",1],two:["0 مليون",1],few:["0 ملايين",1],many:["0 مليون",1],other:["0 مليون",1]}],[1e7,{zero:["00 مليون",2],one:["00 مليون",2],two:["00 مليون",2],few:["00 ملايين",2],many:["00 مليون",2],other:["00 مليون",2]}],[1e8,{zero:["000 مليون",3],one:["000 مليون",3],two:["000 مليون",3],few:["000 مليون",3],many:["000 مليون",3],other:["000 مليون",3]}],[1e9,{zero:["0 مليار",1],one:["0 مليار",1],two:["0 مليار",1],few:["0 مليار",1],many:["0 مليار",1],other:["0 مليار",1]}],[1e10,{zero:["00 مليار",2],one:["00 مليار",2],two:["00 مليار",2],few:["00 مليار",2],many:["00 مليار",2],other:["00 مليار",2]}],[1e11,{zero:["000 مليار",3],one:["000 مليار",3],two:["000 مليار",3],few:["000 مليار",3],many:["000 مليار",3],other:["000 مليار",3]}],[1e12,{zero:["0 ترليون",1],one:["0 ترليون",1],two:["0 ترليون",1],few:["0 ترليون",1],many:["0 ترليون",1],other:["0 ترليون",1]}],[1e13,{zero:["00 ترليون",2],one:["00 ترليون",2],two:["00 ترليون",2],few:["00 ترليون",2],many:["00 ترليون",2],other:["00 ترليون",2]}],[1e14,{zero:["000 ترليون",3],one:["000 ترليون",3],two:["000 ترليون",3],few:["000 ترليون",3],many:["000 ترليون",3],other:["000 ترليون",3]}]],short:[[1e3,{zero:["0 ألف",1],one:["0 ألف",1],two:["0 ألف",1],few:["0 آلاف",1],many:["0 ألف",1],other:["0 ألف",1]}],[1e4,{zero:["00 ألف",2],one:["00 ألف",2],two:["00 ألف",2],few:["00 ألف",2],many:["00 ألف",2],other:["00 ألف",2]}],[1e5,{zero:["000 ألف",3],one:["000 ألف",3],two:["000 ألف",3],few:["000 ألف",3],many:["000 ألف",3],other:["000 ألف",3]}],[1e6,{zero:["0 مليون",1],one:["0 مليون",1],two:["0 مليون",1],few:["0 مليون",1],many:["0 مليون",1],other:["0 مليون",1]}],[1e7,{zero:["00 مليون",2],one:["00 مليون",2],two:["00 مليون",2],few:["00 مليون",2],many:["00 مليون",2],other:["00 مليون",2]}],[1e8,{zero:["000 مليون",3],one:["000 مليون",3],two:["000 مليون",3],few:["000 مليون",3],many:["000 مليون",3],other:["000 مليون",3]}],[1e9,{zero:["0 مليار",1],one:["0 مليار",1],two:["0 مليار",1],few:["0 مليار",1],many:["0 مليار",1],other:["0 مليار",1]}],[1e10,{zero:["00 مليار",2],one:["00 مليار",2],two:["00 مليار",2],few:["00 مليار",2],many:["00 مليار",2],other:["00 مليار",2]}],[1e11,{zero:["000 مليار",3],one:["000 مليار",3],two:["000 مليار",3],few:["000 مليار",3],many:["000 مليار",3],other:["000 مليار",3]}],[1e12,{zero:["0 ترليون",1],one:["0 ترليون",1],two:["0 ترليون",1],few:["0 ترليون",1],many:["0 ترليون",1],other:["0 ترليون",1]}],[1e13,{zero:["00 ترليون",2],one:["00 ترليون",2],two:["00 ترليون",2],few:["00 ترليون",2],many:["00 ترليون",2],other:["00 ترليون",2]}],[1e14,{zero:["000 ترليون",3],one:["000 ترليون",3],two:["000 ترليون",3],few:["000 ترليون",3],many:["000 ترليون",3],other:["000 ترليون",3]}]]}}},{locale:"ar-BH",parentLocale:"ar"},{locale:"ar-EG",parentLocale:"ar"},{locale:"ar-IQ",parentLocale:"ar"},{locale:"ar-JO",parentLocale:"ar"},{locale:"ar-KW",parentLocale:"ar"},{locale:"ar-LB",parentLocale:"ar"},{locale:"ar-LY",parentLocale:"ar"},{locale:"ar-MA",parentLocale:"ar"},{locale:"ar-OM",parentLocale:"ar"},{locale:"ar-QA",parentLocale:"ar"},{locale:"ar-SA",parentLocale:"ar"},{locale:"ar-SD",parentLocale:"ar"},{locale:"ar-SY",parentLocale:"ar"},{locale:"ar-TN",parentLocale:"ar"},{locale:"ar-AE",parentLocale:"ar"},{locale:"ar-YE",parentLocale:"ar"}]})),define("web-experience-app/cldrs-shorts/ca",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"ca-es",parentLocale:"ca"},{locale:"ca",numbers:{decimal:{long:[[1e3,{one:["0 miler",1],other:["0 milers",1]}],[1e4,{one:["00 milers",2],other:["00 milers",2]}],[1e5,{one:["000 milers",3],other:["000 milers",3]}],[1e6,{one:["0 milió",1],other:["0 milions",1]}],[1e7,{one:["00 milions",2],other:["00 milions",2]}],[1e8,{one:["000 milions",3],other:["000 milions",3]}],[1e9,{one:["0 miler de milions",1],other:["0 milers de milions",1]}],[1e10,{one:["00 milers de milions",2],other:["00 milers de milions",2]}],[1e11,{one:["000 milers de milions",3],other:["000 milers de milions",3]}],[1e12,{one:["0 bilió",1],other:["0 bilions",1]}],[1e13,{one:["00 bilions",2],other:["00 bilions",2]}],[1e14,{one:["000 bilions",3],other:["000 bilions",3]}]],short:[[1e3,{one:["0m",1],other:["0m",1]}],[1e4,{one:["00m",2],other:["00m",2]}],[1e5,{one:["000m",3],other:["000m",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0000 M",4],other:["0000 M",4]}],[1e10,{one:["00mM",2],other:["00mM",2]}],[1e11,{one:["000mM",3],other:["000mM",3]}],[1e12,{one:["0 B",1],other:["0 B",1]}],[1e13,{one:["00 B",2],other:["00 B",2]}],[1e14,{one:["000 B",3],other:["000 B",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/cs",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"cs-cz",parentLocale:"cs"},{locale:"cs",numbers:{decimal:{long:[[1e3,{one:["0 tisíc",1],few:["0 tisíce",1],many:["0 tisíce",1],other:["0 tisíc",1]}],[1e4,{one:["00 tisíc",2],few:["00 tisíc",2],many:["00 tisíce",2],other:["00 tisíc",2]}],[1e5,{one:["000 tisíc",3],few:["000 tisíc",3],many:["000 tisíce",3],other:["000 tisíc",3]}],[1e6,{one:["0 milion",1],few:["0 miliony",1],many:["0 milionu",1],other:["0 milionů",1]}],[1e7,{one:["00 milionů",2],few:["00 milionů",2],many:["00 milionu",2],other:["00 milionů",2]}],[1e8,{one:["000 milionů",3],few:["000 milionů",3],many:["000 milionu",3],other:["000 milionů",3]}],[1e9,{one:["0 miliarda",1],few:["0 miliardy",1],many:["0 miliardy",1],other:["0 miliard",1]}],[1e10,{one:["00 miliard",2],few:["00 miliard",2],many:["00 miliardy",2],other:["00 miliard",2]}],[1e11,{one:["000 miliard",3],few:["000 miliard",3],many:["000 miliardy",3],other:["000 miliard",3]}],[1e12,{one:["0 bilion",1],few:["0 biliony",1],many:["0 bilionu",1],other:["0 bilionů",1]}],[1e13,{one:["00 bilionů",2],few:["00 bilionů",2],many:["00 bilionu",2],other:["00 bilionů",2]}],[1e14,{one:["000 bilionů",3],few:["000 bilionů",3],many:["000 bilionu",3],other:["000 bilionů",3]}]],short:[[1e3,{one:["0 tis'.'",1],few:["0 tis'.'",1],many:["0 tis'.'",1],other:["0 tis'.'",1]}],[1e4,{one:["00 tis'.'",2],few:["00 tis'.'",2],many:["00 tis'.'",2],other:["00 tis'.'",2]}],[1e5,{one:["000 tis'.'",3],few:["000 tis'.'",3],many:["000 tis'.'",3],other:["000 tis'.'",3]}],[1e6,{one:["0 mil'.'",1],few:["0 mil'.'",1],many:["0 mil'.'",1],other:["0 mil'.'",1]}],[1e7,{one:["00 mil'.'",2],few:["00 mil'.'",2],many:["00 mil'.'",2],other:["00 mil'.'",2]}],[1e8,{one:["000 mil'.'",3],few:["000 mil'.'",3],many:["000 mil'.'",3],other:["000 mil'.'",3]}],[1e9,{one:["0 mld'.'",1],few:["0 mld'.'",1],many:["0 mld'.'",1],other:["0 mld'.'",1]}],[1e10,{one:["00 mld'.'",2],few:["00 mld'.'",2],many:["00 mld'.'",2],other:["00 mld'.'",2]}],[1e11,{one:["000 mld'.'",3],few:["000 mld'.'",3],many:["000 mld'.'",3],other:["000 mld'.'",3]}],[1e12,{one:["0 bil'.'",1],few:["0 bil'.'",1],many:["0 bil'.'",1],other:["0 bil'.'",1]}],[1e13,{one:["00 bil'.'",2],few:["00 bil'.'",2],many:["00 bil'.'",2],other:["00 bil'.'",2]}],[1e14,{one:["000 bil'.'",3],few:["000 bil'.'",3],many:["000 bil'.'",3],other:["000 bil'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/da",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"da-dk",parentLocale:"da"},{locale:"da",numbers:{decimal:{long:[[1e3,{one:["0 tusind",1],other:["0 tusind",1]}],[1e4,{one:["00 tusind",2],other:["00 tusind",2]}],[1e5,{one:["000 tusind",3],other:["000 tusind",3]}],[1e6,{one:["0 million",1],other:["0 millioner",1]}],[1e7,{one:["00 millioner",2],other:["00 millioner",2]}],[1e8,{one:["000 millioner",3],other:["000 millioner",3]}],[1e9,{one:["0 milliard",1],other:["0 milliarder",1]}],[1e10,{one:["00 milliarder",2],other:["00 milliarder",2]}],[1e11,{one:["000 milliarder",3],other:["000 milliarder",3]}],[1e12,{one:["0 billion",1],other:["0 billioner",1]}],[1e13,{one:["00 billioner",2],other:["00 billioner",2]}],[1e14,{one:["000 billioner",3],other:["000 billioner",3]}]],short:[[1e3,{one:["0 t",1],other:["0 t",1]}],[1e4,{one:["00 t",2],other:["00 t",2]}],[1e5,{one:["000 t",3],other:["000 t",3]}],[1e6,{one:["0 mio'.'",1],other:["0 mio'.'",1]}],[1e7,{one:["00 mio'.'",2],other:["00 mio'.'",2]}],[1e8,{one:["000 mio'.'",3],other:["000 mio'.'",3]}],[1e9,{one:["0 mia'.'",1],other:["0 mia'.'",1]}],[1e10,{one:["00 mia'.'",2],other:["00 mia'.'",2]}],[1e11,{one:["000 mia'.'",3],other:["000 mia'.'",3]}],[1e12,{one:["0 bio'.'",1],other:["0 bio'.'",1]}],[1e13,{one:["00 bio'.'",2],other:["00 bio'.'",2]}],[1e14,{one:["000 bio'.'",3],other:["000 bio'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/de",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"de-CH",parentLocale:"de"},{locale:"de",numbers:{decimal:{long:[[1e3,{one:["0 Tausend",1],other:["0 Tausend",1]}],[1e4,{one:["00 Tausend",2],other:["00 Tausend",2]}],[1e5,{one:["000 Tausend",3],other:["000 Tausend",3]}],[1e6,{one:["0 Million",1],other:["0 Millionen",1]}],[1e7,{one:["00 Millionen",2],other:["00 Millionen",2]}],[1e8,{one:["000 Millionen",3],other:["000 Millionen",3]}],[1e9,{one:["0 Milliarde",1],other:["0 Milliarden",1]}],[1e10,{one:["00 Milliarden",2],other:["00 Milliarden",2]}],[1e11,{one:["000 Milliarden",3],other:["000 Milliarden",3]}],[1e12,{one:["0 Billion",1],other:["0 Billionen",1]}],[1e13,{one:["00 Billionen",2],other:["00 Billionen",2]}],[1e14,{one:["000 Billionen",3],other:["000 Billionen",3]}]],short:[[1e3,{one:["0",1],other:["0",1]}],[1e4,{one:["0",1],other:["0",1]}],[1e5,{one:["0",1],other:["0",1]}],[1e6,{one:["0 Mio'.'",1],other:["0 Mio'.'",1]}],[1e7,{one:["00 Mio'.'",2],other:["00 Mio'.'",2]}],[1e8,{one:["000 Mio'.'",3],other:["000 Mio'.'",3]}],[1e9,{one:["0 Mrd'.'",1],other:["0 Mrd'.'",1]}],[1e10,{one:["00 Mrd'.'",2],other:["00 Mrd'.'",2]}],[1e11,{one:["000 Mrd'.'",3],other:["000 Mrd'.'",3]}],[1e12,{one:["0 Bio'.'",1],other:["0 Bio'.'",1]}],[1e13,{one:["00 Bio'.'",2],other:["00 Bio'.'",2]}],[1e14,{one:["000 Bio'.'",3],other:["000 Bio'.'",3]}]]}}},{locale:"de-de",parentLocale:"de"}]})),define("web-experience-app/cldrs-shorts/el",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"el-gr",parentLocale:"el"},{locale:"el",numbers:{decimal:{long:[[1e3,{one:["0 χιλιάδα",1],other:["0 χιλιάδες",1]}],[1e4,{one:["00 χιλιάδες",2],other:["00 χιλιάδες",2]}],[1e5,{one:["000 χιλιάδες",3],other:["000 χιλιάδες",3]}],[1e6,{one:["0 εκατομμύριο",1],other:["0 εκατομμύρια",1]}],[1e7,{one:["00 εκατομμύρια",2],other:["00 εκατομμύρια",2]}],[1e8,{one:["000 εκατομμύρια",3],other:["000 εκατομμύρια",3]}],[1e9,{one:["0 δισεκατομμύριο",1],other:["0 δισεκατομμύρια",1]}],[1e10,{one:["00 δισεκατομμύρια",2],other:["00 δισεκατομμύρια",2]}],[1e11,{one:["000 δισεκατομμύρια",3],other:["000 δισεκατομμύρια",3]}],[1e12,{one:["0 τρισεκατομμύριο",1],other:["0 τρισεκατομμύρια",1]}],[1e13,{one:["00 τρισεκατομμύρια",2],other:["00 τρισεκατομμύρια",2]}],[1e14,{one:["000 τρισεκατομμύρια",3],other:["000 τρισεκατομμύρια",3]}]],short:[[1e3,{one:["0 χιλ'.'",1],other:["0 χιλ'.'",1]}],[1e4,{one:["00 χιλ'.'",2],other:["00 χιλ'.'",2]}],[1e5,{one:["000 χιλ'.'",3],other:["000 χιλ'.'",3]}],[1e6,{one:["0 εκ'.'",1],other:["0 εκ'.'",1]}],[1e7,{one:["00 εκ'.'",2],other:["00 εκ'.'",2]}],[1e8,{one:["000 εκ'.'",3],other:["000 εκ'.'",3]}],[1e9,{one:["0 δισ'.'",1],other:["0 δισ'.'",1]}],[1e10,{one:["00 δισ'.'",2],other:["00 δισ'.'",2]}],[1e11,{one:["000 δισ'.'",3],other:["000 δισ'.'",3]}],[1e12,{one:["0 τρισ'.'",1],other:["0 τρισ'.'",1]}],[1e13,{one:["00 τρισ'.'",2],other:["00 τρισ'.'",2]}],[1e14,{one:["000 τρισ'.'",3],other:["000 τρισ'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/en",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"en-AU",parentLocale:"en-001"},{locale:"en-001",parentLocale:"en"},{locale:"en",numbers:{decimal:{long:[[1e3,{one:["0 thousand",1],other:["0 thousand",1]}],[1e4,{one:["00 thousand",2],other:["00 thousand",2]}],[1e5,{one:["000 thousand",3],other:["000 thousand",3]}],[1e6,{one:["0 million",1],other:["0 million",1]}],[1e7,{one:["00 million",2],other:["00 million",2]}],[1e8,{one:["000 million",3],other:["000 million",3]}],[1e9,{one:["0 billion",1],other:["0 billion",1]}],[1e10,{one:["00 billion",2],other:["00 billion",2]}],[1e11,{one:["000 billion",3],other:["000 billion",3]}],[1e12,{one:["0 trillion",1],other:["0 trillion",1]}],[1e13,{one:["00 trillion",2],other:["00 trillion",2]}],[1e14,{one:["000 trillion",3],other:["000 trillion",3]}]],short:[[1e3,{one:["0K",1],other:["0K",1]}],[1e4,{one:["00K",2],other:["00K",2]}],[1e5,{one:["000K",3],other:["000K",3]}],[1e6,{one:["0M",1],other:["0M",1]}],[1e7,{one:["00M",2],other:["00M",2]}],[1e8,{one:["000M",3],other:["000M",3]}],[1e9,{one:["0B",1],other:["0B",1]}],[1e10,{one:["00B",2],other:["00B",2]}],[1e11,{one:["000B",3],other:["000B",3]}],[1e12,{one:["0T",1],other:["0T",1]}],[1e13,{one:["00T",2],other:["00T",2]}],[1e14,{one:["000T",3],other:["000T",3]}]]}}},{locale:"en-CA",parentLocale:"en-001"},{locale:"en-GB",parentLocale:"en-001"},{locale:"en-US",parentLocale:"en"}]})),define("web-experience-app/cldrs-shorts/es",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"es-419",parentLocale:"es",numbers:{decimal:{long:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 millón",1],other:["0 millones",1]}],[1e7,{one:["00 millones",2],other:["00 millones",2]}],[1e8,{one:["000 millones",3],other:["000 millones",3]}],[1e9,{one:["0 mil millones",1],other:["0 mil millones",1]}],[1e10,{one:["00 mil millones",2],other:["00 mil millones",2]}],[1e11,{one:["000 mil millones",3],other:["000 mil millones",3]}],[1e12,{one:["0 billón",1],other:["0 billón",1]}],[1e13,{one:["00 billones",2],other:["00 billones",2]}],[1e14,{one:["000 billones",3],other:["000 billones",3]}]],short:[[1e3,{one:["0 K",1],other:["0 K",1]}],[1e4,{one:["00 k",2],other:["00 k",2]}],[1e5,{one:["000 k",3],other:["000 k",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0k M",1],other:["0k M",1]}],[1e10,{one:["00k M",2],other:["00k M",2]}],[1e11,{one:["000k M",3],other:["000k M",3]}],[1e12,{one:["0 B",1],other:["0 B",1]}],[1e13,{one:["00 B",2],other:["00 B",2]}],[1e14,{one:["000 B",3],other:["000 B",3]}]]}}},{locale:"es",numbers:{decimal:{long:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 millón",1],other:["0 millones",1]}],[1e7,{one:["00 millones",2],other:["00 millones",2]}],[1e8,{one:["000 millones",3],other:["000 millones",3]}],[1e9,{one:["0 mil millones",1],other:["0 mil millones",1]}],[1e10,{one:["00 mil millones",2],other:["00 mil millones",2]}],[1e11,{one:["000 mil millones",3],other:["000 mil millones",3]}],[1e12,{one:["0 billón",1],other:["0 billones",1]}],[1e13,{one:["00 billones",2],other:["00 billones",2]}],[1e14,{one:["000 billones",3],other:["000 billones",3]}]],short:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0000 M",4],other:["0000 M",4]}],[1e10,{one:["00 mil M",2],other:["00 mil M",2]}],[1e11,{one:["000 mil M",3],other:["000 mil M",3]}],[1e12,{one:["0 B",1],other:["0 B",1]}],[1e13,{one:["00 B",2],other:["00 B",2]}],[1e14,{one:["000 B",3],other:["000 B",3]}]]}}},{locale:"es-es",parentLocale:"es"},{locale:"es-MX",parentLocale:"es-419",numbers:{decimal:{long:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 millón",1],other:["0 millones",1]}],[1e7,{one:["00 millones",2],other:["00 millones",2]}],[1e8,{one:["000 millones",3],other:["000 millones",3]}],[1e9,{one:["0 mil millones",1],other:["0 mil millones",1]}],[1e10,{one:["00 mil millones",2],other:["00 mil millones",2]}],[1e11,{one:["000 mil millones",3],other:["000 mil millones",3]}],[1e12,{one:["0 billón",1],other:["0 billones",1]}],[1e13,{one:["00 billones",2],other:["00 billones",2]}],[1e14,{one:["000 billones",3],other:["000 billones",3]}]],short:[[1e3,{one:["0 k",1],other:["0 k",1]}],[1e4,{one:["00 k",2],other:["00 k",2]}],[1e5,{one:["000 k",3],other:["000 k",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0000 M",4],other:["0000 M",4]}],[1e10,{one:["00 mil M",2],other:["00 mil M",2]}],[1e11,{one:["000 mil M",3],other:["000 mil M",3]}],[1e12,{one:["0 B",1],other:["0 B",1]}],[1e13,{one:["00 B",2],other:["00 B",2]}],[1e14,{one:["000 B",3],other:["000 B",3]}]]}}},{locale:"es-xl",parentLocale:"es"}]})),define("web-experience-app/cldrs-shorts/et",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"et-ee",parentLocale:"et"},{locale:"et",numbers:{decimal:{long:[[1e3,{one:["0 tuhat",1],other:["0 tuhat",1]}],[1e4,{one:["00 tuhat",2],other:["00 tuhat",2]}],[1e5,{one:["000 tuhat",3],other:["000 tuhat",3]}],[1e6,{one:["0 miljon",1],other:["0 miljonit",1]}],[1e7,{one:["00 miljonit",2],other:["00 miljonit",2]}],[1e8,{one:["000 miljonit",3],other:["000 miljonit",3]}],[1e9,{one:["0 miljard",1],other:["0 miljardit",1]}],[1e10,{one:["00 miljardit",2],other:["00 miljardit",2]}],[1e11,{one:["000 miljardit",3],other:["000 miljardit",3]}],[1e12,{one:["0 triljon",1],other:["0 triljonit",1]}],[1e13,{one:["00 triljonit",2],other:["00 triljonit",2]}],[1e14,{one:["000 triljonit",3],other:["000 triljonit",3]}]],short:[[1e3,{one:["0 tuh",1],other:["0 tuh",1]}],[1e4,{one:["00 tuh",2],other:["00 tuh",2]}],[1e5,{one:["000 tuh",3],other:["000 tuh",3]}],[1e6,{one:["0 mln",1],other:["0 mln",1]}],[1e7,{one:["00 mln",2],other:["00 mln",2]}],[1e8,{one:["000 mln",3],other:["000 mln",3]}],[1e9,{one:["0 mld",1],other:["0 mld",1]}],[1e10,{one:["00 mld",2],other:["00 mld",2]}],[1e11,{one:["000 mld",3],other:["000 mld",3]}],[1e12,{one:["0 trl",1],other:["0 trl",1]}],[1e13,{one:["00 trl",2],other:["00 trl",2]}],[1e14,{one:["000 trl",3],other:["000 trl",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/fi",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"fi-fi",parentLocale:"fi"},{locale:"fi",numbers:{decimal:{long:[[1e3,{one:["0 tuhat",1],other:["0 tuhatta",1]}],[1e4,{one:["00 tuhatta",2],other:["00 tuhatta",2]}],[1e5,{one:["000 tuhatta",3],other:["000 tuhatta",3]}],[1e6,{one:["0 miljoona",1],other:["0 miljoonaa",1]}],[1e7,{one:["00 miljoonaa",2],other:["00 miljoonaa",2]}],[1e8,{one:["000 miljoonaa",3],other:["000 miljoonaa",3]}],[1e9,{one:["0 miljardi",1],other:["0 miljardia",1]}],[1e10,{one:["00 miljardia",2],other:["00 miljardia",2]}],[1e11,{one:["000 miljardia",3],other:["000 miljardia",3]}],[1e12,{one:["0 biljoona",1],other:["0 biljoonaa",1]}],[1e13,{one:["00 biljoonaa",2],other:["00 biljoonaa",2]}],[1e14,{one:["000 biljoonaa",3],other:["000 biljoonaa",3]}]],short:[[1e3,{one:["0 t'.'",1],other:["0 t'.'",1]}],[1e4,{one:["00 t'.'",2],other:["00 t'.'",2]}],[1e5,{one:["000 t'.'",3],other:["000 t'.'",3]}],[1e6,{one:["0 milj'.'",1],other:["0 milj'.'",1]}],[1e7,{one:["00 milj'.'",2],other:["00 milj'.'",2]}],[1e8,{one:["000 milj'.'",3],other:["000 milj'.'",3]}],[1e9,{one:["0 mrd'.'",1],other:["0 mrd'.'",1]}],[1e10,{one:["00 mrd'.'",2],other:["00 mrd'.'",2]}],[1e11,{one:["000 mrd'.'",3],other:["000 mrd'.'",3]}],[1e12,{one:["0 bilj'.'",1],other:["0 bilj'.'",1]}],[1e13,{one:["00 bilj'.'",2],other:["00 bilj'.'",2]}],[1e14,{one:["000 bilj'.'",3],other:["000 bilj'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/fr",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"fr-CA",parentLocale:"fr",numbers:{decimal:{long:[[1e3,{one:["0 mille",1],other:["0 mille",1]}],[1e4,{one:["00 mille",2],other:["00 mille",2]}],[1e5,{one:["000 mille",3],other:["000 mille",3]}],[1e6,{one:["0 million",1],other:["0 millions",1]}],[1e7,{one:["00 million",2],other:["00 millions",2]}],[1e8,{one:["000 million",3],other:["000 millions",3]}],[1e9,{one:["0 milliard",1],other:["0 milliards",1]}],[1e10,{one:["00 milliard",2],other:["00 milliards",2]}],[1e11,{one:["000 milliard",3],other:["000 milliards",3]}],[1e12,{one:["0 billion",1],other:["0 billions",1]}],[1e13,{one:["00 billion",2],other:["00 billions",2]}],[1e14,{one:["000 billion",3],other:["000 billions",3]}]],short:[[1e3,{one:["0 k",1],other:["0 k",1]}],[1e4,{one:["00 k",2],other:["00 k",2]}],[1e5,{one:["000 k",3],other:["000 k",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0 G",1],other:["0 G",1]}],[1e10,{one:["00 G",2],other:["00 G",2]}],[1e11,{one:["000 G",3],other:["000 G",3]}],[1e12,{one:["0 T",1],other:["0 T",1]}],[1e13,{one:["00 T",2],other:["00 T",2]}],[1e14,{one:["000 T",3],other:["000 T",3]}]]}}},{locale:"fr",numbers:{decimal:{long:[[1e3,{one:["0 millier",1],other:["0 mille",1]}],[1e4,{one:["00 mille",2],other:["00 mille",2]}],[1e5,{one:["000 mille",3],other:["000 mille",3]}],[1e6,{one:["0 million",1],other:["0 millions",1]}],[1e7,{one:["00 million",2],other:["00 millions",2]}],[1e8,{one:["000 million",3],other:["000 millions",3]}],[1e9,{one:["0 milliard",1],other:["0 milliards",1]}],[1e10,{one:["00 milliard",2],other:["00 milliards",2]}],[1e11,{one:["000 milliard",3],other:["000 milliards",3]}],[1e12,{one:["0 billion",1],other:["0 billions",1]}],[1e13,{one:["00 billion",2],other:["00 billions",2]}],[1e14,{one:["000 billion",3],other:["000 billions",3]}]],short:[[1e3,{one:["0 k",1],other:["0 k",1]}],[1e4,{one:["00 k",2],other:["00 k",2]}],[1e5,{one:["000 k",3],other:["000 k",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0 Md",1],other:["0 Md",1]}],[1e10,{one:["00 Md",2],other:["00 Md",2]}],[1e11,{one:["000 Md",3],other:["000 Md",3]}],[1e12,{one:["0 Bn",1],other:["0 Bn",1]}],[1e13,{one:["00 Bn",2],other:["00 Bn",2]}],[1e14,{one:["000 Bn",3],other:["000 Bn",3]}]]}}},{locale:"fr-fr",parentLocale:"fr"}]})),define("web-experience-app/cldrs-shorts/he",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"he-il",parentLocale:"he"},{locale:"he",numbers:{decimal:{long:[[1e3,{one:["‏0 אלף",1],two:["‏0 אלף",1],many:["‏0 אלף",1],other:["‏0 אלף",1]}],[1e4,{one:["‏00 אלף",2],two:["‏00 אלף",2],many:["‏00 אלף",2],other:["‏00 אלף",2]}],[1e5,{one:["‏000 אלף",3],two:["‏000 אלף",3],many:["‏000 אלף",3],other:["‏000 אלף",3]}],[1e6,{one:["‏0 מיליון",1],two:["‏0 מיליון",1],many:["‏0 מיליון",1],other:["‏0 מיליון",1]}],[1e7,{one:["‏00 מיליון",2],two:["‏00 מיליון",2],many:["‏00 מיליון",2],other:["‏00 מיליון",2]}],[1e8,{one:["‏000 מיליון",3],two:["‏000 מיליון",3],many:["‏000 מיליון",3],other:["‏000 מיליון",3]}],[1e9,{one:["‏0 מיליארד",1],two:["‏0 מיליארד",1],many:["‏0 מיליארד",1],other:["‏0 מיליארד",1]}],[1e10,{one:["‏00 מיליארד",2],two:["‏00 מיליארד",2],many:["‏00 מיליארד",2],other:["‏00 מיליארד",2]}],[1e11,{one:["‏000 מיליארד",3],two:["‏000 מיליארד",3],many:["‏000 מיליארד",3],other:["‏000 מיליארד",3]}],[1e12,{one:["‏0 טריליון",1],two:["‏0 טריליון",1],many:["‏0 טריליון",1],other:["‏0 טריליון",1]}],[1e13,{one:["‏00 טריליון",2],two:["‏00 טריליון",2],many:["‏00 טריליון",2],other:["‏00 טריליון",2]}],[1e14,{one:["‏000 טריליון",3],two:["‏000 טריליון",3],many:["‏000 טריליון",3],other:["‏000 טריליון",3]}]],short:[[1e3,{one:["0K",1],two:["0K",1],many:["0K",1],other:["0K",1]}],[1e4,{one:["00K",2],two:["00K",2],many:["00K",2],other:["00K",2]}],[1e5,{one:["000K",3],two:["000K",3],many:["000K",3],other:["000K",3]}],[1e6,{one:["0M",1],two:["0M",1],many:["0M",1],other:["0M",1]}],[1e7,{one:["00M",2],two:["00M",2],many:["00M",2],other:["00M",2]}],[1e8,{one:["000M",3],two:["000M",3],many:["000M",3],other:["000M",3]}],[1e9,{one:["0B",1],two:["0B",1],many:["0B",1],other:["0B",1]}],[1e10,{one:["00B",2],two:["00B",2],many:["00B",2],other:["00B",2]}],[1e11,{one:["000B",3],two:["000B",3],many:["000B",3],other:["000B",3]}],[1e12,{one:["0T",1],two:["0T",1],many:["0T",1],other:["0T",1]}],[1e13,{one:["00T",2],two:["00T",2],many:["00T",2],other:["00T",2]}],[1e14,{one:["000T",3],two:["000T",3],many:["000T",3],other:["000T",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/hi",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"hi-in",parentLocale:"hi"},{locale:"hi",numbers:{decimal:{long:[[1e3,{one:["0 हज़ार",1],other:["0 हज़ार",1]}],[1e4,{one:["00 हज़ार",2],other:["00 हज़ार",2]}],[1e5,{one:["0 लाख",1],other:["0 लाख",1]}],[1e6,{one:["00 लाख",2],other:["00 लाख",2]}],[1e7,{one:["0 करोड़",1],other:["0 करोड़",1]}],[1e8,{one:["00 करोड़",2],other:["00 करोड़",2]}],[1e9,{one:["0 अरब",1],other:["0 अरब",1]}],[1e10,{one:["00 अरब",2],other:["00 अरब",2]}],[1e11,{one:["0 खरब",1],other:["0 खरब",1]}],[1e12,{one:["00 खरब",2],other:["00 खरब",2]}],[1e13,{one:["000 खरब",3],other:["000 खरब",3]}],[1e14,{one:["0000 खरब",4],other:["0000 खरब",4]}]],short:[[1e3,{one:["0 हज़ार",1],other:["0 हज़ार",1]}],[1e4,{one:["00 हज़ार",2],other:["00 हज़ार",2]}],[1e5,{one:["0 लाख",1],other:["0 लाख",1]}],[1e6,{one:["00 लाख",2],other:["00 लाख",2]}],[1e7,{one:["0 क॰",1],other:["0 क॰",1]}],[1e8,{one:["00 क॰",2],other:["00 क॰",2]}],[1e9,{one:["0 अ॰",1],other:["0 अ॰",1]}],[1e10,{one:["00 अ॰",2],other:["00 अ॰",2]}],[1e11,{one:["0 ख॰",1],other:["0 ख॰",1]}],[1e12,{one:["00 ख॰",2],other:["00 ख॰",2]}],[1e13,{one:["0 नील",1],other:["0 नील",1]}],[1e14,{one:["00 नील",2],other:["00 नील",2]}]]}}}]})),define("web-experience-app/cldrs-shorts/hr",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"hr-hr",parentLocale:"hr"},{locale:"hr",numbers:{decimal:{long:[[1e3,{one:["0 tisuća",1],few:["0 tisuće",1],other:["0 tisuća",1]}],[1e4,{one:["00 tisuća",2],few:["00 tisuće",2],other:["00 tisuća",2]}],[1e5,{one:["000 tisuća",3],few:["000 tisuće",3],other:["000 tisuća",3]}],[1e6,{one:["0 milijun",1],few:["0 milijuna",1],other:["0 milijuna",1]}],[1e7,{one:["00 milijun",2],few:["00 milijuna",2],other:["00 milijuna",2]}],[1e8,{one:["000 milijun",3],few:["000 milijuna",3],other:["000 milijuna",3]}],[1e9,{one:["0 milijarda",1],few:["0 milijarde",1],other:["0 milijardi",1]}],[1e10,{one:["00 milijarda",2],few:["00 milijarde",2],other:["00 milijardi",2]}],[1e11,{one:["000 milijarda",3],few:["000 milijarde",3],other:["000 milijardi",3]}],[1e12,{one:["0 bilijun",1],few:["0 bilijuna",1],other:["0 bilijuna",1]}],[1e13,{one:["00 bilijun",2],few:["00 bilijuna",2],other:["00 bilijuna",2]}],[1e14,{one:["000 bilijun",3],few:["000 bilijuna",3],other:["000 bilijuna",3]}]],short:[[1e3,{one:["0 tis'.'",1],few:["0 tis'.'",1],other:["0 tis'.'",1]}],[1e4,{one:["00 tis'.'",2],few:["00 tis'.'",2],other:["00 tis'.'",2]}],[1e5,{one:["000 tis'.'",3],few:["000 tis'.'",3],other:["000 tis'.'",3]}],[1e6,{one:["0 mil'.'",1],few:["0 mil'.'",1],other:["0 mil'.'",1]}],[1e7,{one:["00 mil'.'",2],few:["00 mil'.'",2],other:["00 mil'.'",2]}],[1e8,{one:["000 mil'.'",3],few:["000 mil'.'",3],other:["000 mil'.'",3]}],[1e9,{one:["0 mlr'.'",1],few:["0 mlr'.'",1],other:["0 mlr'.'",1]}],[1e10,{one:["00 mlr'.'",2],few:["00 mlr'.'",2],other:["00 mlr'.'",2]}],[1e11,{one:["000 mlr'.'",3],few:["000 mlr'.'",3],other:["000 mlr'.'",3]}],[1e12,{one:["0 bil'.'",1],few:["0 bil'.'",1],other:["0 bil'.'",1]}],[1e13,{one:["00 bil'.'",2],few:["00 bil'.'",2],other:["00 bil'.'",2]}],[1e14,{one:["000 bil'.'",3],few:["000 bil'.'",3],other:["000 bil'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/hu",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"hu-hu",parentLocale:"hu"},{locale:"hu",numbers:{decimal:{long:[[1e3,{one:["0 ezer",1],other:["0 ezer",1]}],[1e4,{one:["00 ezer",2],other:["00 ezer",2]}],[1e5,{one:["000 ezer",3],other:["000 ezer",3]}],[1e6,{one:["0 millió",1],other:["0 millió",1]}],[1e7,{one:["00 millió",2],other:["00 millió",2]}],[1e8,{one:["000 millió",3],other:["000 millió",3]}],[1e9,{one:["0 milliárd",1],other:["0 milliárd",1]}],[1e10,{one:["00 milliárd",2],other:["00 milliárd",2]}],[1e11,{one:["000 milliárd",3],other:["000 milliárd",3]}],[1e12,{one:["0 billió",1],other:["0 billió",1]}],[1e13,{one:["00 billió",2],other:["00 billió",2]}],[1e14,{one:["000 billió",3],other:["000 billió",3]}]],short:[[1e3,{one:["0 E",1],other:["0 E",1]}],[1e4,{one:["00 E",2],other:["00 E",2]}],[1e5,{one:["000 E",3],other:["000 E",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0 Mrd",1],other:["0 Mrd",1]}],[1e10,{one:["00 Mrd",2],other:["00 Mrd",2]}],[1e11,{one:["000 Mrd",3],other:["000 Mrd",3]}],[1e12,{one:["0 B",1],other:["0 B",1]}],[1e13,{one:["00 B",2],other:["00 B",2]}],[1e14,{one:["000 B",3],other:["000 B",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/id",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"id-id",parentLocale:"id"},{locale:"id",numbers:{decimal:{long:[[1e3,{other:["0 ribu",1]}],[1e4,{other:["00 ribu",2]}],[1e5,{other:["000 ribu",3]}],[1e6,{other:["0 juta",1]}],[1e7,{other:["00 juta",2]}],[1e8,{other:["000 juta",3]}],[1e9,{other:["0 miliar",1]}],[1e10,{other:["00 miliar",2]}],[1e11,{other:["000 miliar",3]}],[1e12,{other:["0 triliun",1]}],[1e13,{other:["00 triliun",2]}],[1e14,{other:["000 triliun",3]}]],short:[[1e3,{other:["0 rb",1]}],[1e4,{other:["00 rb",2]}],[1e5,{other:["000 rb",3]}],[1e6,{other:["0 jt",1]}],[1e7,{other:["00 jt",2]}],[1e8,{other:["000 jt",3]}],[1e9,{other:["0 M",1]}],[1e10,{other:["00 M",2]}],[1e11,{other:["000 M",3]}],[1e12,{other:["0 T",1]}],[1e13,{other:["00 T",2]}],[1e14,{other:["000 T",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/is",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"is-is",parentLocale:"is"},{locale:"is",numbers:{decimal:{long:[[1e3,{one:["0 þúsund",1],other:["0 þúsund",1]}],[1e4,{one:["00 þúsund",2],other:["00 þúsund",2]}],[1e5,{one:["000 þúsund",3],other:["000 þúsund",3]}],[1e6,{one:["0 milljón",1],other:["0 milljónir",1]}],[1e7,{one:["00 milljón",2],other:["00 milljónir",2]}],[1e8,{one:["000 milljón",3],other:["000 milljónir",3]}],[1e9,{one:["0 milljarður",1],other:["0 milljarðar",1]}],[1e10,{one:["00 milljarður",2],other:["00 milljarðar",2]}],[1e11,{one:["000 milljarður",3],other:["000 milljarðar",3]}],[1e12,{one:["0 billjón",1],other:["0 billjónir",1]}],[1e13,{one:["00 billjón",2],other:["00 billjónir",2]}],[1e14,{one:["000 billjón",3],other:["000 billjónir",3]}]],short:[[1e3,{one:["0 þ'.'",1],other:["0 þ'.'",1]}],[1e4,{one:["00 þ'.'",2],other:["00 þ'.'",2]}],[1e5,{one:["000 þ'.'",3],other:["000 þ'.'",3]}],[1e6,{one:["0 m'.'",1],other:["0 m'.'",1]}],[1e7,{one:["00 m'.'",2],other:["00 m'.'",2]}],[1e8,{one:["000 m'.'",3],other:["000 m'.'",3]}],[1e9,{one:["0 ma'.'",1],other:["0 ma'.'",1]}],[1e10,{one:["00 ma'.'",2],other:["00 ma'.'",2]}],[1e11,{one:["000 ma'.'",3],other:["000 ma'.'",3]}],[1e12,{one:["0 bn",1],other:["0 bn",1]}],[1e13,{one:["00 bn",2],other:["00 bn",2]}],[1e14,{one:["000 bn",3],other:["000 bn",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/it",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"it-it",parentLocale:"it"},{locale:"it",numbers:{decimal:{long:[[1e3,{one:["0 mille",1],other:["0 mila",1]}],[1e4,{one:["00 mila",2],other:["00 mila",2]}],[1e5,{one:["000 mila",3],other:["000 mila",3]}],[1e6,{one:["0 milione",1],other:["0 milioni",1]}],[1e7,{one:["00 milioni",2],other:["00 milioni",2]}],[1e8,{one:["000 milioni",3],other:["000 milioni",3]}],[1e9,{one:["0 miliardo",1],other:["0 miliardi",1]}],[1e10,{one:["00 miliardi",2],other:["00 miliardi",2]}],[1e11,{one:["000 miliardi",3],other:["000 miliardi",3]}],[1e12,{one:["0 mille miliardi",1],other:["0 mila miliardi",1]}],[1e13,{one:["00 mila miliardi",2],other:["00 mila miliardi",2]}],[1e14,{one:["000 mila miliardi",3],other:["000 mila miliardi",3]}]],short:[[1e3,{one:["0",1],other:["0",1]}],[1e4,{one:["0",1],other:["0",1]}],[1e5,{one:["0",1],other:["0",1]}],[1e6,{one:["0 Mln",1],other:["0 Mln",1]}],[1e7,{one:["00 Mln",2],other:["00 Mln",2]}],[1e8,{one:["000 Mln",3],other:["000 Mln",3]}],[1e9,{one:["0 Mrd",1],other:["0 Mrd",1]}],[1e10,{one:["00 Mrd",2],other:["00 Mrd",2]}],[1e11,{one:["000 Mrd",3],other:["000 Mrd",3]}],[1e12,{one:["0 Bln",1],other:["0 Bln",1]}],[1e13,{one:["00 Bln",2],other:["00 Bln",2]}],[1e14,{one:["000 Bln",3],other:["000 Bln",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/iw",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"iw-il",parentLocale:"iw"},{locale:"iw",numbers:{decimal:{long:[[1e3,{other:["0K",1]}],[1e4,{other:["00K",2]}],[1e5,{other:["000K",3]}],[1e6,{other:["0M",1]}],[1e7,{other:["00M",2]}],[1e8,{other:["000M",3]}],[1e9,{other:["0G",1]}],[1e10,{other:["00G",2]}],[1e11,{other:["000G",3]}],[1e12,{other:["0T",1]}],[1e13,{other:["00T",2]}],[1e14,{other:["000T",3]}]],short:[[1e3,{other:["0K",1]}],[1e4,{other:["00K",2]}],[1e5,{other:["000K",3]}],[1e6,{other:["0M",1]}],[1e7,{other:["00M",2]}],[1e8,{other:["000M",3]}],[1e9,{other:["0G",1]}],[1e10,{other:["00G",2]}],[1e11,{other:["000G",3]}],[1e12,{other:["0T",1]}],[1e13,{other:["00T",2]}],[1e14,{other:["000T",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/ja",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"ja-jp",parentLocale:"ja"},{locale:"ja",numbers:{decimal:{long:[[1e3,{other:["0",1]}],[1e4,{other:["0万",1]}],[1e5,{other:["00万",2]}],[1e6,{other:["000万",3]}],[1e7,{other:["0000万",4]}],[1e8,{other:["0億",1]}],[1e9,{other:["00億",2]}],[1e10,{other:["000億",3]}],[1e11,{other:["0000億",4]}],[1e12,{other:["0兆",1]}],[1e13,{other:["00兆",2]}],[1e14,{other:["000兆",3]}]],short:[[1e3,{other:["0",1]}],[1e4,{other:["0万",1]}],[1e5,{other:["00万",2]}],[1e6,{other:["000万",3]}],[1e7,{other:["0000万",4]}],[1e8,{other:["0億",1]}],[1e9,{other:["00億",2]}],[1e10,{other:["000億",3]}],[1e11,{other:["0000億",4]}],[1e12,{other:["0兆",1]}],[1e13,{other:["00兆",2]}],[1e14,{other:["000兆",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/ko",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"ko-kr",parentLocale:"ko"},{locale:"ko",numbers:{decimal:{long:[[1e3,{other:["0천",1]}],[1e4,{other:["0만",1]}],[1e5,{other:["00만",2]}],[1e6,{other:["000만",3]}],[1e7,{other:["0000만",4]}],[1e8,{other:["0억",1]}],[1e9,{other:["00억",2]}],[1e10,{other:["000억",3]}],[1e11,{other:["0000억",4]}],[1e12,{other:["0조",1]}],[1e13,{other:["00조",2]}],[1e14,{other:["000조",3]}]],short:[[1e3,{other:["0천",1]}],[1e4,{other:["0만",1]}],[1e5,{other:["00만",2]}],[1e6,{other:["000만",3]}],[1e7,{other:["0000만",4]}],[1e8,{other:["0억",1]}],[1e9,{other:["00억",2]}],[1e10,{other:["000억",3]}],[1e11,{other:["0000억",4]}],[1e12,{other:["0조",1]}],[1e13,{other:["00조",2]}],[1e14,{other:["000조",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/lt",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"lt-lt",parentLocale:"lt"},{locale:"lt",numbers:{decimal:{long:[[1e3,{one:["0 tūkstantis",1],few:["0 tūkstančiai",1],many:["0 tūkstančio",1],other:["0 tūkstančių",1]}],[1e4,{one:["00 tūkstantis",2],few:["00 tūkstančiai",2],many:["00 tūkstančio",2],other:["00 tūkstančių",2]}],[1e5,{one:["000 tūkstantis",3],few:["000 tūkstančiai",3],many:["000 tūkstančio",3],other:["000 tūkstančių",3]}],[1e6,{one:["0 milijonas",1],few:["0 milijonai",1],many:["0 milijono",1],other:["0 milijonų",1]}],[1e7,{one:["00 milijonas",2],few:["00 milijonai",2],many:["00 milijono",2],other:["00 milijonų",2]}],[1e8,{one:["000 milijonas",3],few:["000 milijonai",3],many:["000 milijono",3],other:["000 milijonų",3]}],[1e9,{one:["0 milijardas",1],few:["0 milijardai",1],many:["0 milijardo",1],other:["0 milijardų",1]}],[1e10,{one:["00 milijardas",2],few:["00 milijardai",2],many:["00 milijardo",2],other:["00 milijardų",2]}],[1e11,{one:["000 milijardas",3],few:["000 milijardai",3],many:["000 milijardo",3],other:["000 milijardų",3]}],[1e12,{one:["0 trilijonas",1],few:["0 trilijonai",1],many:["0 trilijono",1],other:["0 trilijonų",1]}],[1e13,{one:["00 trilijonas",2],few:["00 trilijonai",2],many:["00 trilijono",2],other:["00 trilijonų",2]}],[1e14,{one:["000 trilijonas",3],few:["000 trilijonai",3],many:["000 trilijono",3],other:["000 trilijonų",3]}]],short:[[1e3,{one:["0 tūkst'.'",1],few:["0 tūkst'.'",1],many:["0 tūkst'.'",1],other:["0 tūkst'.'",1]}],[1e4,{one:["00 tūkst'.'",2],few:["00 tūkst'.'",2],many:["00 tūkst'.'",2],other:["00 tūkst'.'",2]}],[1e5,{one:["000 tūkst'.'",3],few:["000 tūkst'.'",3],many:["000 tūkst'.'",3],other:["000 tūkst'.'",3]}],[1e6,{one:["0 mln'.'",1],few:["0 mln'.'",1],many:["0 mln'.'",1],other:["0 mln'.'",1]}],[1e7,{one:["00 mln'.'",2],few:["00 mln'.'",2],many:["00 mln'.'",2],other:["00 mln'.'",2]}],[1e8,{one:["000 mln'.'",3],few:["000 mln'.'",3],many:["000 mln'.'",3],other:["000 mln'.'",3]}],[1e9,{one:["0 mlrd'.'",1],few:["0 mlrd'.'",1],many:["0 mlrd'.'",1],other:["0 mlrd'.'",1]}],[1e10,{one:["00 mlrd'.'",2],few:["00 mlrd'.'",2],many:["00 mlrd'.'",2],other:["00 mlrd'.'",2]}],[1e11,{one:["000 mlrd'.'",3],few:["000 mlrd'.'",3],many:["000 mlrd'.'",3],other:["000 mlrd'.'",3]}],[1e12,{one:["0 trln'.'",1],few:["0 trln'.'",1],many:["0 trln'.'",1],other:["0 trln'.'",1]}],[1e13,{one:["00 trln'.'",2],few:["00 trln'.'",2],many:["00 trln'.'",2],other:["00 trln'.'",2]}],[1e14,{one:["000 trln'.'",3],few:["000 trln'.'",3],many:["000 trln'.'",3],other:["000 trln'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/lv",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"lv-lv",parentLocale:"lv"},{locale:"lv",numbers:{decimal:{long:[[1e3,{zero:["0 tūkstošu",1],one:["0 tūkstotis",1],other:["0 tūkstoši",1]}],[1e4,{zero:["00 tūkstoši",2],one:["00 tūkstotis",2],other:["00 tūkstoši",2]}],[1e5,{zero:["000 tūkstoši",3],one:["000 tūkstotis",3],other:["000 tūkstoši",3]}],[1e6,{zero:["0 miljonu",1],one:["0 miljons",1],other:["0 miljoni",1]}],[1e7,{zero:["00 miljoni",2],one:["00 miljons",2],other:["00 miljoni",2]}],[1e8,{zero:["000 miljoni",3],one:["000 miljons",3],other:["000 miljoni",3]}],[1e9,{zero:["0 miljardu",1],one:["0 miljards",1],other:["0 miljardi",1]}],[1e10,{zero:["00 miljardi",2],one:["00 miljards",2],other:["00 miljardi",2]}],[1e11,{zero:["000 miljardi",3],one:["000 miljards",3],other:["000 miljardi",3]}],[1e12,{zero:["0 triljonu",1],one:["0 triljons",1],other:["0 triljoni",1]}],[1e13,{zero:["00 triljoni",2],one:["00 triljons",2],other:["00 triljoni",2]}],[1e14,{zero:["000 triljoni",3],one:["000 triljons",3],other:["000 triljoni",3]}]],short:[[1e3,{zero:["0 tūkst'.'",1],one:["0 tūkst'.'",1],other:["0 tūkst'.'",1]}],[1e4,{zero:["00 tūkst'.'",2],one:["00 tūkst'.'",2],other:["00 tūkst'.'",2]}],[1e5,{zero:["000 tūkst'.'",3],one:["000 tūkst'.'",3],other:["000 tūkst'.'",3]}],[1e6,{zero:["0 milj'.'",1],one:["0 milj'.'",1],other:["0 milj'.'",1]}],[1e7,{zero:["00 milj'.'",2],one:["00 milj'.'",2],other:["00 milj'.'",2]}],[1e8,{zero:["000 milj'.'",3],one:["000 milj'.'",3],other:["000 milj'.'",3]}],[1e9,{zero:["0 mljrd'.'",1],one:["0 mljrd'.'",1],other:["0 mljrd'.'",1]}],[1e10,{zero:["00 mljrd'.'",2],one:["00 mljrd'.'",2],other:["00 mljrd'.'",2]}],[1e11,{zero:["000 mljrd'.'",3],one:["000 mljrd'.'",3],other:["000 mljrd'.'",3]}],[1e12,{zero:["0 trilj'.'",1],one:["0 trilj'.'",1],other:["0 trilj'.'",1]}],[1e13,{zero:["00 trilj'.'",2],one:["00 trilj'.'",2],other:["00 trilj'.'",2]}],[1e14,{zero:["000 trilj'.'",3],one:["000 trilj'.'",3],other:["000 trilj'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/ms",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"ms-my",parentLocale:"ms"},{locale:"ms",numbers:{decimal:{long:[[1e3,{other:["0 ribu",1]}],[1e4,{other:["00 ribu",2]}],[1e5,{other:["000 ribu",3]}],[1e6,{other:["0 juta",1]}],[1e7,{other:["00 juta",2]}],[1e8,{other:["000 juta",3]}],[1e9,{other:["0 bilion",1]}],[1e10,{other:["00 bilion",2]}],[1e11,{other:["000 bilion",3]}],[1e12,{other:["0 trilion",1]}],[1e13,{other:["00 trilion",2]}],[1e14,{other:["000 trilion",3]}]],short:[[1e3,{other:["0K",1]}],[1e4,{other:["00K",2]}],[1e5,{other:["000K",3]}],[1e6,{other:["0J",1]}],[1e7,{other:["00J",2]}],[1e8,{other:["000J",3]}],[1e9,{other:["0B",1]}],[1e10,{other:["00B",2]}],[1e11,{other:["000B",3]}],[1e12,{other:["0T",1]}],[1e13,{other:["00T",2]}],[1e14,{other:["000T",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/nb",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"nb-no",parentLocale:"nb"},{locale:"nb",numbers:{decimal:{long:[[1e3,{one:["0 tusen",1],other:["0 tusen",1]}],[1e4,{one:["00 tusen",2],other:["00 tusen",2]}],[1e5,{one:["000 tusen",3],other:["000 tusen",3]}],[1e6,{one:["0 million",1],other:["0 millioner",1]}],[1e7,{one:["00 million",2],other:["00 millioner",2]}],[1e8,{one:["000 million",3],other:["000 millioner",3]}],[1e9,{one:["0 milliard",1],other:["0 milliarder",1]}],[1e10,{one:["00 milliard",2],other:["00 milliarder",2]}],[1e11,{one:["000 milliard",3],other:["000 milliarder",3]}],[1e12,{one:["0 billion",1],other:["0 billioner",1]}],[1e13,{one:["00 billioner",2],other:["00 billioner",2]}],[1e14,{one:["000 billioner",3],other:["000 billioner",3]}]],short:[[1e3,{one:["0k",1],other:["0k",1]}],[1e4,{one:["00k",2],other:["00k",2]}],[1e5,{one:["000k",3],other:["000k",3]}],[1e6,{one:["0 mill'.'",1],other:["0 mill'.'",1]}],[1e7,{one:["00 mill'.'",2],other:["00 mill'.'",2]}],[1e8,{one:["000 mill'.'",3],other:["000 mill'.'",3]}],[1e9,{one:["0 mrd'.'",1],other:["0 mrd'.'",1]}],[1e10,{one:["00 mrd'.'",2],other:["00 mrd'.'",2]}],[1e11,{one:["000 mrd'.'",3],other:["000 mrd'.'",3]}],[1e12,{one:["0 bill'.'",1],other:["0 bill'.'",1]}],[1e13,{one:["00 bill'.'",2],other:["00 bill'.'",2]}],[1e14,{one:["000 bill'.'",3],other:["000 bill'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/nl",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"nl-nl",parentLocale:"nl"},{locale:"nl",numbers:{decimal:{long:[[1e3,{one:["0 duizend",1],other:["0 duizend",1]}],[1e4,{one:["00 duizend",2],other:["00 duizend",2]}],[1e5,{one:["000 duizend",3],other:["000 duizend",3]}],[1e6,{one:["0 miljoen",1],other:["0 miljoen",1]}],[1e7,{one:["00 miljoen",2],other:["00 miljoen",2]}],[1e8,{one:["000 miljoen",3],other:["000 miljoen",3]}],[1e9,{one:["0 miljard",1],other:["0 miljard",1]}],[1e10,{one:["00 miljard",2],other:["00 miljard",2]}],[1e11,{one:["000 miljard",3],other:["000 miljard",3]}],[1e12,{one:["0 biljoen",1],other:["0 biljoen",1]}],[1e13,{one:["00 biljoen",2],other:["00 biljoen",2]}],[1e14,{one:["000 biljoen",3],other:["000 biljoen",3]}]],short:[[1e3,{one:["0K",1],other:["0K",1]}],[1e4,{one:["00K",2],other:["00K",2]}],[1e5,{one:["000K",3],other:["000K",3]}],[1e6,{one:["0 mln'.'",1],other:["0 mln'.'",1]}],[1e7,{one:["00 mln'.'",2],other:["00 mln'.'",2]}],[1e8,{one:["000 mln'.'",3],other:["000 mln'.'",3]}],[1e9,{one:["0 mld'.'",1],other:["0 mld'.'",1]}],[1e10,{one:["00 mld'.'",2],other:["00 mld'.'",2]}],[1e11,{one:["000 mld'.'",3],other:["000 mld'.'",3]}],[1e12,{one:["0 bln'.'",1],other:["0 bln'.'",1]}],[1e13,{one:["00 bln'.'",2],other:["00 bln'.'",2]}],[1e14,{one:["000 bln'.'",3],other:["000 bln'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/no",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"no-no",parentLocale:"no"},{locale:"no",numbers:{decimal:{long:[[1e3,{other:["0K",1]}],[1e4,{other:["00K",2]}],[1e5,{other:["000K",3]}],[1e6,{other:["0M",1]}],[1e7,{other:["00M",2]}],[1e8,{other:["000M",3]}],[1e9,{other:["0G",1]}],[1e10,{other:["00G",2]}],[1e11,{other:["000G",3]}],[1e12,{other:["0T",1]}],[1e13,{other:["00T",2]}],[1e14,{other:["000T",3]}]],short:[[1e3,{other:["0K",1]}],[1e4,{other:["00K",2]}],[1e5,{other:["000K",3]}],[1e6,{other:["0M",1]}],[1e7,{other:["00M",2]}],[1e8,{other:["000M",3]}],[1e9,{other:["0G",1]}],[1e10,{other:["00G",2]}],[1e11,{other:["000G",3]}],[1e12,{other:["0T",1]}],[1e13,{other:["00T",2]}],[1e14,{other:["000T",3]}]]}}},{locale:"no-nb",parentLocale:"no"}]})),define("web-experience-app/cldrs-shorts/pl",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"pl-pl",parentLocale:"pl"},{locale:"pl",numbers:{decimal:{long:[[1e3,{one:["0 tysiąc",1],few:["0 tysiące",1],many:["0 tysięcy",1],other:["0 tysiąca",1]}],[1e4,{one:["00 tysiąc",2],few:["00 tysiące",2],many:["00 tysięcy",2],other:["00 tysiąca",2]}],[1e5,{one:["000 tysiąc",3],few:["000 tysiące",3],many:["000 tysięcy",3],other:["000 tysiąca",3]}],[1e6,{one:["0 milion",1],few:["0 miliony",1],many:["0 milionów",1],other:["0 miliona",1]}],[1e7,{one:["00 milion",2],few:["00 miliony",2],many:["00 milionów",2],other:["00 miliona",2]}],[1e8,{one:["000 milion",3],few:["000 miliony",3],many:["000 milionów",3],other:["000 miliona",3]}],[1e9,{one:["0 miliard",1],few:["0 miliardy",1],many:["0 miliardów",1],other:["0 miliarda",1]}],[1e10,{one:["00 miliard",2],few:["00 miliardy",2],many:["00 miliardów",2],other:["00 miliarda",2]}],[1e11,{one:["000 miliard",3],few:["000 miliardy",3],many:["000 miliardów",3],other:["000 miliarda",3]}],[1e12,{one:["0 bilion",1],few:["0 biliony",1],many:["0 bilionów",1],other:["0 biliona",1]}],[1e13,{one:["00 bilion",2],few:["00 biliony",2],many:["00 bilionów",2],other:["00 biliona",2]}],[1e14,{one:["000 bilion",3],few:["000 biliony",3],many:["000 bilionów",3],other:["000 biliona",3]}]],short:[[1e3,{one:["0 tys'.'",1],few:["0 tys'.'",1],many:["0 tys'.'",1],other:["0 tys'.'",1]}],[1e4,{one:["00 tys'.'",2],few:["00 tys'.'",2],many:["00 tys'.'",2],other:["00 tys'.'",2]}],[1e5,{one:["000 tys'.'",3],few:["000 tys'.'",3],many:["000 tys'.'",3],other:["000 tys'.'",3]}],[1e6,{one:["0 mln",1],few:["0 mln",1],many:["0 mln",1],other:["0 mln",1]}],[1e7,{one:["00 mln",2],few:["00 mln",2],many:["00 mln",2],other:["00 mln",2]}],[1e8,{one:["000 mln",3],few:["000 mln",3],many:["000 mln",3],other:["000 mln",3]}],[1e9,{one:["0 mld",1],few:["0 mld",1],many:["0 mld",1],other:["0 mld",1]}],[1e10,{one:["00 mld",2],few:["00 mld",2],many:["00 mld",2],other:["00 mld",2]}],[1e11,{one:["000 mld",3],few:["000 mld",3],many:["000 mld",3],other:["000 mld",3]}],[1e12,{one:["0 bln",1],few:["0 bln",1],many:["0 bln",1],other:["0 bln",1]}],[1e13,{one:["00 bln",2],few:["00 bln",2],many:["00 bln",2],other:["00 bln",2]}],[1e14,{one:["000 bln",3],few:["000 bln",3],many:["000 bln",3],other:["000 bln",3]}]]}}}]}))
define("web-experience-app/cldrs-shorts/pt",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"pt-br",parentLocale:"pt"},{locale:"pt",numbers:{decimal:{long:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 milhão",1],other:["0 milhões",1]}],[1e7,{one:["00 milhão",2],other:["00 milhões",2]}],[1e8,{one:["000 milhão",3],other:["000 milhões",3]}],[1e9,{one:["0 bilhão",1],other:["0 bilhões",1]}],[1e10,{one:["00 bilhão",2],other:["00 bilhões",2]}],[1e11,{one:["000 bilhão",3],other:["000 bilhões",3]}],[1e12,{one:["0 trilhão",1],other:["0 trilhões",1]}],[1e13,{one:["00 trilhão",2],other:["00 trilhões",2]}],[1e14,{one:["000 trilhão",3],other:["000 trilhões",3]}]],short:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 mi",1],other:["0 mi",1]}],[1e7,{one:["00 mi",2],other:["00 mi",2]}],[1e8,{one:["000 mi",3],other:["000 mi",3]}],[1e9,{one:["0 bi",1],other:["0 bi",1]}],[1e10,{one:["00 bi",2],other:["00 bi",2]}],[1e11,{one:["000 bi",3],other:["000 bi",3]}],[1e12,{one:["0 tri",1],other:["0 tri",1]}],[1e13,{one:["00 tri",2],other:["00 tri",2]}],[1e14,{one:["000 tri",3],other:["000 tri",3]}]]}}},{locale:"pt-PT",parentLocale:"pt",numbers:{decimal:{long:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 milhão",1],other:["0 milhões",1]}],[1e7,{one:["00 milhões",2],other:["00 milhões",2]}],[1e8,{one:["000 milhões",3],other:["000 milhões",3]}],[1e9,{one:["0 mil milhões",1],other:["0 mil milhões",1]}],[1e10,{one:["00 mil milhões",2],other:["00 mil milhões",2]}],[1e11,{one:["000 mil milhões",3],other:["000 mil milhões",3]}],[1e12,{one:["0 bilião",1],other:["0 biliões",1]}],[1e13,{one:["00 biliões",2],other:["00 biliões",2]}],[1e14,{one:["000 biliões",3],other:["000 biliões",3]}]],short:[[1e3,{one:["0 mil",1],other:["0 mil",1]}],[1e4,{one:["00 mil",2],other:["00 mil",2]}],[1e5,{one:["000 mil",3],other:["000 mil",3]}],[1e6,{one:["0 M",1],other:["0 M",1]}],[1e7,{one:["00 M",2],other:["00 M",2]}],[1e8,{one:["000 M",3],other:["000 M",3]}],[1e9,{one:["0 mM",1],other:["0 mM",1]}],[1e10,{one:["00 mM",2],other:["00 mM",2]}],[1e11,{one:["000 mM",3],other:["000 mM",3]}],[1e12,{one:["0 Bi",1],other:["0 Bi",1]}],[1e13,{one:["00 Bi",2],other:["00 Bi",2]}],[1e14,{one:["000 Bi",3],other:["000 Bi",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/ro",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"ro-ro",parentLocale:"ro"},{locale:"ro",numbers:{decimal:{long:[[1e3,{one:["0 mie",1],few:["0 mii",1],other:["0 de mii",1]}],[1e4,{one:["00 mie",2],few:["00 mii",2],other:["00 de mii",2]}],[1e5,{one:["000 mie",3],few:["000 mii",3],other:["000 de mii",3]}],[1e6,{one:["0 milion",1],few:["0 milioane",1],other:["0 de milioane",1]}],[1e7,{one:["00 milion",2],few:["00 milioane",2],other:["00 de milioane",2]}],[1e8,{one:["000 milion",3],few:["000 milioane",3],other:["000 de milioane",3]}],[1e9,{one:["0 miliard",1],few:["0 miliarde",1],other:["0 de miliarde",1]}],[1e10,{one:["00 miliard",2],few:["00 miliarde",2],other:["00 de miliarde",2]}],[1e11,{one:["000 miliard",3],few:["000 miliarde",3],other:["000 de miliarde",3]}],[1e12,{one:["0 trilion",1],few:["0 trilioane",1],other:["0 de trilioane",1]}],[1e13,{one:["00 trilion",2],few:["00 trilioane",2],other:["00 de trilioane",2]}],[1e14,{one:["000 trilion",3],few:["000 trilioane",3],other:["000 de trilioane",3]}]],short:[[1e3,{one:["0 K",1],few:["0 K",1],other:["0 K",1]}],[1e4,{one:["00 K",2],few:["00 K",2],other:["00 K",2]}],[1e5,{one:["000 K",3],few:["000 K",3],other:["000 K",3]}],[1e6,{one:["0 mil'.'",1],few:["0 mil'.'",1],other:["0 mil'.'",1]}],[1e7,{one:["00 mil'.'",2],few:["00 mil'.'",2],other:["00 mil'.'",2]}],[1e8,{one:["000 mil'.'",3],few:["000 mil'.'",3],other:["000 mil'.'",3]}],[1e9,{one:["0 mld'.'",1],few:["0 mld'.'",1],other:["0 mld'.'",1]}],[1e10,{one:["00 mld'.'",2],few:["00 mld'.'",2],other:["00 mld'.'",2]}],[1e11,{one:["000 mld'.'",3],few:["000 mld'.'",3],other:["000 mld'.'",3]}],[1e12,{one:["0 tril'.'",1],few:["0 tril'.'",1],other:["0 tril'.'",1]}],[1e13,{one:["00 tril'.'",2],few:["00 tril'.'",2],other:["00 tril'.'",2]}],[1e14,{one:["000 tril'.'",3],few:["000 tril'.'",3],other:["000 tril'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/ru",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"ru-ru",parentLocale:"ru"},{locale:"ru",numbers:{decimal:{long:[[1e3,{one:["0 тысяча",1],few:["0 тысячи",1],many:["0 тысяч",1],other:["0 тысячи",1]}],[1e4,{one:["00 тысяча",2],few:["00 тысячи",2],many:["00 тысяч",2],other:["00 тысячи",2]}],[1e5,{one:["000 тысяча",3],few:["000 тысячи",3],many:["000 тысяч",3],other:["000 тысячи",3]}],[1e6,{one:["0 миллион",1],few:["0 миллиона",1],many:["0 миллионов",1],other:["0 миллиона",1]}],[1e7,{one:["00 миллион",2],few:["00 миллиона",2],many:["00 миллионов",2],other:["00 миллиона",2]}],[1e8,{one:["000 миллион",3],few:["000 миллиона",3],many:["000 миллионов",3],other:["000 миллиона",3]}],[1e9,{one:["0 миллиард",1],few:["0 миллиарда",1],many:["0 миллиардов",1],other:["0 миллиарда",1]}],[1e10,{one:["00 миллиард",2],few:["00 миллиарда",2],many:["00 миллиардов",2],other:["00 миллиарда",2]}],[1e11,{one:["000 миллиард",3],few:["000 миллиарда",3],many:["000 миллиардов",3],other:["000 миллиарда",3]}],[1e12,{one:["0 триллион",1],few:["0 триллиона",1],many:["0 триллионов",1],other:["0 триллиона",1]}],[1e13,{one:["00 триллион",2],few:["00 триллиона",2],many:["00 триллионов",2],other:["00 триллиона",2]}],[1e14,{one:["000 триллион",3],few:["000 триллиона",3],many:["000 триллионов",3],other:["000 триллиона",3]}]],short:[[1e3,{one:["0 тыс'.'",1],few:["0 тыс'.'",1],many:["0 тыс'.'",1],other:["0 тыс'.'",1]}],[1e4,{one:["00 тыс'.'",2],few:["00 тыс'.'",2],many:["00 тыс'.'",2],other:["00 тыс'.'",2]}],[1e5,{one:["000 тыс'.'",3],few:["000 тыс'.'",3],many:["000 тыс'.'",3],other:["000 тыс'.'",3]}],[1e6,{one:["0 млн",1],few:["0 млн",1],many:["0 млн",1],other:["0 млн",1]}],[1e7,{one:["00 млн",2],few:["00 млн",2],many:["00 млн",2],other:["00 млн",2]}],[1e8,{one:["000 млн",3],few:["000 млн",3],many:["000 млн",3],other:["000 млн",3]}],[1e9,{one:["0 млрд",1],few:["0 млрд",1],many:["0 млрд",1],other:["0 млрд",1]}],[1e10,{one:["00 млрд",2],few:["00 млрд",2],many:["00 млрд",2],other:["00 млрд",2]}],[1e11,{one:["000 млрд",3],few:["000 млрд",3],many:["000 млрд",3],other:["000 млрд",3]}],[1e12,{one:["0 трлн",1],few:["0 трлн",1],many:["0 трлн",1],other:["0 трлн",1]}],[1e13,{one:["00 трлн",2],few:["00 трлн",2],many:["00 трлн",2],other:["00 трлн",2]}],[1e14,{one:["000 трлн",3],few:["000 трлн",3],many:["000 трлн",3],other:["000 трлн",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/sk",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"sk-sk",parentLocale:"sk"},{locale:"sk",numbers:{decimal:{long:[[1e3,{one:["0 tisíc",1],few:["0 tisíce",1],many:["0 tisíca",1],other:["0 tisíc",1]}],[1e4,{one:["00 tisíc",2],few:["00 tisíc",2],many:["00 tisíca",2],other:["00 tisíc",2]}],[1e5,{one:["000 tisíc",3],few:["000 tisíc",3],many:["000 tisíca",3],other:["000 tisíc",3]}],[1e6,{one:["0 milión",1],few:["0 milióny",1],many:["0 milióna",1],other:["0 miliónov",1]}],[1e7,{one:["00 miliónov",2],few:["00 miliónov",2],many:["00 milióna",2],other:["00 miliónov",2]}],[1e8,{one:["000 miliónov",3],few:["000 miliónov",3],many:["000 milióna",3],other:["000 miliónov",3]}],[1e9,{one:["0 miliarda",1],few:["0 miliardy",1],many:["0 miliardy",1],other:["0 miliárd",1]}],[1e10,{one:["00 miliárd",2],few:["00 miliárd",2],many:["00 miliardy",2],other:["00 miliárd",2]}],[1e11,{one:["000 miliárd",3],few:["000 miliárd",3],many:["000 miliardy",3],other:["000 miliárd",3]}],[1e12,{one:["0 bilión",1],few:["0 bilióny",1],many:["0 bilióna",1],other:["0 biliónov",1]}],[1e13,{one:["00 biliónov",2],few:["00 biliónov",2],many:["00 bilióna",2],other:["00 biliónov",2]}],[1e14,{one:["000 biliónov",3],few:["000 biliónov",3],many:["000 bilióna",3],other:["000 biliónov",3]}]],short:[[1e3,{one:["0 tis'.'",1],few:["0 tis'.'",1],many:["0 tis'.'",1],other:["0 tis'.'",1]}],[1e4,{one:["00 tis'.'",2],few:["00 tis'.'",2],many:["00 tis'.'",2],other:["00 tis'.'",2]}],[1e5,{one:["000 tis'.'",3],few:["000 tis'.'",3],many:["000 tis'.'",3],other:["000 tis'.'",3]}],[1e6,{one:["0 mil'.'",1],few:["0 mil'.'",1],many:["0 mil'.'",1],other:["0 mil'.'",1]}],[1e7,{one:["00 mil'.'",2],few:["00 mil'.'",2],many:["00 mil'.'",2],other:["00 mil'.'",2]}],[1e8,{one:["000 mil'.'",3],few:["000 mil'.'",3],many:["000 mil'.'",3],other:["000 mil'.'",3]}],[1e9,{one:["0 mld'.'",1],few:["0 mld'.'",1],many:["0 mld'.'",1],other:["0 mld'.'",1]}],[1e10,{one:["00 mld'.'",2],few:["00 mld'.'",2],many:["00 mld'.'",2],other:["00 mld'.'",2]}],[1e11,{one:["000 mld'.'",3],few:["000 mld'.'",3],many:["000 mld'.'",3],other:["000 mld'.'",3]}],[1e12,{one:["0 bil'.'",1],few:["0 bil'.'",1],many:["0 bil'.'",1],other:["0 bil'.'",1]}],[1e13,{one:["00 bil'.'",2],few:["00 bil'.'",2],many:["00 bil'.'",2],other:["00 bil'.'",2]}],[1e14,{one:["000 bil'.'",3],few:["000 bil'.'",3],many:["000 bil'.'",3],other:["000 bil'.'",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/sv",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"sv-se",parentLocale:"sv"},{locale:"sv",numbers:{decimal:{long:[[1e3,{one:["0 tusen",1],other:["0 tusen",1]}],[1e4,{one:["00 tusen",2],other:["00 tusen",2]}],[1e5,{one:["000 tusen",3],other:["000 tusen",3]}],[1e6,{one:["0 miljon",1],other:["0 miljoner",1]}],[1e7,{one:["00 miljon",2],other:["00 miljoner",2]}],[1e8,{one:["000 miljoner",3],other:["000 miljoner",3]}],[1e9,{one:["0 miljard",1],other:["0 miljarder",1]}],[1e10,{one:["00 miljarder",2],other:["00 miljarder",2]}],[1e11,{one:["000 miljarder",3],other:["000 miljarder",3]}],[1e12,{one:["0 biljon",1],other:["0 biljoner",1]}],[1e13,{one:["00 biljoner",2],other:["00 biljoner",2]}],[1e14,{one:["000 biljoner",3],other:["000 biljoner",3]}]],short:[[1e3,{one:["0 tn",1],other:["0 tn",1]}],[1e4,{one:["00 tn",2],other:["00 tn",2]}],[1e5,{one:["000 tn",3],other:["000 tn",3]}],[1e6,{one:["0 mn",1],other:["0 mn",1]}],[1e7,{one:["00 mn",2],other:["00 mn",2]}],[1e8,{one:["000 mn",3],other:["000 mn",3]}],[1e9,{one:["0 md",1],other:["0 md",1]}],[1e10,{one:["00 md",2],other:["00 md",2]}],[1e11,{one:["000 md",3],other:["000 md",3]}],[1e12,{one:["0 bn",1],other:["0 bn",1]}],[1e13,{one:["00 bn",2],other:["00 bn",2]}],[1e14,{one:["000 bn",3],other:["000 bn",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/th",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"th-th",parentLocale:"th"},{locale:"th",numbers:{decimal:{long:[[1e3,{other:["0 พัน",1]}],[1e4,{other:["0 หมื่น",1]}],[1e5,{other:["0 แสน",1]}],[1e6,{other:["0 ล้าน",1]}],[1e7,{other:["00 ล้าน",2]}],[1e8,{other:["000 ล้าน",3]}],[1e9,{other:["0 พันล้าน",1]}],[1e10,{other:["0 หมื่นล้าน",1]}],[1e11,{other:["0 แสนล้าน",1]}],[1e12,{other:["0 ล้านล้าน",1]}],[1e13,{other:["00 ล้านล้าน",2]}],[1e14,{other:["000 ล้านล้าน",3]}]],short:[[1e3,{other:["0K",1]}],[1e4,{other:["00K",2]}],[1e5,{other:["000K",3]}],[1e6,{other:["0M",1]}],[1e7,{other:["00M",2]}],[1e8,{other:["000M",3]}],[1e9,{other:["0B",1]}],[1e10,{other:["00B",2]}],[1e11,{other:["000B",3]}],[1e12,{other:["0T",1]}],[1e13,{other:["00T",2]}],[1e14,{other:["000T",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/tr",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"tr-tr",parentLocale:"tr"},{locale:"tr",numbers:{decimal:{long:[[1e3,{one:["0 bin",1],other:["0 bin",1]}],[1e4,{one:["00 bin",2],other:["00 bin",2]}],[1e5,{one:["000 bin",3],other:["000 bin",3]}],[1e6,{one:["0 milyon",1],other:["0 milyon",1]}],[1e7,{one:["00 milyon",2],other:["00 milyon",2]}],[1e8,{one:["000 milyon",3],other:["000 milyon",3]}],[1e9,{one:["0 milyar",1],other:["0 milyar",1]}],[1e10,{one:["00 milyar",2],other:["00 milyar",2]}],[1e11,{one:["000 milyar",3],other:["000 milyar",3]}],[1e12,{one:["0 trilyon",1],other:["0 trilyon",1]}],[1e13,{one:["00 trilyon",2],other:["00 trilyon",2]}],[1e14,{one:["000 trilyon",3],other:["000 trilyon",3]}]],short:[[1e3,{one:["0 B",1],other:["0 B",1]}],[1e4,{one:["00 B",2],other:["00 B",2]}],[1e5,{one:["000 B",3],other:["000 B",3]}],[1e6,{one:["0 Mn",1],other:["0 Mn",1]}],[1e7,{one:["00 Mn",2],other:["00 Mn",2]}],[1e8,{one:["000 Mn",3],other:["000 Mn",3]}],[1e9,{one:["0 Mr",1],other:["0 Mr",1]}],[1e10,{one:["00 Mr",2],other:["00 Mr",2]}],[1e11,{one:["000 Mr",3],other:["000 Mr",3]}],[1e12,{one:["0 Tn",1],other:["0 Tn",1]}],[1e13,{one:["00 Tn",2],other:["00 Tn",2]}],[1e14,{one:["000 Tn",3],other:["000 Tn",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/uk",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"uk-ua",parentLocale:"uk"},{locale:"uk",numbers:{decimal:{long:[[1e3,{one:["0 тисяча",1],few:["0 тисячі",1],many:["0 тисяч",1],other:["0 тисячі",1]}],[1e4,{one:["00 тисяча",2],few:["00 тисячі",2],many:["00 тисяч",2],other:["00 тисячі",2]}],[1e5,{one:["000 тисяча",3],few:["000 тисячі",3],many:["000 тисяч",3],other:["000 тисячі",3]}],[1e6,{one:["0 мільйон",1],few:["0 мільйони",1],many:["0 мільйонів",1],other:["0 мільйона",1]}],[1e7,{one:["00 мільйон",2],few:["00 мільйони",2],many:["00 мільйонів",2],other:["00 мільйона",2]}],[1e8,{one:["000 мільйон",3],few:["000 мільйони",3],many:["000 мільйонів",3],other:["000 мільйона",3]}],[1e9,{one:["0 мільярд",1],few:["0 мільярди",1],many:["0 мільярдів",1],other:["0 мільярда",1]}],[1e10,{one:["00 мільярд",2],few:["00 мільярди",2],many:["00 мільярдів",2],other:["00 мільярда",2]}],[1e11,{one:["000 мільярд",3],few:["000 мільярди",3],many:["000 мільярдів",3],other:["000 мільярда",3]}],[1e12,{one:["0 трильйон",1],few:["0 трильйони",1],many:["0 трильйонів",1],other:["0 трильйона",1]}],[1e13,{one:["00 трильйон",2],few:["00 трильйони",2],many:["00 трильйонів",2],other:["00 трильйона",2]}],[1e14,{one:["000 трильйон",3],few:["000 трильйони",3],many:["000 трильйонів",3],other:["000 трильйона",3]}]],short:[[1e3,{one:["0 тис'.'",1],few:["0 тис'.'",1],many:["0 тис'.'",1],other:["0 тис'.'",1]}],[1e4,{one:["00 тис'.'",2],few:["00 тис'.'",2],many:["00 тис'.'",2],other:["00 тис'.'",2]}],[1e5,{one:["000 тис'.'",3],few:["000 тис'.'",3],many:["000 тис'.'",3],other:["000 тис'.'",3]}],[1e6,{one:["0 млн",1],few:["0 млн",1],many:["0 млн",1],other:["0 млн",1]}],[1e7,{one:["00 млн",2],few:["00 млн",2],many:["00 млн",2],other:["00 млн",2]}],[1e8,{one:["000 млн",3],few:["000 млн",3],many:["000 млн",3],other:["000 млн",3]}],[1e9,{one:["0 млрд",1],few:["0 млрд",1],many:["0 млрд",1],other:["0 млрд",1]}],[1e10,{one:["00 млрд",2],few:["00 млрд",2],many:["00 млрд",2],other:["00 млрд",2]}],[1e11,{one:["000 млрд",3],few:["000 млрд",3],many:["000 млрд",3],other:["000 млрд",3]}],[1e12,{one:["0 трлн",1],few:["0 трлн",1],many:["0 трлн",1],other:["0 трлн",1]}],[1e13,{one:["00 трлн",2],few:["00 трлн",2],many:["00 трлн",2],other:["00 трлн",2]}],[1e14,{one:["000 трлн",3],few:["000 трлн",3],many:["000 трлн",3],other:["000 трлн",3]}]]}}}]})),define("web-experience-app/cldrs-shorts/vi",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"vi-vi",parentLocale:"vi"},{locale:"vi",numbers:{decimal:{long:[[1e3,{other:["0 nghìn",1]}],[1e4,{other:["00 nghìn",2]}],[1e5,{other:["000 nghìn",3]}],[1e6,{other:["0 triệu",1]}],[1e7,{other:["00 triệu",2]}],[1e8,{other:["000 triệu",3]}],[1e9,{other:["0 tỷ",1]}],[1e10,{other:["00 tỷ",2]}],[1e11,{other:["000 tỷ",3]}],[1e12,{other:["0 nghìn tỷ",1]}],[1e13,{other:["00 nghìn tỷ",2]}],[1e14,{other:["000 nghìn tỷ",3]}]],short:[[1e3,{other:["0 N",1]}],[1e4,{other:["00 N",2]}],[1e5,{other:["000 N",3]}],[1e6,{other:["0 Tr",1]}],[1e7,{other:["00 Tr",2]}],[1e8,{other:["000 Tr",3]}],[1e9,{other:["0 T",1]}],[1e10,{other:["00 T",2]}],[1e11,{other:["000 T",3]}],[1e12,{other:["0 NT",1]}],[1e13,{other:["00 NT",2]}],[1e14,{other:["000 NT",3]}]]}}},{locale:"vi-vn",parentLocale:"vi"}]})),define("web-experience-app/cldrs-shorts/zh",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=[{locale:"zh-cn",parentLocale:"zh"},{locale:"zh",numbers:{decimal:{long:[[1e3,{other:["0",1]}],[1e4,{other:["0万",1]}],[1e5,{other:["00万",2]}],[1e6,{other:["000万",3]}],[1e7,{other:["0000万",4]}],[1e8,{other:["0亿",1]}],[1e9,{other:["00亿",2]}],[1e10,{other:["000亿",3]}],[1e11,{other:["0000亿",4]}],[1e12,{other:["0兆",1]}],[1e13,{other:["00兆",2]}],[1e14,{other:["000兆",3]}]],short:[[1e3,{other:["0",1]}],[1e4,{other:["0万",1]}],[1e5,{other:["00万",2]}],[1e6,{other:["000万",3]}],[1e7,{other:["0000万",4]}],[1e8,{other:["0亿",1]}],[1e9,{other:["00亿",2]}],[1e10,{other:["000亿",3]}],[1e11,{other:["0000亿",4]}],[1e12,{other:["0兆",1]}],[1e13,{other:["00兆",2]}],[1e14,{other:["000兆",3]}]]}}},{locale:"zh-Hans",parentLocale:"zh"},{locale:"zh-Hant",numbers:{decimal:{long:[[1e3,{other:["0",1]}],[1e4,{other:["0萬",1]}],[1e5,{other:["00萬",2]}],[1e6,{other:["000萬",3]}],[1e7,{other:["0000萬",4]}],[1e8,{other:["0億",1]}],[1e9,{other:["00億",2]}],[1e10,{other:["000億",3]}],[1e11,{other:["0000億",4]}],[1e12,{other:["0兆",1]}],[1e13,{other:["00兆",2]}],[1e14,{other:["000兆",3]}]],short:[[1e3,{other:["0",1]}],[1e4,{other:["0萬",1]}],[1e5,{other:["00萬",2]}],[1e6,{other:["000萬",3]}],[1e7,{other:["0000萬",4]}],[1e8,{other:["0億",1]}],[1e9,{other:["00億",2]}],[1e10,{other:["000億",3]}],[1e11,{other:["0000億",4]}],[1e12,{other:["0兆",1]}],[1e13,{other:["00兆",2]}],[1e14,{other:["000兆",3]}]]}}},{locale:"zh-hk",parentLocale:"zh"},{locale:"zh-tw",parentLocale:"zh"}]})),define("web-experience-app/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/amp-artwork/image",["exports","@amp/ember-ui-media-artwork/components/amp-artwork/image"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/amp-artwork/wea",["exports","@amp/ember-ui-media-artwork/components/amp-artwork/wea"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/animation-wrapper",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/template"],(function(e,t,r,n,o,i){var a,l
function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,v,g,w,O,P=(0,r.createTemplateFactory)({id:"NOPcV2PG",block:'[[[10,0],[15,0,[29,["animation-wrapper ",[52,[30,0,["hideContent"]],"is-hidden","is-visible"]]]],[12],[1,"\\n  "],[18,1,null],[1,"\\n\\n"],[41,[30,0,["hideContent"]],[[[1,"    "],[10,0],[14,0,"animation-wrapper__container"],[12],[1,"\\n      "],[10,0],[14,0,"animation-wrapper__spinner"],[12],[13],[1,"\\n      "],[10,0],[14,0,"animation-wrapper__progress-outer"],[12],[1,"\\n        "],[10,0],[14,0,"animation-wrapper__progress-inner"],[15,5,[30,0,["intervalTransform"]]],[12],[13],[1,"\\n        "],[1,[30,0,["interval"]]],[1,"%\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13],[1,"\\n"]],["&default"],false,["if","yield"]]',moduleName:"web-experience-app/components/animation-wrapper.hbs",isStrictMode:!1}),_=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(a,e)
var t,r,n,o=f(a)
function a(){var e
c(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=o.call.apply(o,[this].concat(r))),"routerState",l,b(e)),e}return t=a,(r=[{key:"hideContent",get:function(){return this.routerState.isTransitioning}},{key:"interval",get:function(){return this.routerState.timer}},{key:"intervalTransform",get:function(){return(0,i.htmlSafe)("transform: translateX(".concat(this.interval,"%)"))}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),y=a.prototype,h="routerState",v=[o.inject],g={configurable:!0,enumerable:!0,writable:!0,initializer:null},O={},Object.keys(g).forEach((function(e){O[e]=g[e]})),O.enumerable=!!O.enumerable,O.configurable=!!O.configurable,("value"in O||O.initializer)&&(O.writable=!0),O=v.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),O),w&&void 0!==O.initializer&&(O.value=O.initializer?O.initializer.call(w):void 0,O.initializer=void 0),void 0===O.initializer&&(Object.defineProperty(y,h,O),O=null),l=O,a)
e.default=_,(0,t.setComponentTemplate)(P,_)})),define("web-experience-app/components/bidi-text",["exports","@amp/ember-ui-bidi-text/components/bidi-text"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/global-elements-footer",["exports","@amp/ember-ui-global-elements/components/global-elements-footer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/global-elements-meta",["exports","@amp/ember-ui-global-elements/components/global-elements-meta"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/global-elements-nav",["exports","@amp/ember-ui-global-elements/components/global-elements-nav"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/global-elements-scripts",["exports","@amp/ember-ui-global-elements/components/global-elements-scripts"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/global-elements-styles",["exports","@amp/ember-ui-global-elements/components/global-elements-styles"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/global-elements",["exports","@amp/ember-ui-global-elements/components/global-elements"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/html-tag",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"ovu8qVkv",block:'[[[41,[28,[37,1],[[30,1],"ul"],null],[[[1,"  "],[11,"ul"],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"a"],null],[[[1,"  "],[11,3],[24,6,"#"],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"blockquote"],null],[[[1,"  "],[11,"blockquote"],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"dd"],null],[[[1,"  "],[11,"dd"],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"dt"],null],[[[1,"  "],[11,"dt"],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"h3"],null],[[[1,"  "],[11,"h3"],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"h4"],null],[[[1,"  "],[11,"h4"],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"span"],null],[[[1,"  "],[11,1],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]],[[[1,"  "],[11,0],[17,2],[12],[18,3,null],[13],[1,"\\n"]],[]]]],[]]]],[]]]],[]]]],[]]]],[]]]],[]]]],[]]]],["@tagName","&attrs","&default"],false,["if","eq","yield"]]',moduleName:"web-experience-app/components/html-tag.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/items-resolver",["exports","@amp/ember-ui-media-shelf/components/items-resolver"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/media-shelf-grid",["exports","@amp/ember-ui-media-shelf/components/media-shelf-grid"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/media-shelf-grid/body",["exports","@amp/ember-ui-media-shelf/components/media-shelf-grid/body"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/media-shelf-grid/list-item",["exports","@amp/ember-ui-media-shelf/components/media-shelf-grid/list-item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/media-shelf-grid/nav",["exports","@amp/ember-ui-media-shelf/components/media-shelf-grid/nav"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/pages/author/author-header",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"gDTz2PEK",block:'[[[10,0],[12],[1,"\\n  "],[10,0],[14,0,"l-content-width product-header page-header page-header--author page-header--b"],[12],[1,"\\n    "],[10,"h1"],[14,0,"page-header__title"],[12],[1,"\\n      "],[1,[30,1,["name"]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"product-header__routes"],[12],[1,"\\n      "],[8,[39,0],null,[["@url"],[[30,1,["url"]]]],null],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@author"],false,["we-web-to-native-cta/apple-books"]]',moduleName:"web-experience-app/components/pages/author/author-header.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/pages/book/badges/size",["exports","@glimmer/component","web-experience-app/macros/field-from-asset","web-experience-app/utils/bytes-to-readable"],(function(e,t,r,n){var o,i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(o=(0,r.fieldFromAssetMacro)("args.book.offers","size",n.parse),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(i,e)
var t,r,n,o=p(i)
function i(){var e
c(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=o.call.apply(o,[this].concat(r))),"size",a,d(e)),e}return t=i,r&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(t.default),m=i.prototype,y="size",h=[o],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),a=w,i)
e.default=O})),define("web-experience-app/components/pages/podcast-episode",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service","web-experience-app/utils/podcasts/podcasts","web-experience-app/utils/podcasts/is-valid-url"],(function(e,t,r,n,o,i,a,l){var u,c,s,p,f,d,b
function m(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=P(e)
if(t){var o=P(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return w(this,r)}}function w(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(0,r.createTemplateFactory)({id:"HAZJingV",block:'[[[11,0],[17,1],[12],[1,"\\n  "],[10,"section"],[12],[1,"\\n    "],[10,0],[14,0,"l-row"],[12],[1,"\\n      "],[10,0],[14,0,"l-column medium-5 large-4 small-valign-top small-hide medium-show-inlineblock"],[12],[1,"\\n"],[41,[30,2,["artwork"]],[[[1,"          "],[8,[39,1],[[24,0,"product-artwork product-artwork--bottom-separator product-artwork--captioned we-artwork--fullwidth"]],[["@artwork","@lazyLoad","@profile"],[[30,2,["artwork"]],false,"product-hero-podcast"]],null],[1,"\\n"]],[]],null],[1,"\\n"],[1,"        "],[10,0],[15,0,[28,[37,2],["product-artwork__caption small-hide medium-show ",[52,[30,0,["showAudioControls"]],"is-playing"]],null]],[12],[1,"\\n"],[41,[30,0,["showAudioControls"]],[[[1,"            "],[10,0],[14,0,"product-controls product-controls--artwork-controls"],[12],[1,"\\n              "],[8,[39,3],null,[["@duration","@isActiveTrack","@isLoading","@isPlayableQueue","@isPlaying","@media","@mediaId","@queue"],[[30,0,["duration"]],[30,0,["isActiveTrack"]],[30,0,["showLoadingSpinner"]],[30,0,["isPlayableTrack"]],[30,0,["isPlaying"]],[30,0,["media"]],[30,2,["id"]],[30,0,["episodeQueue"]]]],null],[1,"\\n            "],[13],[1,"\\n"]],[]],[[[41,[30,0,["duration"]],[[[41,[51,[30,0,["showAudioControls"]]],[[[1,"                "],[10,2],[12],[1,[28,[35,5],[[30,0,["duration"]]],[["abbr"],[true]]]],[13],[1,"\\n"]],[]],null]],[]],null],[1,"\\n"],[41,[30,0,["isPlayableTrack"]],[[[1,"              "],[10,0],[14,0,"product-controls product-controls--artwork"],[12],[1,"\\n"],[41,[30,0,["isVideoTrack"]],[[[1,"                  "],[8,[39,6],[[24,0,"product-controls__button link icon icon-after icon-play"],[16,"aria-label",[28,[37,7],["WEA.PodcastPages.Play.Podcast.AX"],[["podcastName","podcastArtist"],[[30,2,["name"]],[30,2,["artistName"]]]]]]],[["@metricsData","@media"],[[28,[37,8],["playAll"],[["id"],[[30,2,["id"]]]]],[30,0,["episodeQueue"]]]],[["default"],[[[[1,[28,[35,7],["WEA.Common.Play"],null]]],[]]]]],[1,"\\n"]],[]],[[[1,"                  "],[11,"button"],[16,0,[28,[37,2],["product-controls__button link icon icon-after ",[52,[30,0,["isPlaying"]],"icon-pause","icon-play"]],null]],[16,"aria-label",[30,0,["playButtonAria"]]],[16,"data-metrics-click",[28,[37,8],["playAll"],[["id"],[[30,2,["id"]]]]]],[16,"disabled",[30,0,["isPlaying"]]],[24,4,"button"],[4,[38,9],["click",[30,0,["playEpisode"]]],null],[12],[1,[30,0,["playButtonLabel"]]],[13],[1,"\\n"]],[]]],[1,"              "],[13],[1,"\\n"]],[]],null]],[]]],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"l-column small-12 medium-7 large-8 small-valign-top"],[12],[1,"\\n        "],[10,0],[14,0,"l-row"],[12],[1,"\\n          "],[10,0],[14,0,"l-column small-5 medium-hide small-valign-top"],[12],[1,"\\n"],[41,[30,2,["artwork"]],[[[1,"              "],[8,[39,1],[[24,0,"product-artwork product-artwork--bottom-separator we-artwork--fullwidth"]],[["@artwork","@profile"],[[30,2,["artwork"]],"product-hero-podcast"]],null],[1,"\\n"]],[]],null],[1,"          "],[13],[1,"\\n\\n          "],[10,0],[14,0,"l-column small-7 medium-12 small-valign-top"],[12],[1,"\\n            "],[10,"header"],[14,0,"product-header product-header--padded-start podcast-header"],[12],[1,"\\n              "],[10,"h1"],[12],[1,"\\n                "],[10,1],[15,0,[29,["product-header__title",[52,[30,0,["isExplicit"]]," icon icon-after icon-explicit-large"]]]],[15,"aria-label",[29,[[30,2,["name"]],[52,[30,0,["isExplicit"]],[28,[37,2],[" ",[28,[37,7],["WEA.PodcastPages.Explicit.AX"],null]],null]]]]],[12],[1,"\\n                  "],[1,[28,[35,10],[[30,2,["name"]]],null]],[1,"\\n                "],[13],[1,"\\n\\n                "],[10,1],[14,0,"product-header__identity podcast-header__identity"],[12],[1,"\\n"],[41,[30,3,["url"]],[[[1,"                    "],[10,3],[15,6,[29,[[30,3,["url"]]]]],[14,0,"link"],[15,"data-metrics-click",[28,[37,8],["linkToPodcast"],null]],[12],[1,"\\n                      "],[1,[30,3,["name"]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],[[[1,"                    "],[1,[28,[35,11],[[30,3,["name"]],[30,2,["artistName"]]],null]],[1,"\\n"]],[]]],[1,"                "],[13],[1,"\\n              "],[13],[1,"\\n\\n              "],[10,"ul"],[14,0,"product-header__list podcast-header__list"],[12],[1,"\\n                "],[10,"li"],[14,0,"product-header__list__item"],[12],[1,"\\n                  "],[10,"ul"],[14,0,"inline-list"],[12],[1,"\\n                    "],[10,"li"],[14,0,"inline-list__item inline-list__item--bulleted"],[12],[1,"\\n                      "],[1,[30,0,["primaryGenreName"]]],[1,"\\n                    "],[13],[1,"\\n                  "],[13],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n\\n              "],[10,0],[14,0,"small-hide medium-show"],[12],[1,"\\n                "],[10,0],[14,0,"product-header__routes podcast-header__routes"],[12],[1,"\\n                  "],[10,2],[14,0,"product-header__routes__cta"],[12],[1,"\\n                    "],[8,[39,12],null,[["@url","@subscriptionTextKey"],[[30,2,["url"]],[52,[30,0,["hasSubscriberAudio"]],[52,[30,0,["hasPaidContent"]],"WEA.PodcastPages.CTA.Podcasts.Subscribe.MinRequirement","WEA.PodcastPages.CTA.Podcasts.Free.MinRequirement"]]]],null],[1,"\\n                  "],[13],[1,"\\n\\n                  "],[8,[39,13],[[24,0,"we-share--header"]],[["@model","@contentType","@metricsClickEvent","@creator","@isEmbedEnabled"],[[30,2],"podcast","sharePodcast",[28,[37,11],[[30,3,["name"]],[30,2,["artistName"]]],null],true]],null],[1,"\\n                "],[13],[1,"\\n\\n                "],[10,0],[14,0,"product-hero-desc product-hero-desc--spacer-bottom-large"],[12],[1,"\\n"],[41,[30,0,["episodeDescription"]],[[[1,"                    "],[10,"section"],[14,0,"section section--no-padding-bottom product-hero-desc__section"],[12],[1,"\\n                      "],[8,[39,14],null,[["@value"],[[28,[37,15],[[30,0,["episodeDescription"]]],null]]],null],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[1,"                "],[13],[1,"\\n\\n                "],[10,"ul"],[14,0,"product-header__list"],[12],[1,"\\n"],[41,[30,0,["showEpisodeWebsite"]],[[[1,"                    "],[10,"li"],[14,0,"product-header__list__item list-button"],[12],[1,"\\n                      "],[10,3],[15,6,[29,[[30,2,["websiteUrl"]]]]],[14,0,"link icon icon-after icon-external"],[12],[1,[28,[35,7],["WEA.PodcastEpisodePages.Website"],null]],[13],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,3,["url"]],[[[1,"                    "],[10,"li"],[14,0,"product-header__list__item list-button"],[12],[1,"\\n                      "],[10,3],[15,6,[29,[[30,3,["url"]]]]],[14,0,"link"],[15,"data-metrics-click",[28,[37,8],["linkToPodcast"],null]],[12],[1,[28,[35,7],["WEA.PodcastEpisodePages.More"],null]],[13],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"                "],[13],[1,"\\n\\n                "],[10,"ul"],[14,0,"tracklist-footer"],[12],[1,"\\n"],[41,[30,2,["copyright"]],[[[1,"                    "],[10,"li"],[14,0,"tracklist-footer__item"],[12],[1,"\\n                      "],[1,[30,2,["copyright"]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"                "],[13],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"medium-hide"],[12],[1,"\\n      "],[10,0],[14,0,"product-hero-desc product-hero-desc--small product-hero-desc--spacer-bottom"],[12],[1,"\\n"],[41,[30,0,["episodeDescription"]],[[[1,"          "],[10,"section"],[14,0,"product-hero-desc__section"],[12],[1,"\\n            "],[8,[39,16],null,[["@clampProfile","@isInteractive","@value","@dataMetricsClick"],["product-description",true,[28,[37,15],[[30,0,["episodeDescription"]]],null],[28,[37,8],["expandMore"],null]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[1,"      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"product-header__routes podcast-header__routes"],[12],[1,"\\n        "],[10,2],[14,0,"product-header__routes__cta"],[12],[1,"\\n          "],[8,[39,12],null,[["@url","@subscriptionTextKey"],[[30,2,["url"]],[52,[30,2,["hasSubscriberAudio"]],[52,[30,2,["hasPaidContent"]],"WEA.PodcastPages.CTA.Podcasts.Subscribe.MinRequirement","WEA.PodcastPages.CTA.Podcasts.Free.MinRequirement"]]]],null],[1,"\\n        "],[13],[1,"\\n\\n        "],[8,[39,13],[[24,0,"we-share--header"]],[["@model","@contentType","@metricsClickEvent","@mediaTitle","@creator","@isEmbedEnabled"],[[30,2],"podcast","sharePodcast",[30,2,["name"]],[28,[37,11],[[30,3,["name"]],[30,2,["artistName"]]],null],true]],null],[1,"\\n      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"product-hero__controls product-hero__controls--no-top-spacer"],[12],[1,"\\n"],[41,[30,0,["showAudioControls"]],[[[1,"          "],[10,0],[14,0,"product-controls product-controls--hero-controls"],[12],[1,"\\n            "],[8,[39,3],null,[["@duration","@isActiveTrack","@isLoading","@isPlayableQueue","@isPlaying","@media","@mediaId","@queue"],[[30,0,["duration"]],[30,0,["isActiveTrack"]],[30,0,["showLoadingSpinner"]],[30,0,["isPlayableTrack"]],[30,0,["isPlaying"]],[30,0,["media"]],[30,2,["id"]],[30,0,["episodeQueue"]]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]],[[[41,[30,0,["isPlayableTrack"]],[[[1,"            "],[10,0],[14,0,"product-controls product-controls--hero"],[12],[1,"\\n"],[41,[30,0,["isVideoTrack"]],[[[1,"                "],[8,[39,6],[[16,"aria-label",[28,[37,7],["WEA.PodcastPages.Play.Podcast.AX"],[["podcastName","podcastArtist"],[[30,2,["name"]],[30,2,["artistName"]]]]]],[24,0,"product-controls__button link icon icon-before icon-play"]],[["@metricsData","@media"],[[28,[37,8],["playAll"],[["id"],[[30,2,["id"]]]]],[30,0,["episodeQueue"]]]],[["default"],[[[[1,[28,[35,7],["WEA.Common.Play"],null]]],[]]]]],[1,"\\n"]],[]],[[[41,[51,[30,0,["isActiveTrack"]]],[[[1,"                  "],[11,"button"],[16,0,[28,[37,2],["product-controls__button link icon icon-before ",[52,[30,0,["isPlaying"]],"icon-pause","icon-play"]],null]],[16,"aria-label",[30,0,["playButtonAria"]]],[16,"data-metrics-click",[28,[37,8],["playAll"],[["id"],[[30,2,["id"]]]]]],[16,"disabled",[30,0,["isPlaying"]]],[24,4,"button"],[4,[38,9],["click",[30,0,["playEpisode"]]],null],[12],[1,[30,0,["playButtonLabel"]]],[13],[1,"\\n"]],[]],null]],[]]],[1,"            "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["duration"]],[[[1,"            "],[10,2],[14,0,"product-controls__info"],[12],[1,[28,[35,5],[[30,0,["duration"]]],[["abbr"],[true]]]],[13],[1,"\\n"]],[]],null]],[]]],[1,"      "],[13],[1,"\\n\\n      "],[10,"ul"],[14,0,"product-header__list"],[12],[1,"\\n"],[41,[30,0,["showEpisodeWebsite"]],[[[1,"          "],[10,"li"],[14,0,"product-header__list__item list-button"],[12],[1,"\\n            "],[10,3],[15,6,[29,[[30,2,["websiteUrl"]]]]],[14,0,"link icon icon-after icon-external"],[12],[1,[28,[35,7],["WEA.PodcastEpisodePages.Website"],null]],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,3,["url"]],[[[1,"          "],[10,"li"],[14,0,"product-header__list__item list-button"],[12],[1,"\\n            "],[10,3],[15,6,[29,[[30,3,["url"]]]]],[14,0,"link"],[15,"data-metrics-click",[28,[37,8],["linkToPodcast"],null]],[12],[1,[28,[35,7],["WEA.PodcastEpisodePages.More"],null]],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n\\n      "],[10,"ul"],[14,0,"tracklist-footer"],[12],[1,"\\n"],[41,[30,2,["copyright"]],[[[1,"          "],[10,"li"],[14,0,"tracklist-footer__item"],[12],[1,"\\n            "],[1,[30,2,["copyright"]]],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["&attrs","@model","@podcast"],false,["if","amp-artwork/wea","concat","we-audio-controls","unless","loc-duration","we-video-trigger","t","metrics-data","on","anchor-punctuation","or","we-web-to-native-cta/apple-podcasts","we-share","bidi-text","html-sanitize","we-truncate"]]',moduleName:"web-experience-app/components/pages/podcast-episode.hbs",isStrictMode:!1}),k=(u=(0,o.computed)("args.model.mediaKind"),c=(0,o.computed)("args.model.mediaKind"),s=(0,o.computed)("args.model.description.{standard,short}"),p=(0,o.computed)("args.model.websiteUrl"),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)})(i,e)
var t,r,n,o=g(i)
function i(){var e
y(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return m(O(e=o.call.apply(o,[this].concat(r))),"i18n",d,O(e)),m(O(e),"mediaPlayer",b,O(e)),e}return t=i,(r=[{key:"isPlayableTrack",get:function(){return!!this.isVideoTrack||!!this.isAudioTrack&&(0,a.hasExternalFreeContent)(this.args.model)}},{key:"isAudioTrack",get:function(){return"audio"===this.args.model.mediaKind}},{key:"isVideoTrack",get:function(){return"video"===this.args.model.mediaKind}},{key:"media",get:function(){var e=this.isPlayableTrack,t=this.isVideoTrack,r=this.mediaPlayer,n=this.args.model
if(e)return t?r.toMediaMeta(n,"podcastVideo"):r.toMediaResourceFromDataRecord(n,"podcast-episodes")}},{key:"episodeQueue",get:function(){var e,t=this.isVideoTrack,r=this.mediaPlayer,n=this.media
if(this.isPlayableTrack)return t?n:((0,a.hasExternalFreeContent)(this.args.model)&&null!=n&&null!==(e=n.attributes)&&void 0!==e&&e.offers&&(n.attributes.offers=n.attributes.offers.filter((function(e){return"STDQ"===e.type}))),r.buildPodcastEpisodesQueue([n]))}},{key:"playEpisode",value:function(){var e=this.episodeQueue
if(e)return this.mediaPlayer.togglePlayback(e)}},{key:"isPlaying",get:function(){return this.mediaPlayer.musicIsPlaying}},{key:"isPaused",get:function(){return this.mediaPlayer.musicIsPaused}},{key:"showLoadingSpinner",get:function(){return this.mediaPlayer.musicIsLoading||this.mediaPlayer.isSeeking}},{key:"showAudioControls",get:function(){return this.isActiveTrack&&this.isAudioTrack}},{key:"isActiveTrack",get:function(){var e=this.mediaPlayer,t=e.nowPlayingItem,r=e.isStopped
return!!t&&!r}},{key:"episodeDescription",get:function(){var e=(this.args.model||{}).description,t=void 0===e?{}:e
return t.standard||t.short}},{key:"playButtonAria",get:function(){var e=this.i18n,t=this.isPlaying,r=this.args.model,n=r.name,o=r.artistName
return t?e.t("WEA.PodcastPages.Pause.Podcast.AX"):e.t("WEA.PodcastPages.Play.Podcast.AX",{podcastName:n,podcastArtist:o})}},{key:"playButtonLabel",get:function(){var e=this.i18n,t=this.isPlaying?"Pause":"Play"
return e.t("WEA.Common.".concat(t,".Alternate"))}},{key:"showEpisodeWebsite",get:function(){return(0,l.default)(this.args.model.websiteUrl)}},{key:"primaryGenreName",get:function(){var e,t,r
return(null===(e=this.args.model.genres)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.name)||(null===(r=this.args.model.genreNames)||void 0===r?void 0:r[0])}},{key:"duration",get:function(){return this.args.model.durationInMilliseconds/1e3}},{key:"isExplicit",get:function(){return"explicit"===this.args.model.contentRating}},{key:"hasPaidContent",get:function(){return(0,a.hasPaidContent)(this.args.model)}},{key:"hasSubscriberAudio",get:function(){return(0,a.hasSubscriberAudio)(this.args.model)}}])&&h(t.prototype,r),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),d=_(f.prototype,"i18n",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=_(f.prototype,"mediaPlayer",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_(f.prototype,"isAudioTrack",[u],Object.getOwnPropertyDescriptor(f.prototype,"isAudioTrack"),f.prototype),_(f.prototype,"isVideoTrack",[c],Object.getOwnPropertyDescriptor(f.prototype,"isVideoTrack"),f.prototype),_(f.prototype,"playEpisode",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"playEpisode"),f.prototype),_(f.prototype,"episodeDescription",[s],Object.getOwnPropertyDescriptor(f.prototype,"episodeDescription"),f.prototype),_(f.prototype,"showEpisodeWebsite",[p],Object.getOwnPropertyDescriptor(f.prototype,"showEpisodeWebsite"),f.prototype),f)
e.default=k,(0,t.setComponentTemplate)(j,k)}))
define("web-experience-app/components/pages/podcast/episode-list",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service","@ember/runloop","@glimmer/tracking","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a,l,u){var c,s,p,f,d,b,m
function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return h(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function v(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function g(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){v(i,n,o,a,l,"next",e)}function l(e){v(i,n,o,a,l,"throw",e)}a(void 0)}))}}function w(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=T(e)
if(t){var o=T(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return k(this,r)}}function k(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var S=(0,r.createTemplateFactory)({id:"SCaIxIju",block:'[[[11,0],[17,1],[4,[38,0],[[30,0,["setEpisodes"]],[30,2]],null],[12],[1,"\\n  "],[10,0],[14,0,"section section--bordered"],[12],[1,"\\n    "],[10,"ol"],[14,0,"tracks tracks--linear-show"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["episodes"]]],null]],null],null,[[[1,"        "],[8,[39,3],[[24,0,"tracks__track tracks__track--podcast"]],[["@episode","@isPlayableQueue","@artistName","@episodeQueue","@isPodcastExplicit"],[[30,3],[30,0,["isPlayableQueue"]],[30,0,["podcastName"]],[30,0,["episodeQueue"]],[30,4]]],null],[1,"\\n"]],[3]],null],[1,"    "],[13],[1,"\\n\\n"],[41,[28,[37,5],[[28,[37,6],[[28,[37,7],null,null]],null],[30,0,["hasMoreEpisodes"]]],null],[[[1,"      "],[10,0],[14,0,"list-button"],[12],[1,"\\n"],[41,[30,0,["episodesAreLoading"]],[[[1,"          "],[8,[39,8],[[24,0,"we-loading-spinner--small"]],[["@forceDisplay"],[true]],null],[1,"\\n"]],[]],[[[1,"          "],[11,"button"],[24,0,"link"],[16,"data-metrics-click",[28,[37,9],["seeMoreEpisodes"],null]],[24,4,"button"],[4,[38,10],["click",[30,0,["showMoreEpisodes"]]],null],[12],[1,"\\n            "],[1,[28,[35,11],["WEA.PodcastPages.ShowMoreEpisodes"],[["count"],[[30,0,["loadMoreCount"]]]]]],[1,"\\n          "],[13],[1,"\\n"]],[]]],[1,"      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,5],[[[1,"      "],[10,"ul"],[14,0,"tracklist-footer"],[12],[1,"\\n        "],[10,"li"],[14,0,"tracklist-footer__item"],[12],[1,"\\n          "],[1,[30,5]],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n"],[13],[1,"\\n"]],["&attrs","@episodes","episode","@isPodcastExplicit","@copyright"],false,["did-update","each","-track-array","pages/podcast/episode","if","and","not","is-ssr","we-loading-spinner","metrics-data","on","t"]]',moduleName:"web-experience-app/components/pages/podcast/episode-list.hbs",isStrictMode:!1}),E=["audio","video"],R=(c=(0,i.inject)("media-api/podcasts"),s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)})(c,e)
var t,r,n,o,i,l=j(c)
function c(){var e
return O(this,c),w(x(e=l.apply(this,arguments)),"videoPlayer",p,x(e)),w(x(e),"mediaPlayer",f,x(e)),w(x(e),"podcastsApi",d,x(e)),w(x(e),"episodes",b,x(e)),w(x(e),"episodesAreLoading",m,x(e)),e.episodes=e.args.episodes,e}return t=c,(r=[{key:"hasMoreEpisodes",get:function(){var e
return!(null===(e=this.episodes.meta)||void 0===e||!e.next)}},{key:"loadMoreCount",get:function(){var e=this.remainingEpisodes
return Math.min(e,10)}},{key:"remainingEpisodes",get:function(){return this.args.trackCount-this.episodes.length}},{key:"loadNext",value:(i=g(regeneratorRuntime.mark((function e(){var t,r,n,o,i,l=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.episodes,r=t.meta.next,e.next=4,this.podcastsApi.getDataFromNextURL(r,t)
case 4:n=e.sent,o=n.mergedRecords,i=n.newRecords,this.episodes=o,(0,a.next)(this,g(regeneratorRuntime.mark((function e(){var t,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.isDestroyed&&!l.isDestroying){e.next=2
break}return e.abrupt("return")
case 2:if(!i.some((function(e){return"video"===e.mediaKind}))){e.next=5
break}return e.next=5,l.videoPlayer.initializeVideos()
case 5:t=i[0].id,(r=document.querySelector('[data-episode-id="'.concat(t,'"]')))&&r.focus()
case 8:case"end":return e.stop()}}),e)}))))
case 9:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"showMoreEpisodes",value:(o=g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,u.isSSR)()){e.next=2
break}return e.abrupt("return")
case 2:if(this.hasMoreEpisodes){e.next=4
break}return e.abrupt("return")
case 4:return this.episodesAreLoading=!0,e.next=7,this.loadNext()
case 7:if(!this.isDestroyed&&!this.isDestroying){e.next=9
break}return e.abrupt("return")
case 9:this.episodesAreLoading=!1
case 10:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"isPlayableQueue",get:function(){return!(0,u.isSSR)()&&this.episodes.every((function(e){return E.includes(e.mediaKind)}))}},{key:"episodeQueue",get:function(){var e=this.episodes,t=e.filter((function(e){return"audio"===e.mediaKind})),r=e.filter((function(e){return"video"===e.mediaKind})),n=this.mediaPlayer
if(r.length&&!t.length)return r.map((function(e){return n.toMediaMeta(e,"podcastVideo")}))
var o=t.map((function(e){return n.toMediaResourceFromDataRecord(e,"podcast-episodes")}))
return n.buildPodcastEpisodesQueue(o)}},{key:"setEpisodes",value:function(e,t){var r=y(t,1)[0]
this.episodes=r}}])&&P(t.prototype,r),n&&P(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.default),p=A(s.prototype,"videoPlayer",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=A(s.prototype,"mediaPlayer",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=A(s.prototype,"podcastsApi",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=A(s.prototype,"episodes",[l.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=A(s.prototype,"episodesAreLoading",[l.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),A(s.prototype,"showMoreEpisodes",[o.action],Object.getOwnPropertyDescriptor(s.prototype,"showMoreEpisodes"),s.prototype),A(s.prototype,"setEpisodes",[o.action],Object.getOwnPropertyDescriptor(s.prototype,"setEpisodes"),s.prototype),s)
e.default=R,(0,t.setComponentTemplate)(S,R)})),define("web-experience-app/components/pages/podcast/episode",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","web-experience-app/utils/podcasts/podcasts","web-experience-app/utils/ssr","web-experience-app/utils/loc-concatenate"],(function(e,t,r,n,o,i,a,l){var u,c,s
function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(0,r.createTemplateFactory)({id:"RNIkYYoy",block:'[[[11,"li"],[17,1],[12],[1,"\\n  "],[10,0],[14,0,"l-row"],[12],[1,"\\n    "],[10,0],[15,0,[29,["l-column ",[52,[28,[37,1],[[30,0,["isAudioTrack"]],[30,0,["isActiveTrack"]]],null],"is-playing"]," small-valign-top tracks__track__content"]]],[12],[1,"\\n      "],[10,"ul"],[14,0,"inline-list inline-list--truncate-single-line tracks__track__eyebrow"],[12],[1,"\\n        "],[10,"li"],[14,0,"inline-list__item inline-list__item--margin-inline-start-large tracks__track__eyebrow-item"],[12],[1,"\\n          "],[1,[28,[35,2],[[30,2,["releaseDateTime"]]],[["uppercaseText"],[true]]]],[1,"\\n        "],[13],[1,"\\n"],[41,[30,0,["isVideoTrack"]],[[[1,"          "],[10,"li"],[14,0,"inline-list__item inline-list__item--bulleted tracks__track__eyebrow-item"],[12],[1,"\\n            "],[1,[30,2,["mediaKind"]]],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n"],[41,[30,2,["url"]],[[[1,"        "],[10,3],[15,6,[30,2,["url"]]],[14,0,"link tracks__track__link--block"],[15,"data-metrics-click",[28,[37,3],["navigateEpisode"],[["id","url"],[[30,2,["id"]],[30,2,["url"]]]]]],[15,"data-episode-id",[30,2,["id"]]],[12],[1,"\\n          "],[1,[30,2,["name"]]],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[1,"      "],[10,"h2"],[14,0,"tracks__track__headline spread"],[12],[1,"\\n        "],[8,[39,4],null,[["@clampProfile","@clampClassNames","@tagName","@value","@isInteractive"],["episode-headline",[52,[30,0,["isExplicit"]]," icon icon-after icon-explicit"],"span",[30,2,["name"]],false]],null],[1,"\\n      "],[13],[1,"\\n\\n"],[41,[30,0,["episodeDescription"]],[[[1,"        "],[8,[39,4],[[24,0,"tracks__track__copy"]],[["@clampProfile","@isInteractive","@value"],["episode-description",false,[28,[37,5],[[30,0,["episodeDescription"]]],null]]],null],[1,"\\n"]],[]],null],[1,"\\n      "],[10,"ul"],[15,0,[28,[37,6],["tracks__track__meta inline-list inline-list--truncate-single-line ",[52,[51,[28,[37,8],[[30,2,["pageType"]],"PodcastEpisode"],null]],"tracks__track__subcopy "],[52,[30,0,["isPlayableTrack"]]," tracks__track__meta--has-button"]],null]],[12],[1,"\\n"],[41,[28,[37,1],[[30,0,["isPlayableTrack"]],[28,[37,9],[[30,0,["isActiveTrack"]]],null]],null],[[[1,"          "],[10,"li"],[14,0,"inline-list__item inline-list__item--button tracks__track__button"],[12],[1,"\\n"],[41,[30,0,["isVideoTrack"]],[[[1,"              "],[8,[39,10],[[16,"aria-label",[30,0,["playButtonAria"]]],[16,0,[28,[37,6],["icon icon-before we-button we-button--pill-small we-button--pill-podcast we-button--spinner ",[52,[30,0,["isPlaying"]],"icon-pause","icon-play"]],null]]],[["@metricsData","@media"],[[28,[37,3],["preview"],[["id"],[[30,2,["id"]]]]],[30,0,["media"]]]],[["default"],[[[[1,[30,0,["playButtonLabel"]]]],[]]]]],[1,"\\n"]],[]],[[[1,"              "],[8,[39,11],[[16,"aria-label",[30,0,["playButtonAria"]]],[16,0,[28,[37,6],["icon we-button we-button--pill-small we-button--pill-podcast we-button--spinner ",[52,[30,0,["isPlaying"]],"icon-pause","icon-play"]],null]]],[["@isPlayableQueue","@media","@mediaId","@queue"],[[30,3],[30,0,["media"]],[30,2,["id"]],[30,4]]],[["default"],[[[[1,[30,0,["playButtonLabel"]]]],[]]]]],[1,"\\n"]],[]]],[1,"          "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["episodeHasHD"]],[[[1,"          "],[10,"li"],[14,0,"inline-list__item inline-list__item--margin-inline-start-small"],[12],[1,"\\n            "],[10,1],[14,0,"badge-asset badge-asset--small badge-asset--hd tracks__track__badge"],[12],[1,[28,[35,12],["WEA.ShowPages.Accessibility.hasHD"],null]],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[41,[30,0,["displayCCBadge"]],[[[1,"          "],[10,"li"],[14,0,"inline-list__item inline-list__item--margin-inline-start-small"],[12],[1,"\\n            "],[10,1],[14,0,"badge-asset badge-asset--small badge-asset--cc tracks__track__badge"],[12],[1,[28,[35,12],["WEA.ShowPages.Accessibility.hasCC"],null]],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["episodeDuration"]],[[[1,"          "],[10,"li"],[14,0,"inline-list__item inline-list__item--margin-inline-start-small"],[12],[1,[28,[35,13],[[30,0,["episodeDuration"]]],[["abbr"],[true]]]],[13],[1,"\\n"]],[]],null],[41,[30,0,["episodeBrandNames"]],[[[1,"          "],[10,"li"],[14,0,"inline-list__item inline-list__item--bulleted tracks__track__inline-brands"],[12],[1,[30,0,["episodeBrandNames"]]],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n\\n"],[41,[30,0,["showAudioControls"]],[[[1,"        "],[10,0],[15,0,[28,[37,6],["tracks__track__inline-controls ",[52,[30,0,["showLoadingSpinner"]],"media-is-loading"]],null]],[12],[1,"\\n          "],[8,[39,14],null,[["@duration","@isActiveTrack","@isLoading","@isPlayableQueue","@isPlaying","@media","@mediaId","@queue"],[[30,0,["episodeDuration"]],[30,0,["isActiveTrack"]],[30,0,["showLoadingSpinner"]],[30,3],[30,0,["isPlaying"]],[30,0,["media"]],[30,2,["id"]],[30,4]]],null],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["episodeBrandNames"]],[[[1,"        "],[8,[39,4],[[24,0,"tracks__track__meta tracks__track__subcopy small-hide medium-show large-hide"]],[["@clampProfile","@isInteractive","@value"],["episode-brands",false,[28,[37,5],[[30,0,["episodeBrandNames"]]],null]]],null],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["&attrs","@episode","@isPlayableQueue","@episodeQueue"],false,["if","and","time-tag","metrics-data","we-truncate","html-sanitize","concat","unless","eq","not","we-video-trigger","we-media-trigger","t","loc-duration","we-audio-controls"]]',moduleName:"web-experience-app/components/pages/podcast/episode.hbs",isStrictMode:!1}),O=(u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)})(u,e)
var t,r,n,o=m(u)
function u(){var e
f(this,u)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return p(h(e=o.call.apply(o,[this].concat(r))),"i18n",c,h(e)),p(h(e),"mediaPlayer",s,h(e)),e}return t=u,(r=[{key:"isActiveTrack",get:function(){var e,t=this.mediaPlayer,r=t.isStopped,n=t.nowPlayingItem
return!!n&&n.id===(null===(e=this.args.episode)||void 0===e?void 0:e.id)&&!r}},{key:"isPlaying",get:function(){return this.mediaPlayer.musicIsPlaying&&this.isActiveTrack}},{key:"playButtonAria",get:function(){var e=this.i18n,t=this.args,r=t.artistName,n=t.episode
return this.isPlaying?e.t("WEA.PodcastPages.Pause.Podcast.AX"):e.t("WEA.PodcastPages.Play.Podcast.AX",{podcastName:n.name,podcastArtist:r})}},{key:"playButtonLabel",get:function(){var e="WEA.Common.Play.Alternate"
return this.isPlaying&&(e="WEA.Common.Pause.Alternate"),this.i18n.t(e)}},{key:"isAudioTrack",get:function(){var e
return"audio"===(null===(e=this.args.episode)||void 0===e?void 0:e.mediaKind)}},{key:"isVideoTrack",get:function(){var e
return"video"===(null===(e=this.args.episode)||void 0===e?void 0:e.mediaKind)}},{key:"media",get:function(){var e=this.isAudioTrack,t=this.isVideoTrack,r=this.args,n=r.episode,o=r.episodeQueue
if(o){if(t&&o.length)return o.find((function(e){return e.id===n.id}))
if(e)return Promise.resolve(o).then((function(e){if(e.items&&e.items.length)return e.items.find((function(e){return e.id===n.id}))}))}if(t)return this.mediaPlayer.toMediaMeta(n,"podcastVideo")}},{key:"isPlayableTrack",get:function(){return!(0,a.isSSR)()&&(!!this.isVideoTrack||(0,i.hasExternalFreeContent)(this.args.episode))}},{key:"showAudioControls",get:function(){return this.isActiveTrack&&this.isAudioTrack}},{key:"episodeDescription",get:function(){var e=(this.args.episode||{}).description,t=void 0===e?{}:e
return t.standard||t.short}},{key:"episodeDuration",get:function(){var e
return(null===(e=this.args.episode)||void 0===e?void 0:e.durationInMilliseconds)/1e3}},{key:"episodeBrandNames",get:function(){var e,t=((null===(e=this.args.episode)||void 0===e?void 0:e.availableBrands)||[]).map((function(e){return e.name}))
return(0,l.default)(t,this.i18n)}},{key:"displayCCBadge",get:function(){var e,t
return Boolean(null===(e=this.args.episode)||void 0===e||null===(t=e.productOffers)||void 0===t?void 0:t.isClosedCaptioned)}},{key:"showLoadingSpinner",get:function(){return this.isLoading||this.isSeeking}},{key:"isSeeking",get:function(){return this.mediaPlayer.isSeeking&&this.isActiveTrack}},{key:"isLoading",get:function(){return this.mediaPlayer.musicIsLoading&&this.isActiveTrack}},{key:"episodeHasHD",get:function(){var e,t
return null===(e=this.args.episode)||void 0===e||null===(t=e.productOffers)||void 0===t?void 0:t.hasHDOffers}},{key:"isExplicit",get:function(){var e
return"explicit"===(null===(e=this.args.episode)||void 0===e?void 0:e.contentRating)||this.args.isPodcastExplicit}}])&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.default),c=g(u.prototype,"i18n",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=g(u.prototype,"mediaPlayer",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=O,(0,t.setComponentTemplate)(w,O)})),define("web-experience-app/components/pages/podcast/header",["exports","@ember/component","@ember/template-factory","@glimmer/component","web-experience-app/utils/podcasts/podcasts"],(function(e,t,r,n,o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=s(e)
if(t){var o=s(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=(0,r.createTemplateFactory)({id:"IzE0vv+D",block:'[[[10,"section"],[12],[1,"\\n  "],[10,0],[14,0,"l-row"],[12],[1,"\\n    "],[10,0],[14,0,"l-column medium-5 large-4 small-valign-top small-hide medium-show-inlineblock"],[12],[1,"\\n"],[41,[30,1,["artwork"]],[[[1,"        "],[8,[39,1],[[24,0,"product-artwork product-artwork--bottom-separator product-artwork--captioned we-artwork--fullwidth"]],[["@artwork","@lazyLoad","@profile"],[[30,1,["artwork"]],false,"product-hero-podcast"]],null],[1,"\\n"]],[]],null],[1,"\\n      "],[10,0],[14,0,"product-artwork__caption small-hide medium-show"],[12],[1,"\\n"],[41,[28,[37,2],[[30,1,["trackCount"]],0],null],[[[1,"          "],[10,2],[12],[1,[28,[35,3],["WEA.PodcastPages.Episodes"],[["count"],[[30,1,["availableEpisodeCount"]]]]]],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"product-hero-desc product-hero-desc--spacer-bottom-large product-hero-desc--side-bar"],[12],[1,"\\n"],[41,[30,0,["showDescription"]],[[[1,"          "],[10,"section"],[14,0,"product-hero-desc__section"],[12],[1,"\\n            "],[8,[39,4],null,[["@clampProfile","@isInteractive","@value","@dataMetricsClick"],["product-description",true,[28,[37,5],[[30,0,["showDescription"]]],null],[28,[37,6],["expandMore"],null]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"l-column small-12 medium-7 large-8 small-valign-top"],[12],[1,"\\n      "],[10,0],[14,0,"l-row"],[12],[1,"\\n        "],[10,0],[14,0,"l-column small-5 medium-hide small-valign-top"],[12],[1,"\\n"],[41,[30,1,["artwork"]],[[[1,"            "],[8,[39,1],[[24,0,"product-artwork product-artwork--bottom-separator we-artwork--fullwidth"]],[["@artwork","@profile"],[[30,1,["artwork"]],"product-hero-podcast"]],null],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"l-column small-7 medium-12 small-valign-top"],[12],[1,"\\n          "],[10,"header"],[14,0,"product-header product-header--padded-start podcast-header"],[12],[1,"\\n            "],[10,"h1"],[12],[1,"\\n              "],[10,1],[15,0,[29,["product-header__title",[52,[30,1,["isExplicit"]]," icon icon-after icon-explicit-large"]]]],[15,"aria-label",[29,[[30,1,["name"]],[52,[30,1,["isExplicit"]],[28,[37,7],[" ",[28,[37,3],["WEA.PodcastPages.Explicit.AX"],null]],null]]]]],[12],[1,"\\n                "],[1,[28,[35,8],[[30,1,["name"]]],null]],[1,"\\n              "],[13],[1,"\\n\\n              "],[10,1],[14,0,"product-header__identity podcast-header__identity"],[12],[1,"\\n"],[44,[[28,[37,10],[[30,1,["channel"]],"0"],null]],[[[41,[30,2],[[[1,"                    "],[10,3],[15,6,[30,2,["url"]]],[14,0,"link"],[15,"data-metrics-click",[28,[37,6],["linkToChannel"],[["id","url"],[[30,2,["id"]],[30,2,["url"]]]]]],[12],[1,"\\n                      "],[1,[30,2,["name"]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],[[[1,"                    "],[1,[28,[35,11],[[30,1,["mainArtist","name"]],[30,1,["artistName"]]],null]],[1,"\\n"]],[]]]],[2]]],[1,"              "],[13],[1,"\\n            "],[13],[1,"\\n\\n            "],[10,"ul"],[14,0,"product-header__list podcast-header__list"],[12],[1,"\\n              "],[10,"li"],[14,0,"product-header__list__item"],[12],[1,"\\n                "],[10,"ul"],[14,0,"inline-list"],[12],[1,"\\n                  "],[10,"li"],[14,0,"inline-list__item inline-list__item--bulleted"],[12],[1,"\\n                    "],[1,[30,0,["primaryGenreName"]]],[1,"\\n                  "],[13],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n\\n"],[41,[28,[37,2],[[30,1,["userRating","ratingCount"]],0],null],[[[1,"                "],[10,"li"],[14,0,"product-header__list__item"],[12],[1,"\\n                  "],[10,"ul"],[14,0,"inline-list inline-list--mobile-compact"],[12],[1,"\\n                    "],[10,"li"],[14,0,"inline-list__item"],[12],[1,"\\n                      "],[8,[39,12],null,[["@value","@ratingCount"],[[30,1,["userRating","value"]],[30,1,["userRating","ratingCount"]]]],null],[1,"\\n                    "],[13],[1,"\\n                  "],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n\\n            "],[10,0],[14,0,"small-hide medium-show"],[12],[1,"\\n              "],[10,0],[14,0,"product-header__routes podcast-header__routes"],[12],[1,"\\n                "],[10,2],[14,0,"product-header__routes__cta"],[12],[1,"\\n                  "],[8,[39,13],null,[["@url","@subscriptionTextKey"],[[30,1,["url"]],[52,[30,0,["hasSubscriberAudio"]],[52,[30,0,["hasPaidContent"]],"WEA.PodcastPages.CTA.Podcasts.Subscribe.MinRequirement","WEA.PodcastPages.CTA.Podcasts.Free.MinRequirement"]]]],null],[1,"\\n                "],[13],[1,"\\n\\n                "],[8,[39,14],[[24,0,"we-share--header"]],[["@model","@contentType","@metricsClickEvent","@creator","@isEmbedEnabled"],[[30,1],"podcast","sharePodcast",[30,1,["mainArtistName"]],true]],null],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"product-hero-desc product-hero-desc--small medium-hide"],[12],[1,"\\n"],[41,[30,0,["showDescription"]],[[[1,"          "],[10,"section"],[14,0,"product-hero-desc__section"],[12],[1,"\\n            "],[8,[39,4],null,[["@clampProfile","@isInteractive","@value","@dataMetricsClick"],["product-description",true,[28,[37,5],[[30,0,["showDescription"]]],null],[28,[37,6],["expandMore"],null]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"medium-hide"],[12],[1,"\\n        "],[10,0],[14,0,"product-header__routes product-header__routes--wrap product-header__routes--desc"],[12],[1,"\\n          "],[10,2],[14,0,"product-header__routes__cta"],[12],[1,"\\n            "],[8,[39,13],null,[["@url","@subscriptionTextKey"],[[30,1,["url"]],[52,[30,0,["hasSubscriberAudio"]],[52,[30,0,["hasPaidContent"]],"WEA.PodcastPages.CTA.Podcasts.Subscribe.MinRequirement","WEA.PodcastPages.CTA.Podcasts.Free.MinRequirement"]]]],null],[1,"\\n          "],[13],[1,"\\n\\n          "],[8,[39,14],[[24,0,"we-share--header"]],[["@contentType","@metricsClickEvent","@model","@creator","@showCloseIcon","@isEmbedEnabled"],["podcast","sharePodcast",[30,1],[30,1,["mainArtistName"]],true,true]],null],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n\\n      "],[8,[39,15],[[24,0,"product-hero__tracks"]],[["@copyright","@episodes","@isPodcastExplicit","@podcastName","@trackCount"],[[30,1,["copyright"]],[30,1,["episodes"]],[30,1,["isExplicit"]],[30,1,["name"]],[30,1,["trackCount"]]]],null],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@model","channel"],false,["if","amp-artwork/wea","gt","t","we-truncate","html-sanitize","metrics-data","concat","anchor-punctuation","let","get","or","we-star-rating","we-web-to-native-cta/apple-podcasts","we-share","pages/podcast/episode-list"]]',moduleName:"web-experience-app/components/pages/podcast/header.hbs",isStrictMode:!1}),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)})(s,e)
var t,r,n,c=u(s)
function s(){return i(this,s),c.apply(this,arguments)}return t=s,(r=[{key:"showDescription",get:function(){var e=this.args.model||{},t=e.description,r=void 0===t?{}:t,n=e.contentAdvisory,o=r.standard||r.short
if(o)return n&&(o=n+" "+o),o}},{key:"hasSubscriberAudio",get:function(){return(0,o.hasSubscriberAudio)(this.args.model)}},{key:"hasPaidContent",get:function(){return(0,o.hasPaidContent)(this.args.model)}},{key:"primaryGenreName",get:function(){var e,t
return(null===(e=this.args.model.genres)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.name)||this.args.model.genreNames[0]}}])&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(n.default)
e.default=f,(0,t.setComponentTemplate)(p,f)})),define("web-experience-app/components/pages/podcast/reviews",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"S17aLcjU",block:'[[[41,[28,[37,1],[[30,1],[30,2]],null],[[[44,[[28,[37,3],["review"],null]],[[[1,"    "],[10,"section"],[14,0,"section section--bordered"],[12],[1,"\\n      "],[10,0],[14,0,"section__nav"],[12],[1,"\\n        "],[10,"h2"],[14,0,"section__headline"],[12],[1,"\\n          "],[1,[28,[35,4],["WEA.PodcastPages.CustomerReviews.Title"],null]],[1,"\\n        "],[13],[1,"\\n\\n        "],[8,[39,5],null,[["@itemCount","@nextLink","@small","@medium","@large","@sectionType"],[[30,1,["length"]],[30,1,["meta","next"]],[30,3,["small"]],[30,3,["medium"]],[30,3,["large"]],"reviews"]],null],[1,"\\n      "],[13],[1,"\\n\\n"],[41,[30,2],[[[1,"        "],[8,[39,6],null,[["@rating"],[[30,4]]],null],[1,"\\n"]],[]],null],[1,"\\n\\n      "],[10,0],[14,0,"l-row l-row--peek"],[12],[1,"\\n        "],[8,[39,7],null,[["@items","@small","@medium","@large"],[[30,1],[30,3,["small"]],[30,3,["medium"]],[30,3,["large"]]]],[["default"],[[[[1,"\\n          "],[8,[39,8],[[16,0,[29,["small-valign-top l-column--equal-height ",[30,3,["columnClassNames"]]]]]],[["@modalContentClass","@metricsTarget"],["we-modal__content--review","customerReview"]],[["default"],[[[[1,"\\n            "],[8,[39,9],null,[["@review","@onShowMore","@isTruncated"],[[28,[37,10],["media-api-review"],[["item"],[[30,5]]]],[30,6,["onShowMore"]],[30,6,["isTruncated"]]]],null],[1,"\\n          "]],[6]]]]],[1,"\\n        "]],[5]]]]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[3]]]],[]],null]],["@reviews","@hasUserRating","profile","@userRating","review","modal"],false,["if","or","let","shelf-profile","t","we-see-all","we-customer-ratings","we-limit-per-viewport","we-truncate/modal","we-customer-review","present"]]',moduleName:"web-experience-app/components/pages/podcast/reviews.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/product-page-shelf",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"wZg72YQg",block:'[[[41,[30,1,["length"]],[[[1,"  "],[11,"section"],[24,0,"section section--bordered"],[17,2],[12],[1,"\\n    "],[10,0],[14,0,"section__nav"],[12],[1,"\\n      "],[10,"h2"],[14,0,"section__headline"],[12],[1,"\\n        "],[1,[30,3]],[1,"\\n      "],[13],[1,"\\n\\n      "],[8,[39,1],null,[["@itemCount","@nextLink","@small","@medium","@large","@sectionType"],[[30,1,["length"]],[30,1,["meta","next"]],[30,4,["small"]],[30,4,["medium"]],[30,4,["large"]],[30,5]]],null],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"l-row l-row--peek"],[12],[1,"\\n      "],[8,[39,2],null,[["@items","@profile","@clampProfile","@columnClassNames","@metricsLocation","@isPodcast"],[[30,1],[30,4],[30,6],[30,7],[30,8],[30,9]]],null],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["@items","&attrs","@headerText","@profile","@sectionType","@clampProfile","@columnClassNames","@metricsLocation","@isPodcast"],false,["if","we-see-all","we-shelf"]]',moduleName:"web-experience-app/components/product-page-shelf.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/radial-progress",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object/internals"],(function(e,t,r,n,o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=p(e)
if(t){var o=p(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=(0,r.createTemplateFactory)({id:"vBgo/Gj5",block:'[[[11,"svg"],[24,"viewBox","0 0 26 26"],[16,0,[29,["radial-progress",[52,[30,1]," is-spinning"]]]],[24,"width","26"],[24,"height","26"],[24,"role","presentation"],[17,2],[12],[1,"\\n  "],[10,"defs"],[12],[1,"\\n    "],[10,"filter"],[15,1,[29,[[30,0,["filterId"]]]]],[14,"height","300%"],[14,"width","300%"],[14,"x","-75%"],[14,"y","-75%"],[12],[1,"\\n"],[1,"      "],[10,"feGaussianBlur"],[14,"stdDeviation",".75"],[14,"result","blurred"],[12],[13],[1,"\\n\\n"],[1,"      "],[10,"feFlood"],[14,"flood-color","white"],[14,"result","glowColor"],[12],[13],[1,"\\n\\n"],[1,"      "],[10,"feComposite"],[14,"in","glowColor"],[14,"in2","blurred"],[14,"operator","in"],[14,"result","glowColorBlurred"],[12],[13],[1,"\\n\\n"],[1,"      "],[10,"feMerge"],[12],[1,"\\n        "],[10,"feMergeNode"],[14,"in","glowColorBlurred"],[12],[13],[1,"\\n        "],[10,"feMergeNode"],[14,"in","SourceGraphic"],[12],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n\\n"],[41,[30,3],[[[1,"    "],[10,"circle"],[14,0,"radial-progress__border"],[14,"cx","13"],[14,"cy","13"],[14,"r","12.25"],[14,"fill","transparent"],[14,"stroke-width","1"],[14,"stroke","#999"],[15,"filter",[29,["url(#",[30,0,["filterId"]],")"]]],[12],[13],[1,"\\n    "],[10,"circle"],[14,0,"radial-progress__indicator"],[14,"cx","13"],[14,"cy","13"],[14,"r","11.75"],[14,"fill","transparent"],[14,"stroke-width","2"],[14,"stroke-dasharray","74"],[15,"stroke-dashoffset",[30,0,["strokeOffset"]]],[15,"filter",[29,["url(#",[30,0,["filterId"]],")"]]],[14,"transform","rotate(-90 13 13)"],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,1],[[[1,"    "],[10,"circle"],[14,0,"radial-progress__spinner is-spinning"],[14,"cx","13"],[14,"cy","13"],[14,"r","7"],[14,"stroke","currentColor"],[14,"fill","none"],[14,"stroke-width","1.5"],[14,"stroke-dasharray","36 8"],[14,"stroke-dashoffset","-.3"],[14,"stroke-linecap","round"],[12],[13],[1,"\\n"]],[]],[[[41,[30,4],[[[1,"    "],[10,"path"],[14,0,"radial-progress__pause-icon"],[14,"d","M5.33 0h2C7.7 0 8 .32 8 .71V9.3c0 .39-.3.71-.67.71h-2c-.36 0-.66-.32-.66-.71V.7c0-.39.3-.71.66-.71zM.67 0h2c.36 0 .66.32.66.71V9.3c0 .39-.3.71-.66.71h-2A.7.7 0 0 1 0 9.29V.7C0 .32.3 0 .67 0z"],[14,"transform","translate(9.25 8)"],[12],[13],[1,"\\n"]],[]],[[[1,"    "],[10,"circle"],[14,0,"radial-progress__background-circle"],[14,"cx","13"],[14,"cy","13"],[14,"r","13"],[14,"fill","white"],[14,"stroke","none"],[12],[13],[1,"\\n\\n"],[1,"    "],[10,"path"],[14,"d","M11.72 6.98L.8 12.93a.55.55 0 0 1-.81-.47V.54A.54.54 0 0 1 .8.07l10.92 5.96a.54.54 0 0 1 0 .95z"],[14,"transform","translate(8.5 6.5)"],[12],[13],[1,"\\n  "]],[]]]],[]]],[13],[1,"\\n"]],["@isLoading","&attrs","@isCurrentSong","@isPlaying"],false,["if"]]',moduleName:"web-experience-app/components/radial-progress.hbs",isStrictMode:!1}),b=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)})(p,e)
var t,r,n,c=u(p)
function p(){var e
return i(this,p),f(s(e=c.apply(this,arguments)),"id",void 0),e.id=(0,o.guidFor)(s(e)),e}return t=p,(r=[{key:"filterId",get:function(){return"contrast-".concat(this.id)}},{key:"progress",get:function(){var e
return null!==(e=this.args.progress)&&void 0!==e?e:0}},{key:"strokeOffset",get:function(){return 74-74*this.progress/100}}])&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n.default)
e.default=b,(0,t.setComponentTemplate)(d,b)})),define("web-experience-app/components/see-all/chooser",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"yjiABddb",block:'[[[1,"  "],[18,1,[[28,[37,1],null,[["topPodcasts","reviews","lockup"],[[50,"see-all/podcasts/top-podcasts",0,null,null],[50,"see-all/podcasts/reviews",0,null,null],[50,"see-all/podcasts/lockup",0,null,null]]]]]],[1,"\\n"]],["&default"],false,["yield","hash","component"]]',moduleName:"web-experience-app/components/see-all/chooser.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/see-all/grid",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"4BVad0Qp",block:'[[[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[44,[[52,[28,[37,4],[[30,4],"app"],null],"app",[28,[37,5],[[30,2,["type"]],[30,2,["lockupKind"]],[30,2,["kind"]]],null]]],[[[44,[[28,[37,6],[[30,5]],null]],[[[44,[[28,[37,7],[[28,[37,8],[[30,5]],[["sectionType"],[[30,7]]]]],[["item","lockup","model"],[[30,2],[30,2],[30,8]]]]],[[[1,"        "],[8,[39,9],[[24,"role","article"],[16,"aria-posinset",[29,[[28,[37,10],[[30,3]],null]]]],[24,"aria-setsize","-1"],[16,0,[28,[37,11],["l-column--grid ",[30,6,["lockupClassNames"]]," ",[30,6,["columnClassNames"]]],null]],[16,"data-metrics-click",[28,[37,12],[[30,10]],[["id","url"],[[30,9,["id"]],[30,9,["url"]]]]]],[16,"data-metrics-location",[28,[37,12],["location"],[["sectionType"],[[30,7]]]]],[16,"data-we-link-to-exclude",false]],[["@model","@artworkProfile","@clampProfile","@subtitle","@isPodcast"],[[30,9],[30,6,["artwork"]],[30,6,["clampProfile"]],[52,[30,11],[30,9,["artistName"]]],[30,11]]],null],[1,"\\n"]],[9]]]],[6]]]],[5]]]],[2,3]],null]],["@items","item","index","@seeAllModelType","lockupKind","profile","@sectionType","@productModel","itemPresenter","@metricsConfigKey","@isPodcast"],false,["each","-track-array","let","if","eq","or","see-all-profile","present","lockup-presenter","we-lockup","inc","concat","metrics-data"]]',moduleName:"web-experience-app/components/see-all/grid.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/see-all/header",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"qeyPQGAG",block:'[[[11,"h1"],[24,0,"section__headline see-all-header"],[24,1,"section__headline"],[17,1],[12],[1,"\\n"],[41,[30,2,["full"]],[[[1,"    "],[1,[30,2,["full"]]],[1,"\\n"]],[]],[[[1,"    "],[10,3],[15,6,[30,3,["url"]]],[14,0,"see-all-header__link link"],[12],[1,"\\n      "],[1,[30,2,["parts","productName"]]],[1,"\\n    "],[13],[1,"\\n    "],[10,1],[14,0,"see-all-header__title"],[12],[1,"\\n      "],[1,[30,2,["parts","sectionTitle"]]],[1,"\\n    "],[13],[1,"\\n"]],[]]],[13],[1,"\\n"]],["&attrs","@header","@productModel"],false,["if"]]',moduleName:"web-experience-app/components/see-all/header.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/see-all/itunes/lockup",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"Heo95g8v",block:'[[[8,[39,0],null,[["@items","@itemIds","@getItemsWithIds"],[[30,1],[30,2],[30,0,["loadMore"]]]],[["default"],[[[[1,"\\n  "],[8,[39,1],null,[["@header","@productModel"],[[30,5],[30,6]]],null],[1,"\\n\\n  "],[10,0],[14,0,"l-row"],[14,"role","feed"],[14,"aria-labelledby","section__headline"],[15,"aria-busy",[30,4]],[12],[1,"\\n    "],[8,[39,2],null,[["@items","@productModel","@metricsConfigKey","@seeAllModelType","@sectionType"],[[30,3],[30,6],[30,7],[30,8],[28,[37,3],["seeAll",[28,[37,4],[[30,9]],null]],null]]],null],[1,"\\n  "],[13],[1,"\\n"]],[3,4]]]]],[1,"\\n"]],["@items","@itemIds","items","isLoadingNextPage","@header","@productModel","@metricsConfigKey","@seeAllModelType","@sectionType"],false,["see-all/loader/by-ids","see-all/header","see-all/grid","concat","capitalize"]]',moduleName:"web-experience-app/components/see-all/itunes/lockup.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/see-all/loader",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@glimmer/tracking","@ember/debug"],(function(e,t,r,n,o,i,a){var l,u,c
function s(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(0,r.createTemplateFactory)({id:"2Mg5cUQ0",block:'[[[11,"section"],[24,0,"l-content-width section"],[17,1],[12],[1,"\\n\\n  "],[18,2,[[30,0,["items"]],[30,0,["isLoadingNextPage"]]]],[1,"\\n\\n  "],[8,[39,1],[[24,0,"we-loading-spinner--see-all"]],[["@nextLink","@nextPage"],[[30,0,["items","meta","next"]],[30,0,["nextPage"]]]],null],[1,"\\n"],[13],[1,"\\n"]],["&attrs","&default"],false,["yield","we-loading-spinner"]]',moduleName:"web-experience-app/components/see-all/loader.hbs",isStrictMode:!1}),O=(l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)})(l,e)
var t,r,n,o,i,a=m(l)
function l(){var e
return f(this,l),p(h(e=a.apply(this,arguments)),"isLoadingNextPage",u,h(e)),p(h(e),"items",c,h(e)),e.items=e.args.items,e}return t=l,(r=[{key:"nextPage",value:(o=regeneratorRuntime.mark((function e(){var t,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isLoadingNextPage=!0,t=this.items.meta.next){e.next=4
break}return e.abrupt("return")
case 4:if(this.args.getNextPage){e.next=6
break}return e.abrupt("return")
case 6:return e.prev=6,e.next=9,this.args.getNextPage(t,this.items)
case 9:(r=e.sent)&&r.length>0&&(this.items=r),e.next=15
break
case 13:e.prev=13,e.t0=e.catch(6)
case 15:return e.prev=15,this.isDestroyed||this.isDestroying||(this.isLoadingNextPage=!1),e.finish(15)
case 18:case"end":return e.stop()}}),e,this,[[6,13,15,18]])})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){s(i,r,n,a,l,"next",e)}function l(e){s(i,r,n,a,l,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})}])&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default),u=g(l.prototype,"isLoadingNextPage",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=g(l.prototype,"items",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g(l.prototype,"nextPage",[o.action],Object.getOwnPropertyDescriptor(l.prototype,"nextPage"),l.prototype),l)
e.default=O,(0,t.setComponentTemplate)(w,O)})),define("web-experience-app/components/see-all/loader/by-ids",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@glimmer/tracking","@ember/debug"],(function(e,t,r,n,o,i,a){var l,u,c,s
function p(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=g(e)
if(t){var o=g(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return h(this,r)}}function h(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(0,r.createTemplateFactory)({id:"w0uNwF0n",block:'[[[11,"section"],[24,0,"l-content-width section"],[17,1],[12],[1,"\\n\\n  "],[18,2,[[30,0,["items"]],[30,0,["isLoadingNextPage"]]]],[1,"\\n\\n  "],[8,[39,1],[[24,0,"we-loading-spinner--see-all"]],[["@itemIds","@nextPage"],[[30,0,["itemIds"]],[30,0,["nextPage"]]]],null],[1,"\\n"],[13],[1,"\\n"]],["&attrs","&default"],false,["yield","we-loading-spinner"]]',moduleName:"web-experience-app/components/see-all/loader/by-ids.hbs",isStrictMode:!1}),P=(l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)})(l,e)
var t,r,n,o,i,a=y(l)
function l(){var e
return d(this,l),f(v(e=a.apply(this,arguments)),"isLoadingNextPage",u,v(e)),f(v(e),"items",c,v(e)),f(v(e),"itemIds",s,v(e)),e}return t=l,(r=[{key:"nextPage",value:(o=regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==this.itemIds.length){e.next=2
break}return e.abrupt("return")
case 2:return this.isLoadingNextPage=!0,e.prev=3,e.next=6,this.args.getItemsWithIds(this.itemIds,this.items)
case 6:t=e.sent,this.itemIds=this.itemIds.filter((function(e){return t.every((function(t){return t.id!==e}))})),t&&t.length>0&&(this.items=t),e.next=13
break
case 11:e.prev=11,e.t0=e.catch(3)
case 13:return e.prev=13,this.isDestroyed||this.isDestroying||(this.isLoadingNextPage=!1),e.finish(13)
case 16:case"end":return e.stop()}}),e,this,[[3,11,13,16]])})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){p(i,r,n,a,l,"next",e)}function l(e){p(i,r,n,a,l,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})}])&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default),u=w(l.prototype,"isLoadingNextPage",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=w(l.prototype,"items",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.args.items}}),s=w(l.prototype,"itemIds",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.args.itemIds}}),w(l.prototype,"nextPage",[o.action],Object.getOwnPropertyDescriptor(l.prototype,"nextPage"),l.prototype),l)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/see-all/podcasts/lockup",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,n,o,i){var a,l,u
function c(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"N/wiPppS",block:'[[[8,[39,0],null,[["@items","@getNextPage"],[[30,1],[30,0,["getNextPage"]]]],[["default"],[[[[1,"\\n  "],[8,[39,1],null,[["@header","@productModel"],[[30,4],[30,5]]],null],[1,"\\n\\n  "],[10,0],[14,0,"l-row"],[14,"role","feed"],[14,"aria-labelledby","section__headline"],[15,"aria-busy",[30,3]],[12],[1,"\\n    "],[8,[39,2],null,[["@items","@productModel","@metricsConfigKey","@seeAllModelType","@sectionType","@isPodcast"],[[30,2],[30,5],[30,6],[30,7],[28,[37,3],["seeAll",[28,[37,4],[[30,8]],null]],null],true]],null],[1,"\\n  "],[13],[1,"\\n"]],[2,3]]]]],[1,"\\n"]],["@items","items","isLoadingNextPage","@header","@productModel","@metricsConfigKey","@seeAllModelType","@sectionType"],false,["see-all/loader","see-all/header","see-all/grid","concat","capitalize"]]',moduleName:"web-experience-app/components/see-all/podcasts/lockup.hbs",isStrictMode:!1}),w=(a=(0,o.inject)("media-api/podcasts"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(l,e)
var t,r,n,o,i,a=b(l)
function l(){var e
p(this,l)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=a.call.apply(a,[this].concat(r))),"api",u,y(e)),e}return t=l,(r=[{key:"getNextPage",value:(o=regeneratorRuntime.mark((function e(t,r){var n
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.getDataFromNextURL(t,r)
case 2:return n=e.sent,e.abrupt("return",n.mergedRecords)
case 4:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){c(i,r,n,a,l,"next",e)}function l(e){c(i,r,n,a,l,"throw",e)}a(void 0)}))},function(e,t){return i.apply(this,arguments)})}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default),u=v(l.prototype,"api",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(l.prototype,"getNextPage",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"getNextPage"),l.prototype),l)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/see-all/podcasts/reviews",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,n,o,i){var a,l,u
function c(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"CvmCPJ1K",block:'[[[8,[39,0],null,[["@items","@getNextPage"],[[30,1],[30,0,["getNextPage"]]]],[["default"],[[[[1,"\\n  "],[8,[39,1],[[24,1,"section__headline"]],[["@header","@productModel"],[[30,4],[30,5]]],null],[1,"\\n\\n"],[41,[30,5,["userRating","value"]],[[[1,"    "],[8,[39,3],null,[["@rating"],[[30,5,["userRating"]]]],null],[1,"\\n"]],[]],null],[1,"\\n  "],[8,[39,4],[[24,0,"l-row"],[24,"aria-labelledby","section__headline"],[16,"aria-busy",[30,3]]],[["@items"],[[30,2]]],null],[1,"\\n"]],[2,3]]]]],[1,"\\n"]],["@items","items","isLoading","@header","@productModel"],false,["see-all/loader","see-all/header","if","we-customer-ratings","see-all/review-card-grid"]]',moduleName:"web-experience-app/components/see-all/podcasts/reviews.hbs",isStrictMode:!1}),w=(a=(0,o.inject)("media-api/podcasts"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(l,e)
var t,r,n,o,i,a=b(l)
function l(){var e
p(this,l)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=a.call.apply(a,[this].concat(r))),"api",u,y(e)),e}return t=l,(r=[{key:"getNextPage",value:(o=regeneratorRuntime.mark((function e(t,r){var n
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.getDataFromNextURL(t,r)
case 2:return n=e.sent,e.abrupt("return",n.mergedRecords)
case 4:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){c(i,r,n,a,l,"next",e)}function l(e){c(i,r,n,a,l,"throw",e)}a(void 0)}))},function(e,t){return i.apply(this,arguments)})}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default),u=v(l.prototype,"api",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(l.prototype,"getNextPage",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"getNextPage"),l.prototype),l)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/see-all/podcasts/top-podcasts",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,n,o,i){var a,l,u
function c(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"M2JlPeG6",block:'[[[8,[39,0],null,[["@items","@getNextPage"],[[30,1],[30,0,["getNextPage"]]]],[["default"],[[[[1,"\\n  "],[8,[39,1],null,[["@header","@productModel"],[[30,4],[30,5]]],null],[1,"\\n\\n  "],[10,0],[14,0,"l-row"],[14,"role","feed"],[14,"aria-labelledby","section__headline"],[15,"aria-busy",[30,3]],[12],[1,"\\n    "],[8,[39,2],null,[["@items","@productModel","@metricsConfigKey","@sectionType","@isPodcast"],[[30,2],[30,5],[30,6],[28,[37,3],["seeAll",[28,[37,4],[[30,7]],null]],null],true]],null],[1,"\\n  "],[13],[1,"\\n"]],[2,3]]]]],[1,"\\n"]],["@items","items","isLoadingNextPage","@header","@productModel","@metricsConfigKey","@sectionType"],false,["see-all/loader","see-all/header","see-all/grid","concat","capitalize"]]',moduleName:"web-experience-app/components/see-all/podcasts/top-podcasts.hbs",isStrictMode:!1}),w=(a=(0,o.inject)("media-api/podcasts"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(l,e)
var t,r,n,o,i,a=b(l)
function l(){var e
p(this,l)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=a.call.apply(a,[this].concat(r))),"api",u,y(e)),e}return t=l,(r=[{key:"getNextPage",value:(o=regeneratorRuntime.mark((function e(t,r){var n
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.getDataFromNextURLFromChartsAPI(t,r)
case 2:return n=e.sent,e.abrupt("return",n)
case 4:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){c(i,r,n,a,l,"next",e)}function l(e){c(i,r,n,a,l,"throw",e)}a(void 0)}))},function(e,t){return i.apply(this,arguments)})}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default),u=v(l.prototype,"api",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(l.prototype,"getNextPage",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"getNextPage"),l.prototype),l)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/see-all/ratings",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"rK8aMBue",block:'[[[10,"section"],[14,0,"l-content-width section"],[12],[1,"\\n  "],[8,[39,0],null,[["@header","@productModel"],[[30,1],[30,2]]],null],[1,"\\n\\n  "],[10,0],[14,0,"l-row l-row--ratings-grid"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,3]],null]],null],null,[[[44,[[28,[37,4],[[30,4,["profileName"]]],null]],[[[1,"        "],[46,[30,4,["component"]],null,[["rating","columnClassNames"],[[30,4,["rating"]],[28,[37,6],["l-column--grid ",[30,5,["columnClassNames"]]],null]]],null],[1,"\\n"]],[5]]]],[4]],null],[1,"  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@header","@productModel","@items","item","profile"],false,["see-all/header","each","-track-array","let","see-all-profile","component","concat"]]',moduleName:"web-experience-app/components/see-all/ratings.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/see-all/review-card-grid",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"aCQ8ljma",block:'[[[11,0],[24,"role","feed"],[17,1],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,2]],null]],null],null,[[[1,"    "],[8,[39,2],[[24,0,"l-column--grid l-column small-12 medium-6 large-4 small-valign-top l-column--equal-height"]],[["@modalContentClass","@metricsTarget"],["we-modal__content--review","customerReview"]],[["default"],[[[[1,"\\n      "],[8,[39,3],[[24,"role","article"],[16,"aria-posinset",[29,[[28,[37,4],[[30,4]],null]]]],[24,"aria-setsize","-1"],[24,"tabindex","0"]],[["@review","@onShowMore","@isTruncated"],[[28,[37,5],["media-api-review"],[["item"],[[30,3]]]],[30,5,["onShowMore"]],[30,5,["isTruncated"]]]],null],[1,"\\n    "]],[5]]]]],[1,"\\n"]],[3,4]],null],[13],[1,"\\n"]],["&attrs","@items","review","index","modal"],false,["each","-track-array","we-truncate/modal","we-customer-review","inc","present"]]',moduleName:"web-experience-app/components/see-all/review-card-grid.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/see-all/reviews",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"bZ/DKm8B",block:'[[[10,"section"],[14,0,"l-content-width section"],[12],[1,"\\n  "],[8,[39,0],null,[["@header","@productModel"],[[30,1],[30,2]]],null],[1,"\\n\\n"],[41,[30,2,["userRating","value"]],[[[1,"    "],[8,[39,2],null,[["@rating"],[[30,2,["userRating"]]]],null],[1,"\\n"]],[]],null],[1,"\\n  "],[10,0],[14,0,"l-row"],[14,"role","feed"],[14,"aria-labelledby","section__headline"],[15,"aria-busy",[30,3]],[12],[1,"\\n"],[42,[28,[37,4],[[28,[37,4],[[30,4]],null]],null],null,[[[1,"      "],[8,[39,5],[[24,0,"l-column--grid l-column small-12 medium-6 large-4 small-valign-top l-column--equal-height"]],[["@modalContentClass","@metricsTarget"],["we-modal__content--review","customerReview"]],[["default"],[[[[1,"\\n        "],[8,[39,6],[[24,"role","article"],[16,"aria-posinset",[29,[[28,[37,7],[[30,6]],null]]]],[24,"aria-setsize","-1"],[24,"tabindex","0"]],[["@review","@onShowMore","@isTruncated"],[[30,5],[30,7,["onShowMore"]],[30,7,["isTruncated"]]]],null],[1,"\\n      "]],[7]]]]],[1,"\\n"]],[5,6]],null],[1,"  "],[13],[1,"\\n  "],[8,[39,8],[[24,0,"we-loading-spinner--see-all"]],[["@itemIds","@nextLink","@nextPage"],[[30,8],[30,4,["meta","next"]],[30,9]]],null],[1,"\\n"],[13],[1,"\\n"]],["@header","@productModel","@isLoadingNextPage","@items","review","index","modal","@itemIds","@nextPage"],false,["see-all/header","if","we-customer-ratings","each","-track-array","we-truncate/modal","we-customer-review","inc","we-loading-spinner"]]',moduleName:"web-experience-app/components/see-all/reviews.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/seo-tags",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a){var l,u,c
function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return p(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=g(e)
if(t){var o=g(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return h(this,r)}}function h(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(0,r.createTemplateFactory)({id:"9jkWEfk0",block:'[[[40,[[[41,[30,1,["title"]],[[[1,"    "],[11,"title"],[4,[38,3],[[30,0,["setDocumentTitle"]],[30,1,["title"]]],null],[4,[38,4],[[30,0,["setDocumentTitle"]],[30,1,["title"]]],null],[12],[1,"\\n      "],[1,[34,5]],[1,[30,1,["title"]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[41,[28,[37,6],null,null],[[[41,[30,1,["keywords"]],[[[1,"      "],[10,"meta"],[14,3,"keywords"],[15,"content",[30,1,["keywords"]]],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,1,["description"]],[[[1,"      "],[10,"meta"],[14,3,"description"],[15,"content",[30,1,["description"]]],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,1,["canonicalURL"]],[[[1,"      "],[10,"link"],[14,"rel","canonical"],[15,6,[30,1,["canonicalURL"]]],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,1,["mobileSmartBannerTag"]],[[[1,"      "],[10,"meta"],[14,3,"apple-itunes-app"],[15,"content",[30,1,["mobileSmartBannerTag"]]],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[51,[30,1,["searchEngineIndexing"]]],[[[1,"      "],[10,"meta"],[14,3,"robots"],[14,"content","noindex,nofollow"],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,1,["webManifest"]],[[[1,"      "],[10,"link"],[14,"rel","manifest"],[15,6,[30,1,["webManifest"]]],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,1,["appleContentID"]],[[[1,"      "],[10,"meta"],[14,3,"apple:content_id"],[15,"content",[30,1,["appleContentID"]]],[12],[13],[1,"\\n"]],[]],null],[1,"\\n"],[42,[28,[37,9],[[28,[37,9],[[30,1,["schemaTags"]]],null]],null],null,[[[1,"      "],[10,"script"],[15,3,[30,2,["name"]]],[14,4,"application/ld+json"],[12],[1,"\\n        "],[1,[30,2,["content"]]],[1,"\\n      "],[13],[1,"\\n"]],[2]],null],[1,"\\n"],[42,[28,[37,9],[[28,[37,9],[[30,1,["facebookAppLinkTags"]]],null]],null],null,[[[41,[30,3,["content"]],[[[1,"        "],[10,"meta"],[15,"property",[30,3,["name"]]],[15,"content",[30,3,["content"]]],[12],[13],[1,"\\n"]],[]],null]],[3]],null],[1,"\\n"],[42,[28,[37,9],[[28,[37,9],[[30,1,["openGraphTags"]]],null]],null],null,[[[44,[[28,[37,11],[[30,4,["name"]],[30,4,["content"]]],null]],[[[1,"        "],[10,"meta"],[15,"property",[30,4,["name"]]],[15,"content",[30,5]],[12],[13],[1,"\\n"]],[5]]]],[4]],null],[1,"\\n"],[42,[28,[37,9],[[28,[37,9],[[30,1,["twitterTags"]]],null]],null],null,[[[44,[[28,[37,11],[[30,6,["name"]],[30,6,["content"]]],null]],[[[1,"        "],[10,"meta"],[15,3,[30,6,["name"]]],[15,"content",[30,7]],[12],[13],[1,"\\n"]],[7]]]],[6]],null],[1,"\\n"],[42,[28,[37,9],[[28,[37,9],[[30,1,["videoTags"]]],null]],null],null,[[[44,[[28,[37,11],[[30,8,["name"]],[30,8,["content"]]],null]],[[[1,"        "],[10,"meta"],[15,"property",[30,8,["name"]]],[15,"content",[30,9]],[12],[13],[1,"\\n"]],[9]]]],[8]],null]],[]],null]],[]],"%cursor:0%",[28,[37,1],[[30,0,["headElement"]]],null],null]],["@data","schemaTag","tag","tag","content","tag","content","tag","content"],false,["in-element","-in-el-null","if","did-insert","did-update","direction-marker","is-ssr","unless","each","-track-array","let","format-meta-content"]]',moduleName:"web-experience-app/components/seo-tags.hbs",isStrictMode:!1}),P=(l=(0,i.inject)("-document"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)})(i,e)
var t,r,n,o=y(i)
function i(){var e
return d(this,i),f(v(e=o.apply(this,arguments)),"document",c,v(e)),e.tearDownTitle(),e}return t=i,(r=[{key:"headElement",get:function(){return this.document.head}},{key:"setDocumentTitle",value:function(e,t){var r=s(t,1)[0]
this.document.title=r}},{key:"tearDownTitle",value:function(){if(!(0,a.isSSR)()){var e=this.document,t=e.querySelector("title")
t&&e.head.removeChild(t)}}}])&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),c=w(u.prototype,"document",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w(u.prototype,"setDocumentTitle",[o.action],Object.getOwnPropertyDescriptor(u.prototype,"setDocumentTitle"),u.prototype),u)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-audio-controls",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/template","@ember/service","ember-lifeline"],(function(e,t,r,n,o,i,a,l){var u,c,s,p,f
function d(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function b(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=O(e)
if(t){var o=O(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return g(this,r)}}function g(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function _(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=r}}(e,j(e,t,"set"),r),r}function j(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}function k(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var x=(0,r.createTemplateFactory)({id:"/4YSzJ3C",block:'[[[11,0],[16,0,[29,["we-audio-controls ",[52,[30,1]," is-visible"]]]],[17,2],[12],[1,"\\n"],[41,[48,[30,9]],[[[1,"    "],[18,9,[[28,[37,3],null,[["playbackPercentage","playbackButtonId"],[[30,0,["playbackPercentage"]],"audio-controls-playback"]]]]],[1,"\\n"]],[]],[[[1,"    "],[10,0],[14,0,"we-audio-controls__playback"],[12],[1,"\\n      "],[11,"button"],[24,0,"we-audio-controls__button we-audio-controls__button--skip we-audio-controls__button--back-15"],[16,"data-metrics-click",[28,[37,4],["skipBack"],[["id"],[[30,3]]]]],[24,4,"button"],[4,[38,5],["click",[30,0,["skipBack"]]],null],[12],[1,"\\n        "],[1,[28,[35,6],["WEA.Common.Playback.Skip.Back"],null]],[1,[28,[35,7],["icon-back--skip-15"],[["class","aria-hidden","focusable"],["we-audio-controls__icon","true","false"]]]],[1,[28,[35,7],["icon-forward--skip-15"],[["class","aria-hidden","focusable"],["we-audio-controls__icon icon--rtl","true","false"]]]],[1,"\\n      "],[13],[1,"\\n\\n"],[41,[30,4],[[[1,"        "],[8,[39,8],[[24,0,"we-audio-controls__loading"]],[["@isLoading","@isPlaying"],[true,false]],null],[1,"\\n"]],[]],null],[1,"\\n      "],[11,"button"],[24,1,"audio-controls-playback"],[16,0,[28,[37,9],["we-audio-controls__button we-audio-controls__button--playback icon icon-after ",[52,[30,4],"is-loading "],[30,0,["playStateClasses"]]],null]],[16,"aria-label",[30,0,["playPauseLabel"]]],[16,"aria-busy",[29,[[30,4]]]],[16,"data-metrics-click",[28,[37,4],["playPause"],[["id","action"],[[30,3],[30,0,["playPauseMetricsAction"]]]]]],[24,4,"button"],[4,[38,10],[[30,0,["focus"]]],null],[4,[38,5],["click",[30,0,["pause"]]],null],[12],[1,"\\n        "],[1,[30,0,["playPauseLabel"]]],[1,"\\n      "],[13],[1,"\\n\\n      "],[11,"button"],[24,0,"we-audio-controls__button we-audio-controls__button--skip we-audio-controls__button--forward-30"],[16,"data-metrics-click",[28,[37,4],["skipAhead"],[["id"],[[30,3]]]]],[24,4,"button"],[4,[38,5],["click",[30,0,["skipAhead"]]],null],[12],[1,"\\n        "],[1,[28,[35,6],["WEA.Common.Playback.Skip.Ahead"],null]],[1,[28,[35,7],["icon-forward--skip-30"],[["class","aria-hidden","focusable"],["we-audio-controls__icon","true","false"]]]],[1,[28,[35,7],["icon-back--skip-30"],[["class","aria-hidden","focusable"],["we-audio-controls__icon icon--rtl","true","false"]]]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n"],[44,[[28,[37,12],[[30,0,["elapsedTime"]],0],null]],[[[1,"      "],[1,[28,[35,13],[[30,5]],[["classNames","duration","timer"],["we-audio-controls__time we-audio-controls__time--elapsed",true,false]]]],[1,"\\n"]],[5]]],[1,"\\n    "],[10,0],[14,0,"we-audio-controls__progress-wrapper"],[12],[1,"\\n      "],[10,"label"],[14,0,"we-audio-controls__progress-label"],[15,"for",[29,["audio-control--",[30,0,["elementId"]]]]],[12],[1,"\\n        "],[1,[28,[35,6],["WEA.Common.Playback.Progress"],null]],[1,"\\n      "],[13],[1,"\\n\\n      "],[11,"input"],[24,0,"we-audio-controls__progress"],[16,"disabled",[30,6]],[16,1,[29,["audio-control--",[30,0,["elementId"]]]]],[16,"max",[30,7]],[24,"min","0"],[24,"steps","1"],[16,5,[30,0,["inlineStyles"]]],[16,2,[30,0,["elapsedTime"]]],[24,4,"range"],[4,[38,5],["input",[30,0,["scrubToInput"]]],null],[12],[13],[1,"\\n    "],[13],[1,"\\n\\n"],[44,[[28,[37,12],[[30,0,["remainingTime"]],0],null]],[[[1,"      "],[1,[28,[35,13],[[30,8]],[["classNames","duration","timer"],["we-audio-controls__time we-audio-controls__time--remaining",true,true]]]],[1,"\\n"]],[8]]]],[]]],[13],[1,"\\n"]],["@isActiveTrack","&attrs","@mediaId","@isLoading","elapsedTime","@isDisabled","@duration","remainingTime","&default"],false,["if","has-block","yield","hash","metrics-data","on","t","svg-jar","radial-progress","concat","did-insert","let","or","time-tag"]]',moduleName:"web-experience-app/components/we-audio-controls.hbs",isStrictMode:!1}),T=(f=new WeakMap,u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)})(g,e)
var t,r,n,o,a,u=v(g)
function g(){var e
m(this,g)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return b(w(e=u.call.apply(u,[this].concat(r))),"audioPlayer",c,w(e)),b(w(e),"mediaPlayer",s,w(e)),b(w(e),"i18n",p,w(e)),P(w(e),f,{writable:!0,value:null}),e}return t=g,(r=[{key:"duration",get:function(){var e
return null!==(e=this.args.duration)&&void 0!==e?e:0}},{key:"elapsedTime",get:function(){var e=this.mediaPlayer.playbackTime
return Number.isNaN(e)?0:e}},{key:"inlineStyles",get:function(){var e=this.playbackPercentage
return(0,i.htmlSafe)("--progress:".concat(e,"%;"))}},{key:"playbackPercentage",get:function(){var e=this.duration,t=this.elapsedTime
return e&&t?Math.round(t/e*100):0}},{key:"playPauseLabel",get:function(){var e=this.args.isPlaying?"Pause":"Play"
return this.i18n.t("WEA.Common.".concat(e))}},{key:"playPauseMetricsAction",get:function(){return this.args.isPlaying?"pause":"play"}},{key:"playStateClasses",get:function(){return this.args.isPlaying?"icon-pause":"icon-play"}},{key:"remainingTime",get:function(){var e=this.mediaPlayer.playbackTimeRemaining
return Number.isNaN(e)?0:e}},{key:"focus",value:function(e){e.focus()}},{key:"pause",value:(o=regeneratorRuntime.mark((function e(){var t,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.args.media
case 2:return t=e.sent,e.next=5,this.args.queue
case 5:r=e.sent,this.mediaPlayer.togglePlayback(r,t,this.isPlayableQueue)
case 7:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){d(i,r,n,a,l,"next",e)}function l(e){d(i,r,n,a,l,"throw",e)}a(void 0)}))},function(){return a.apply(this,arguments)})},{key:"scrubToInput",value:function(e){_(this,f,e),(0,l.throttleTask)(this,"_seekToTime",500)}},{key:"_seekToTime",value:function(){var e,t
this.audioPlayer.seekToTime((e=this,t=f,function(e,t){return t.get?t.get.call(e):t.value}(e,j(e,t,"get"))).target.value),_(this,f,null)}},{key:"skipBack",value:function(){(0,l.throttleTask)(this,"_seekBackward",500)}},{key:"_seekBackward",value:function(){this.audioPlayer.seekBackward()}},{key:"skipAhead",value:function(){(0,l.throttleTask)(this,"_seekForward",500)}},{key:"_seekForward",value:function(){this.audioPlayer.seekForward()}}])&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),g}(n.default),c=k(u.prototype,"audioPlayer",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=k(u.prototype,"mediaPlayer",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=k(u.prototype,"i18n",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k(u.prototype,"focus",[o.action],Object.getOwnPropertyDescriptor(u.prototype,"focus"),u.prototype),k(u.prototype,"pause",[o.action],Object.getOwnPropertyDescriptor(u.prototype,"pause"),u.prototype),k(u.prototype,"scrubToInput",[o.action],Object.getOwnPropertyDescriptor(u.prototype,"scrubToInput"),u.prototype),k(u.prototype,"skipBack",[o.action],Object.getOwnPropertyDescriptor(u.prototype,"skipBack"),u.prototype),k(u.prototype,"skipAhead",[o.action],Object.getOwnPropertyDescriptor(u.prototype,"skipAhead"),u.prototype),u)
e.default=T,(0,t.setComponentTemplate)(x,T)})),define("web-experience-app/components/we-book-artwork",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"YwEqN34C",block:'[[[11,0],[24,0,"we-book-artwork"],[17,1],[12],[1,"\\n  "],[10,0],[14,0,"we-book-artwork__lighting"],[12],[1,"\\n    "],[8,[39,0],[[16,0,[28,[37,1],["we-artwork--fullwidth we-artwork--no-border we-book-artwork__background ",[30,2]],null]]],[["@artwork","@profile","@lazyLoad","@fallbackProfile"],[[30,3],[30,4],[30,5],[30,6]]],null],[1,"\\n    "],[8,[39,0],[[16,0,[28,[37,1],["we-artwork--fullwidth we-artwork--no-border we-book-artwork__foreground ",[30,2]],null]]],[["@artwork","@profile","@lazyLoad","@fallbackProfile"],[[30,3],[30,4],[30,5],[30,6]]],null],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["&attrs","@artworkClassName","@artwork","@profile","@lazyLoad","@fallbackArtworkProfile"],false,["amp-artwork/wea","concat"]]',moduleName:"web-experience-app/components/we-book-artwork.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-connecting/android/carrier",["exports","@glimmer/component","@ember/service"],(function(e,t,r){var n,o
function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var o=f(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d,b,m,y,h,v,g=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)})(f,e)
var t,r,n,s=c(f)
function f(){var e
a(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return i(p(e=s.call.apply(s,[this].concat(r))),"i18n",o,p(e)),e}return t=f,(r=[{key:"ariaLabel",get:function(){var e=this.i18n.t("WEA.Error.Generic.GooglePlay")
return this.i18n.t("WEA.Error.Carrier.Open.Action",{appname:e})}},{key:"text",get:function(){var e=this.i18n.t("WEA.Error.Generic.GooglePlay"),t='<span class="we-button__app-text">'.concat(e,"</span>")
return this.i18n.t("WEA.Error.Carrier.Open.Action",{appname:t})}}])&&l(t.prototype,r),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(t.default),d=n.prototype,b="i18n",m=[r.inject],y={configurable:!0,enumerable:!0,writable:!0,initializer:null},v={},Object.keys(y).forEach((function(e){v[e]=y[e]})),v.enumerable=!!v.enumerable,v.configurable=!!v.configurable,("value"in v||v.initializer)&&(v.writable=!0),v=m.slice().reverse().reduce((function(e,t){return t(d,b,e)||e}),v),h&&void 0!==v.initializer&&(v.value=v.initializer?v.initializer.call(h):void 0,v.initializer=void 0),void 0===v.initializer&&(Object.defineProperty(d,b,v),v=null),o=v,n)
e.default=g})),define("web-experience-app/components/we-connecting/generic",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"QVZe47pI",block:'[[[10,0],[14,0,"we-connecting"],[12],[1,"\\n  "],[10,"main"],[14,0,"we-connecting__content"],[12],[1,"\\n    "],[10,2],[14,0,"we-connecting__logo"],[12],[1,"\\n"],[41,[28,[37,1],[[30,1],"music-note"],null],[[[1,"        "],[1,[28,[35,2],[[30,1]],[["role","class","aria-labelledby"],["img","we-connecting__logo-img","we-connecting-instructions"]]]],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"music"],null],[[[1,"        "],[10,"img"],[14,"src","/assets/images/icons/music-f7369591ccf04b2f87d794bee6df888b.png"],[14,0,"we-connecting__logo-img"],[14,"aria-labelledby","we-connecting-instructions"],[12],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"podcasts"],null],[[[1,"        "],[10,"img"],[14,"src","/assets/images/icons/podcasts-a7260008603206bf74433af7b576a4d3.png"],[14,0,"we-connecting__logo-img"],[14,"aria-labelledby","we-connecting-instructions"],[12],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"apps"],null],[[[1,"        "],[10,"img"],[14,"src","/assets/images/icons/apps-02daf211a48ed1f493ea452fb3e1ca38.png"],[14,0,"we-connecting__logo-img"],[14,"aria-labelledby","we-connecting-instructions"],[12],[13],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,1],"books"],null],[[[1,"        "],[10,"img"],[14,"src","/assets/images/icons/books-dbe5a8092d0579235aab707c005acf51.png"],[14,0,"we-connecting__logo-img"],[14,"aria-labelledby","we-connecting-instructions"],[12],[13],[1,"\\n      "]],[]],null]],[]]]],[]]]],[]]]],[]]],[1,"    "],[13],[1,"\\n\\n    "],[10,2],[14,0,"we-connecting__instructions"],[14,1,"we-connecting-instructions"],[12],[1,"\\n"],[41,[28,[37,3],[[30,2],[28,[37,4],[[30,3]],null]],null],[[[1,"        "],[1,[28,[35,5],[[28,[37,6],["WEA.Error.Generic.Title.Connecting"],null]],null]],[10,1],[14,0,"we-connecting__ellipses"],[12],[1,[28,[35,5],[[28,[37,6],["WEA.Common.Ellipsis.Animated"],null]],null]],[13],[1,"\\n"]],[]],[[[41,[30,3],[[[1,"        "],[1,[28,[35,5],[[28,[37,6],["WEA.Error.Generic.Subtitle"],[["downloadLink"],[[30,4]]]]],null]],[1,"\\n      "]],[]],null]],[]]],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@logo","@isLoading","@canShowSubtitle","@downloadLink"],false,["if","eq","svg-jar","or","not","html-safe","t"]]',moduleName:"web-experience-app/components/we-connecting/generic.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-connecting/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","web-experience-app/config","@ember/object","@ember/service","@ember/runloop","web-experience-app/config/timeouts","web-experience-app/utils/urls","web-experience-app/services/app-view-state","@glimmer/tracking"],(function(e,t,r,n,o,i,a,l,u,c,s,p){var f,d,b,m,y,h,v,g,w,O,P
function _(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=E(e)
if(t){var o=E(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return A(this,r)}}function A(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var M=(0,r.createTemplateFactory)({id:"m6zT1CtT",block:'[[[11,0],[4,[38,0],[[30,0,["handleInsert"]]],null],[4,[38,1],[[30,0,["handleUpdate"]]],null],[12],[1,"\\n"],[41,[48,[30,1]],[[[1,"    "],[18,1,[[28,[37,5],null,[["url","launchApp","isLoading"],[[30,0,["url"]],[30,0,["launchApp"]],[30,0,["isLoading"]]]]]]],[1,"\\n"]],[]],[[[1,"    "],[8,[39,6],null,[["@logo","@isLoading","@canShowSubtitle","@downloadLink"],[[30,0,["logo"]],[30,0,["isLoading"]],[30,0,["canShowSubtitle"]],[30,0,["downloadLink"]]]],null],[1,"\\n"]],[]]],[13],[1,"\\n"]],["&default"],false,["did-insert","did-update","if","has-block","yield","hash","we-connecting/generic"]]',moduleName:"web-experience-app/components/we-connecting/index.hbs",isStrictMode:!1}),z=(f=(0,a.inject)("location-wea"),d=(0,i.computed)("appViewState.currentState"),b=(0,i.computed)("appViewState.isiTunesView","isLoading"),m=(0,i.computed)("appViewState.isiTunesView"),y=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)})(a,e)
var t,r,n,i=T(a)
function a(){var e
j(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return _(S(e=i.call.apply(i,[this].concat(r))),"appViewState",h,S(e)),_(S(e),"fastboot",v,S(e)),_(S(e),"i18n",g,S(e)),_(S(e),"platform",w,S(e)),_(S(e),"location",O,S(e)),_(S(e),"isLoading",P,S(e)),e}return t=a,(r=[{key:"logo",get:function(){return s.LOGO_FOR_STATE[this.appViewState.currentState]}},{key:"canShowSubtitle",get:function(){return!this.isLoading&&this.appViewState.isiTunesView}},{key:"connectingTitle",get:function(){var e=this.i18n
return this.appViewState.isiTunesView?e.t("WEA.Error.Generic.Title.iTunes"):e.t("WEA.Error.Generic.Title")}},{key:"downloadLink",get:function(){var e=this.i18n,t=e.t("WEA.Error.Generic.Subtitle.DownloadLink.URL"),r=e.t("WEA.Error.Generic.Subtitle.DownloadLink.Text")
return'<a href="'.concat(t,'" class="link" target="_blank">').concat(r,"</a>")}},{key:"isGiftCardUrl",get:function(){return/^.*?(\/redeem)[^$]*$/.test(this.url)}},{key:"url",get:function(){return this.args.url?this.args.url:window?window.location.href:""}},{key:"handleInsert",value:function(){var e=this,t=this.platform.couldHaveiTunes,r=this.platform.canOpenAppleMusic,n=this.platform.couldHaveBookStore,o=this.platform.browser.isAndroid,i=!1
switch(this.appViewState.currentState){case s.VIEW_STATES.APP:i=this.platform.couldHaveMacAppStore
break
case s.VIEW_STATES.BOOK:i=n||this.isGiftCardUrl&&t
break
case s.VIEW_STATES.PODCASTS:i=this.platform.couldHavePodcasts||t
break
case s.VIEW_STATES.TV:i=this.platform.couldHaveTV
break
default:i=!o&&r||t}i&&this.launchApp(),(0,l.later)(this,(function(){e.isLoading=!1}),u.LOADING_MSG_TIMEOUT)}},{key:"launchApp",value:function(){if(this.args.preventLaunch)return!1
var e=this.url
if(e){if(this.isGiftCardUrl){var t=this.platform.couldHaveBookStore
e="".concat(t?"itms-bookss":"itms").concat(o.default.booksGiftCardRedemptionUrlBase)}(this.appViewState.isAppStoreView||this.appViewState.isMacAppStoreView)&&this.platform.couldHaveMacAppStore&&(e=(0,c.updateProtocol)(e,"macappstores")),this.platform.launch(e)}}}])&&k(t.prototype,r),n&&k(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),h=R(y.prototype,"appViewState",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=R(y.prototype,"fastboot",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=R(y.prototype,"i18n",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=R(y.prototype,"platform",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=R(y.prototype,"location",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=R(y.prototype,"isLoading",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),R(y.prototype,"logo",[d],Object.getOwnPropertyDescriptor(y.prototype,"logo"),y.prototype),R(y.prototype,"canShowSubtitle",[b],Object.getOwnPropertyDescriptor(y.prototype,"canShowSubtitle"),y.prototype),R(y.prototype,"connectingTitle",[m],Object.getOwnPropertyDescriptor(y.prototype,"connectingTitle"),y.prototype),R(y.prototype,"handleInsert",[i.action],Object.getOwnPropertyDescriptor(y.prototype,"handleInsert"),y.prototype),R(y.prototype,"launchApp",[i.action],Object.getOwnPropertyDescriptor(y.prototype,"launchApp"),y.prototype),y)
e.default=z,(0,t.setComponentTemplate)(M,z)})),define("web-experience-app/components/we-copy",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object"],(function(e,t,r,n,o){var i,a,l,u
function c(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function v(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,w(e,t,"get"))}function g(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=r}}(e,w(e,t,"set"),r),r}function w(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}function O(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var P=(0,r.createTemplateFactory)({id:"KJr1C0NC",block:'[[[11,"button"],[24,4,"button"],[17,1],[4,[38,0],["click",[30,0,["onClick"]]],null],[4,[38,1],[[30,0,["load"]]],null],[12],[1,"\\n"],[13],[1,"\\n"]],["&attrs"],false,["on","did-insert"]]',moduleName:"web-experience-app/components/we-copy.hbs",isStrictMode:!1}),_=(a=new WeakMap,l=new WeakMap,u=new WeakMap,O((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(y,e)
var t,r,n,o,i,b=d(y)
function y(){var e
return s(this,y),h(m(e=b.apply(this,arguments)),a,{writable:!0,value:void 0}),h(m(e),l,{writable:!0,value:void 0}),h(m(e),u,{writable:!0,value:void 0}),g(m(e),l,new Promise((function(t){g(m(e),u,t)}))),e}return t=y,(r=[{key:"load",value:(o=regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,emberAutoImportDynamic("@marcom/ac-clipboard/copyString")
case 2:t=e.sent,g(this,a,t.default),v(this,u).call(this)
case 5:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){c(i,r,n,a,l,"next",e)}function l(e){c(i,r,n,a,l,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"copy",get:function(){return this.args.copy||v(this,a)}},{key:"onClick",value:function(e){var t=this
v(this,l).then((function(){var r,n,o,i
t.copy(t.args.clipboardText)?null===(r=(n=t.args).success)||void 0===r||r.call(n,e):null===(o=(i=t.args).error)||void 0===o||o.call(i,e)})),e.stopPropagation()}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),y}(n.default)).prototype,"load",[o.action],Object.getOwnPropertyDescriptor(i.prototype,"load"),i.prototype),O(i.prototype,"onClick",[o.action],Object.getOwnPropertyDescriptor(i.prototype,"onClick"),i.prototype),i)
e.default=_,(0,t.setComponentTemplate)(P,_)})),define("web-experience-app/components/we-customer-ratings",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service","web-experience-app/config"],(function(e,t,r,n,o,i,a){var l,u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(0,r.createTemplateFactory)({id:"3Umjznw0",block:'[[[10,0],[14,0,"we-customer-ratings lockup"],[12],[1,"\\n  "],[10,0],[14,0,"l-row"],[12],[1,"\\n    "],[10,0],[14,0,"we-customer-ratings__stats l-column small-4 medium-6 large-4"],[12],[1,"\\n      "],[10,0],[14,0,"we-customer-ratings__averages"],[12],[1,[28,[35,0],[[28,[37,1],["WEA.Common.AverageRating"],[["rating","ratingTotal"],[[28,[37,2],["<span class=\\"we-customer-ratings__averages__display\\">",[28,[37,3],[[30,1,["value"]]],[["decimal"],[1]]],"</span>"],null],[28,[37,3],[[30,0,["maxRating"]]],[["decimal"],[0]]]]]]],null]],[13],[1,"\\n"],[41,[30,1,["ratingCount"]],[[[1,"        "],[10,0],[14,0,"we-customer-ratings__count small-hide medium-show"],[12],[1,[28,[35,1],["WEA.Common.Ratings"],[["count"],[[28,[37,5],[[30,1,["ratingCount"]]],null]]]]],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n    "],[10,0],[14,0," l-column small-8 medium-6 large-4"],[12],[1,"\\n      "],[10,"figure"],[14,0,"we-star-bar-graph"],[12],[1,"\\n"],[42,[28,[37,7],[[28,[37,7],[[30,0,["ratingBreakdown"]]],null]],null],null,[[[1,"          "],[10,0],[14,0,"we-star-bar-graph__row"],[12],[1,"\\n            "],[10,1],[15,0,[29,["we-star-bar-graph__stars ",[52,[28,[37,8],[[30,2,["rating"]],1],null],[28,[37,2],["we-star-bar-graph__stars--",[30,2,["rating"]]],null]]]]],[12],[13],[1,"\\n            "],[10,0],[14,0,"we-star-bar-graph__bar"],[12],[1,"\\n              "],[10,0],[14,0,"we-star-bar-graph__bar__foreground-bar"],[15,5,[28,[37,9],[[28,[37,10],null,[["width"],[[30,2,["percentage"]]]]]],null]],[12],[13],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n"]],[2]],null],[1,"      "],[13],[1,"\\n"],[41,[30,1,["ratingCount"]],[[[1,"        "],[10,2],[14,0,"we-customer-ratings__count medium-hide"],[12],[1,[28,[35,1],["WEA.Common.Ratings"],[["count"],[[28,[37,5],[[30,1,["ratingCount"]]],null]]]]],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@rating","item"],false,["html-safe","t","concat","to-locale-fixed","if","abbr-number","each","-track-array","gt","style-attribute","hash"]]',moduleName:"web-experience-app/components/we-customer-ratings.hbs",isStrictMode:!1}),O=(l=(0,o.computed)("args.rating.{ratingCount,ratingCountList}"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(i,e)
var t,r,n,o=b(i)
function i(){var e
p(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=o.call.apply(o,[this].concat(r))),"i18n",c,y(e)),v(y(e),"maxRating",a.default.maxRating),e}return t=i,(r=[{key:"ratingBreakdown",get:function(){var e,t,r,n,o=null!==(e=null===(t=this.args.rating)||void 0===t?void 0:t.ratingCount)&&void 0!==e?e:0,i=null!==(r=null===(n=this.args.rating)||void 0===n?void 0:n.ratingCountList)&&void 0!==r?r:[],a=i.length
return i.slice().reverse().map((function(e,t){var r=0===o?0:Math.round(100*e/o)
return{rating:a-t,percentage:"".concat(r,"%")}}))}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),c=g(u.prototype,"i18n",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g(u.prototype,"ratingBreakdown",[l],Object.getOwnPropertyDescriptor(u.prototype,"ratingBreakdown"),u.prototype),u)
e.default=O,(0,t.setComponentTemplate)(w,O)})),define("web-experience-app/components/we-customer-review",["exports","@ember/component","@ember/template-factory","@glimmer/component","web-experience-app/utils/id-gen"],(function(e,t,r,n,o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=s(e)
if(t){var o=s(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=(0,r.createTemplateFactory)({id:"uo2aYlNW",block:'[[[11,0],[16,"aria-labelledby",[30,0,["ariaLabelledBy"]]],[24,0,"we-customer-review lockup"],[17,1],[12],[1,"\\n  "],[8,[39,0],[[24,0,"we-customer-review__rating we-star-rating--large"]],[["@value"],[[30,2,["rating"]]]],null],[1,"\\n\\n  "],[10,0],[14,0,"we-customer-review__header we-customer-review__header--user"],[12],[1,"\\n    "],[8,[39,1],[[24,0,"we-customer-review__user"]],[["@tagName","@value"],["span",[30,2,["name"]]]],null],[1,"\\n\\n    "],[10,1],[14,0,"we-customer-review__separator"],[12],[1,[28,[35,2],["WEA.Common.Comma"],null]],[13],[1,"\\n\\n    "],[1,[28,[35,3],[[30,2,["date"]]],[["format","classNames","dataTestAttr"],["SHORT_DATE","we-customer-review__date","data-test-customer-review-date"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[8,[39,1],[[24,0,"we-customer-review__title"],[16,1,[30,0,["ariaLabelledBy"]]]],[["@tagName","@value"],["h3",[30,2,["title"]]]],null],[1,"\\n\\n"],[41,[30,0,["isTruncated"]],[[[1,"    "],[8,[39,1],[[24,0,"we-customer-review__body"]],[["@tagName","@clampProfile","@value","@isInteractive","@onShowMore","@dataMetricsClick"],["blockquote",[52,[30,2,["responseText"]],"customer-review-with-response","customer-review"],[28,[37,5],[[30,2,["body"]]],null],true,[30,3],[28,[37,6],["expandMore"],null]]],null],[1,"\\n\\n"],[41,[30,2,["responseText"]],[[[1,"      "],[10,"h3"],[14,0,"we-customer-review__header we-customer-review__header--response"],[12],[1,"\\n        "],[8,[39,1],[[24,0,"we-customer-review__title"]],[["@tagName","@value"],["span",[28,[37,2],["WEA.AppPages.DeveloperResponse"],null]]],null],[1,"\\n\\n        "],[10,1],[14,0,"we-customer-review__separator"],[12],[1,[28,[35,2],["WEA.Common.Comma"],null]],[13],[1,"\\n\\n        "],[1,[28,[35,3],[[30,2,["responseDate"]]],[["format","classNames","dataTestAttr"],["SHORT_DATE","we-customer-review__date we-customer-review__date--response","data-test-customer-review-response-date"]]]],[1,"\\n      "],[13],[1,"\\n\\n      "],[8,[39,1],[[24,0,"we-customer-review__body"]],[["@tagName","@clampProfile","@value","@isInteractive","@onShowMore","@dataMetricsClick"],["blockquote","customer-review-response",[28,[37,5],[[30,2,["responseText"]]],null],true,[30,3],[28,[37,6],["expandMore"],null]]],null],[1,"\\n"]],[]],null]],[]],[[[1,"    "],[10,"blockquote"],[14,0,"we-customer-review__body--modal"],[12],[1,"\\n      "],[8,[39,7],null,[["@value"],[[28,[37,5],[[30,2,["body"]]],null]]],null],[1,"\\n    "],[13],[1,"\\n\\n"],[41,[30,2,["responseText"]],[[[1,"      "],[10,"h3"],[14,0,"we-customer-review__header we-customer-review__header--response"],[12],[1,"\\n        "],[8,[39,1],[[24,0,"we-customer-review__title"]],[["@tagName","@value"],["span",[28,[37,2],["WEA.AppPages.DeveloperResponse"],null]]],null],[1,"\\n\\n        "],[10,1],[14,0,"we-customer-review__separator"],[12],[1,[28,[35,2],["WEA.Common.Comma"],null]],[13],[1,"\\n\\n        "],[1,[28,[35,3],[[30,2,["responseDate"]]],[["format","classNames","dataTestAttr"],["SHORT_DATE","we-customer-review__date we-customer-review__date--response","data-test-customer-review-response-date"]]]],[1,"\\n      "],[13],[1,"\\n\\n      "],[10,"blockquote"],[14,0,"we-customer-review__body--modal"],[12],[1,"\\n        "],[8,[39,7],null,[["@value"],[[28,[37,5],[[30,2,["responseText"]]],null]]],null],[1,"\\n      "],[13],[1,"\\n"]],[]],null]],[]]],[13],[1,"\\n"]],["&attrs","@review","@onShowMore"],false,["we-star-rating","we-truncate","t","time-tag","if","html-sanitize","metrics-data","bidi-text"]]',moduleName:"web-experience-app/components/we-customer-review.hbs",isStrictMode:!1}),f=(0,o.default)("we-customer-review"),d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)})(c,e)
var t,r,n,o=u(c)
function c(){var e
return i(this,c),(e=o.apply(this,arguments)).ariaLabelledBy=f(),e}return t=c,(r=[{key:"isTruncated",get:function(){var e
return null===(e=this.args.isTruncated)||void 0===e||e}},{key:"review",get:function(){return this.args.review||null}}])&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.default)
e.default=d,(0,t.setComponentTemplate)(p,d)})),define("web-experience-app/components/we-footer-disclaimer",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"MUmlUsEd",block:'[[[10,0],[12],[1,"\\n  "],[10,"footer"],[14,0,"we-footer-disclaimer"],[12],[1,"\\n    "],[10,0],[14,0,"we-footer-disclaimer__wrapper l-content-width"],[12],[1,"\\n      "],[10,2],[14,0,"we-footer-disclaimer__text"],[12],[1,[28,[35,0],["WEA.AppPages.Arcade.Disclaimer"],null]],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["t"]]',moduleName:"web-experience-app/components/we-footer-disclaimer.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-global-element-visibility",["exports","@amp/ember-ui-global-elements/components/we-global-element-visibility"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/components/we-limit-per-viewport",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/array","@ember/object","@ember/service"],(function(e,t,r,n,o,i,a){var l,u,c,s
function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function w(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}(e,t,"get"))}function O(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var P=(0,r.createTemplateFactory)({id:"Xn/sSee5",block:'[[[41,[30,1],[[[42,[28,[37,2],[[28,[37,2],[[28,[37,3],[[30,1],[28,[37,4],[[30,0,["limit"]],[30,2]],null]],null]],null]],null],null,[[[1,"    "],[8,[39,5],[[16,0,[30,5]]],[["@tagName"],[[30,6]]],[["default"],[[[[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,3]],null]],null],null,[[[1,"        "],[18,11,[[30,7],[28,[37,7],[[30,1],[30,4],[30,8]],null]]],[1,"\\n"]],[7,8]],null],[1,"    "]],[]]]]],[1,"\\n"]],[3,4]],null]],[]],[[[42,[28,[37,2],[[28,[37,2],[[28,[37,4],[[30,0,["limit"]],[30,2]],null]],null]],null],null,[[[1,"    "],[18,11,[[30,9],[30,10]]],[1,"\\n"]],[9,10]],null]],[]]]],["@group","@items","grouped","groupedIndex","@groupClass","@groupTag","item","index","item","index","&default"],false,["if","each","-track-array","chunk","take","html-tag","yield","grouped-index"]]',moduleName:"web-experience-app/components/we-limit-per-viewport.hbs",isStrictMode:!1}),_=(l=(0,i.computed)("responsive.viewport","small","medium","large"),s=new WeakMap,u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)})(a,e)
var t,r,n,i=m(a)
function a(){var e
f(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return p(h(e=i.call.apply(i,[this].concat(r))),"responsive",c,h(e)),g(h(e),s,{writable:!0,value:(0,o.A)()}),e}return t=a,(r=[{key:"items",get:function(){return this.args.items||w(this,s)}},{key:"small",get:function(){return this.args.small||this.items.length}},{key:"medium",get:function(){return this.args.medium||this.small}},{key:"large",get:function(){return this.args.large||this.medium}},{key:"limit",get:function(){return this[this.responsive.viewport||"small"]}}])&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),c=O(u.prototype,"responsive",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O(u.prototype,"limit",[l],Object.getOwnPropertyDescriptor(u.prototype,"limit"),u.prototype),u)
e.default=_,(0,t.setComponentTemplate)(P,_)}))
define("web-experience-app/components/we-loading-spinner",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","ember-lifeline","@ember/service","web-experience-app/config/environment"],(function(e,t,r,n,o,i,a,l){var u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(0,r.createTemplateFactory)({id:"SD0X1epN",block:'[[[11,0],[24,0,"we-loading-spinner"],[24,"role","presentation"],[16,5,[52,[51,[30,0,["isVisible"]]],"display: none;"]],[17,1],[4,[38,1],null,[["onEnter","viewportTolerance","viewportSpy"],[[30,0,["nextPage"]],[30,0,["viewportTolerance"]],[30,0,["viewportSpy"]]]]],[12],[1,"\\n"],[13],[1,"\\n"]],["&attrs"],false,["unless","in-viewport"]]',moduleName:"web-experience-app/components/we-loading-spinner.hbs",isStrictMode:!1}),O=l.default.APP.LOADING_SPINNER_SPY,P={bottom:150},_=(u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(a,e)
var t,r,n,o=b(a)
function a(){var e
p(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=o.call.apply(o,[this].concat(r))),"inViewport",c,y(e)),v(y(e),"viewportTolerance",P),v(y(e),"viewportSpy",O),e}return t=a,(r=[{key:"isVisible",get:function(){var e
return this.args.forceDisplay||this.args.nextLink||(null===(e=this.args.itemIds)||void 0===e?void 0:e.length)}},{key:"nextPage",value:function(e){var t,r
null===(t=(r=this.args).nextPage)||void 0===t||t.call(r),this.spinnerEl||(this.spinnerEl=e),this.viewportSpy&&(0,i.debounceTask)(this,"loadInViewport",500)}},{key:"loadInViewport",value:function(){var e
this.isVisible&&this.inViewport.isInViewport(null===(e=this.spinnerEl)||void 0===e?void 0:e.getBoundingClientRect(),window.innerHeight||document.documentElement.clientHeight,window.innerWidth||document.documentElement.clientWidth,this.viewportTolerance)&&this.nextPage(this.spinnerEl)}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),c=g(u.prototype,"inViewport",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g(u.prototype,"nextPage",[o.action],Object.getOwnPropertyDescriptor(u.prototype,"nextPage"),u.prototype),u)
e.default=_,(0,t.setComponentTemplate)(w,_)})),define("web-experience-app/components/we-localnav/apple-books",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,o){var i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(0,r.createTemplateFactory)({id:"kGzEzrqs",block:'[[[8,[39,0],[[24,0,"we-localnav--books"]],[["@productKey","@qualifierKey","@hideQualifier","@hideBorder","@storeLink","@titleKey","@menuLinks"],["WEA.LocalNav.Store.Books","WEA.LocalNav.Preview.Books",[30,1],[30,2],"/apple-books/","WEA.LocalNav.Title.Preview.Books",[30,0,["localNav","links"]]]],null],[1,"\\n"]],["@hideQualifier","@hideBorder"],false,["we-localnav"]]',moduleName:"web-experience-app/components/we-localnav/apple-books.hbs",isStrictMode:!1}),P=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(i,e)
var t,r,n,o=p(i)
function i(){var e
c(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=o.call.apply(o,[this].concat(r))),"localNav",a,d(e)),e}return t=i,r&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(n.default),m=i.prototype,y="localNav",h=[o.inject],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),a=w,i)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-localnav/apple-podcasts",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"NOlxvxHA",block:'[[[8,[39,0],[[24,0,"we-localnav--podcasts"]],[["@productKey","@qualifierKey","@storeLink","@titleKey"],["WEA.LocalNav.Store.Podcasts","WEA.LocalNav.Preview.Podcasts","/apple-podcasts/","WEA.LocalNav.Title.Preview.Podcasts"]],null],[1,"\\n\\n"],[8,[39,1],null,null,null],[1,"\\n"]],[],false,["we-localnav","we-web-to-native-cta/failed/itunes"]]',moduleName:"web-experience-app/components/we-localnav/apple-podcasts.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-localnav/dynamic",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,o){var i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(0,r.createTemplateFactory)({id:"8yDQxfJa",block:'[[[41,[30,0,["appViewState","isMacAppStoreView"]],[[[1,"  "],[8,[39,1],null,null,null],[1,"\\n"]],[]],[[[41,[30,0,["appViewState","isAppStoreView"]],[[[1,"  "],[8,[39,2],null,null,null],[1,"\\n"]],[]],[[[41,[30,0,["appViewState","isBookView"]],[[[1,"  "],[8,[39,3],null,null,null],[1,"\\n"]],[]],[[[41,[30,0,["appViewState","isPodcastsView"]],[[[1,"  "],[8,[39,4],null,null,null],[1,"\\n"]],[]],[[[1,"  "],[8,[39,5],null,null,null],[1,"\\n"]],[]]]],[]]]],[]]]],[]]]],[],false,["if","we-localnav/mac-app-store","we-localnav/app-store","we-localnav/apple-books","we-localnav/apple-podcasts","we-localnav/itunes"]]',moduleName:"web-experience-app/components/we-localnav/dynamic.hbs",isStrictMode:!1}),P=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(i,e)
var t,r,n,o=p(i)
function i(){var e
c(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=o.call.apply(o,[this].concat(r))),"appViewState",a,d(e)),e}return t=i,r&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(n.default),m=i.prototype,y="appViewState",h=[o.inject],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),a=w,i)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-localnav/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/template","@ember/debug","@ember/service"],(function(e,t,r,n,o,i,a,l){var u,c,s,p,f,d
function b(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return y(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function h(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=j(e)
if(t){var o=j(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return P(this,r)}}function P(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var T=(0,r.createTemplateFactory)({id:"m5DdQqrL",block:'[[[10,"input"],[14,1,"localnav-menustate"],[14,0,"localnav-menustate"],[14,4,"checkbox"],[12],[13],[1,"\\n\\n"],[11,"nav"],[24,1,"localnav"],[16,0,[29,["css-sticky we-localnav localnav ",[52,[30,1],"we-localnav--no-border"]," ",[52,[30,2],"we-localnav--no-qualifier"]]]],[24,"data-sticky",""],[17,3],[4,[38,1],[[30,0,["handleInsert"]]],null],[4,[38,2],[[30,0,["teardownIntersectionObservers"]]],null],[12],[1,"\\n  "],[10,0],[14,0,"localnav-wrapper"],[12],[1,"\\n    "],[10,0],[14,0,"localnav-background we-localnav__background"],[12],[13],[1,"\\n    "],[10,0],[14,0,"localnav-content we-localnav__content"],[12],[1,"\\n      "],[10,0],[14,0,"localnav-title we-localnav__title"],[12],[1,"\\n        "],[1,[30,0,["titleHtml"]]],[1,"\\n      "],[13],[1,"\\n      "],[10,0],[15,0,[29,["localnav-menu we-localnav__menu we-localnav__menu--",[30,0,["appViewState","currentState"]],[52,[30,4]," we-localnav__menu--arcade",""]]]],[12],[1,"\\n"],[41,[30,5,["length"]],[[[1,"          "],[10,3],[14,6,"#localnav-menustate"],[14,"role","button"],[14,0,"localnav-menucta-anchor localnav-menucta-anchor-open"],[14,1,"localnav-menustate-open"],[12],[1,"\\n            "],[10,1],[14,0,"localnav-menucta-anchor-label"],[12],[1,[28,[35,3],["WEA.Common.Accessibility.LocalNavOpen"],null]],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,3],[14,6,"#"],[14,"role","button"],[14,0,"localnav-menucta-anchor localnav-menucta-anchor-close"],[14,1,"localnav-menustate-close"],[12],[1,"\\n            "],[10,1],[14,0,"localnav-menucta-anchor-label"],[12],[1,[28,[35,3],["WEA.Common.Accessibility.LocalNavClose"],null]],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,0],[14,0,"localnav-menu-tray"],[12],[1,"\\n"],[1,"            "],[11,"ul"],[24,0,"localnav-menu-items"],[24,"data-localnav-menu-items",""],[4,[38,4],["click",[30,0,["handleLocalNavMenuItemsClick"]]],null],[12],[1,"\\n"],[42,[28,[37,6],[[28,[37,6],[[30,5]],null]],null],null,[[[1,"                "],[10,"li"],[14,0,"localnav-menu-item"],[12],[1,"\\n"],[41,[28,[37,7],[[30,0,["currentRouteName"]],[30,6,["routeName"]]],null],[[[1,"                    "],[10,1],[14,0,"localnav-menu-link current"],[14,"role","link"],[14,"aria-disabled","true"],[14,"aria-current","page"],[12],[1,"\\n                      "],[1,[28,[35,3],[[30,6,["nameKey"]]],null]],[1,"\\n                    "],[13],[1,"\\n"]],[]],[[[1,"                    "],[8,[39,8],[[24,0,"localnav-menu-link"],[24,"role","link"]],[["@route"],[[30,6,["routeName"]]]],[["default"],[[[[1,"\\n                      "],[1,[28,[35,3],[[30,6,["nameKey"]]],null]],[1,"\\n                    "]],[]]]]],[1,"\\n"]],[]]],[1,"                "],[13],[1,"\\n"]],[6]],null],[1,"            "],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"        "],[10,0],[14,0,"localnav-actions we-localnav__actions"],[12],[1,"\\n"],[41,[30,5,["length"]],[[[1,"            "],[10,0],[14,0,"localnav-action localnav-action-menucta"],[14,"aria-hidden","true"],[12],[1,"\\n              "],[10,"label"],[14,"for","localnav-menustate"],[14,0,"localnav-menucta"],[12],[1,"\\n                "],[10,1],[14,0,"localnav-menucta-chevron"],[12],[13],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[41,[48,[30,7]],[[[1,"            "],[18,7,null],[1,"\\n"]],[]],[[[41,[28,[37,11],[[30,5,["length"]]],null],[[[1,"            "],[10,0],[14,0,"localnav-action localnav-action-button we-localnav__action"],[12],[1,"\\n            "],[13],[1,"\\n          "]],[]],null]],[]]],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"],[10,1],[14,0,"we-localnav__shim"],[14,"aria-hidden","true"],[12],[13],[1,"\\n"],[10,"label"],[14,1,"localnav-curtain"],[14,"for","localnav-menustate"],[12],[13],[1,"\\n"]],["@hideBorder","@hideQualifier","&attrs","@supportsArcade","@menuLinks","link","&default"],false,["if","did-insert","will-destroy","t","on","each","-track-array","eq","link-to","has-block","yield","not"]]',moduleName:"web-experience-app/components/we-localnav/index.hbs",isStrictMode:!1}),A=(u=(0,o.computed)("router.currentRouteName"),c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)})(u,e)
var t,r,n,o,a,l=O(u)
function u(){var e
return v(this,u),h(_(e=l.apply(this,arguments)),"globalElements",s,_(e)),h(_(e),"appViewState",p,_(e)),h(_(e),"i18n",f,_(e)),h(_(e),"router",d,_(e)),k(_(e),"intersectionObserver",null),e.args.titleHtml,e}return t=u,(r=[{key:"absoluteStoreLink",get:function(){var e=this.globalElements,t=this.args.storeLink,r="https://www.apple.com"
return e&&e.storefront&&"us"!==e.storefront.toLowerCase()&&(r+="/".concat(e.storefront.toLowerCase())),r+=t}},{key:"currentRouteName",get:function(){return this.router.currentRouteName}},{key:"titleHtml",get:function(){if(this.args.titleHtml)return this.args.titleHtml
var e=this.i18n,t=this.absoluteStoreLink,r=(0,i.htmlSafe)('<a href="'.concat(t,'" data-we-link-to-exclude><span class="we-localnav__title__product" data-test-we-localnav-store-title>').concat(e.t(this.args.productKey),"</span></a>")),n=""
return this.args.hideQualifier||(n='<span class="we-localnav__title__qualifier" data-test-we-localnav-preview-title>'.concat(e.t(this.args.qualifierKey),"</span>")),this.i18n.t(this.args.titleKey,{product:r,qualifier:n})}},{key:"handleInsert",value:function(){this.setupIntersectionObservers(),this.setupLocalNavInstance()}},{key:"setupIntersectionObservers",value:function(){if("IntersectionObserver"in window){var e=document.querySelector(".we-localnav")
this.intersectionObserver=new IntersectionObserver((function(t){m(t,1)[0].isIntersecting?e.classList.remove("localnav-sticking"):e.classList.add("localnav-sticking")}))
var t=document.getElementById("ac-globalnav")
t instanceof HTMLElement&&this.intersectionObserver.observe(t)}}},{key:"teardownIntersectionObservers",value:function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)}},{key:"handleLocalNavMenuItemsClick",value:function(){var e
null===(e=this.localnavInstance)||void 0===e||e.menu.close()}},{key:"setupLocalNavInstance",value:(o=regeneratorRuntime.mark((function e(){var t,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,emberAutoImportDynamic("@marcom/ac-localnav/Localnav")
case 2:if(t=e.sent,r=t.default,!this.isDestroyed&&!this.isDestroying){e.next=6
break}return e.abrupt("return")
case 6:this.localnavInstance=new r(document.getElementById("localnav"))
case 7:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){b(i,r,n,a,l,"next",e)}function l(e){b(i,r,n,a,l,"throw",e)}a(void 0)}))},function(){return a.apply(this,arguments)})}])&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.default),s=x(c.prototype,"globalElements",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=x(c.prototype,"appViewState",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=x(c.prototype,"i18n",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=x(c.prototype,"router",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x(c.prototype,"currentRouteName",[u],Object.getOwnPropertyDescriptor(c.prototype,"currentRouteName"),c.prototype),x(c.prototype,"handleInsert",[o.action],Object.getOwnPropertyDescriptor(c.prototype,"handleInsert"),c.prototype),x(c.prototype,"teardownIntersectionObservers",[o.action],Object.getOwnPropertyDescriptor(c.prototype,"teardownIntersectionObservers"),c.prototype),x(c.prototype,"handleLocalNavMenuItemsClick",[o.action],Object.getOwnPropertyDescriptor(c.prototype,"handleLocalNavMenuItemsClick"),c.prototype),c)
e.default=A,(0,t.setComponentTemplate)(T,A)})),define("web-experience-app/components/we-localnav/itunes",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a){var l,u,c,s,p
function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=g(e)
if(t){var o=g(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return h(this,r)}}function h(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(0,r.createTemplateFactory)({id:"0cUqkfbm",block:'[[[8,[39,0],[[24,0,"we-localnav--itunes"]],[["@productKey","@qualifierKey","@storeLink","@titleKey"],["WEA.LocalNav.Store.iTunes","WEA.LocalNav.Preview.iTunes",[30,0,["storeLink"]],"WEA.LocalNav.Title.Preview.iTunes"]],[["default"],[[[[1,"\\n"],[41,[28,[37,2],[[30,0,["cta"]],[30,0,["ctaUrl"]]],null],[[[1,"    "],[10,0],[14,0,"localnav-action localnav-action-button we-localnav__action"],[12],[1,"\\n      "],[10,3],[14,0,"localnav-button we-button we-button--compact"],[15,6,[29,[[30,0,["ctaUrl"]]]]],[12],[1,[30,0,["cta"]]],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null]],[]]]]],[1,"\\n\\n"],[8,[39,3],null,null,null],[1,"\\n"]],[],false,["we-localnav","if","and","we-web-to-native-cta/failed/itunes"]]',moduleName:"web-experience-app/components/we-localnav/itunes.hbs",isStrictMode:!1}),P=(l=(0,o.computed)("currentRouteName"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)})(i,e)
var t,r,n,o=y(i)
function i(){var e
d(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return f(v(e=o.call.apply(o,[this].concat(r))),"i18n",c,v(e)),f(v(e),"platform",s,v(e)),f(v(e),"router",p,v(e)),e}return t=i,(r=[{key:"currentRouteName",get:function(){return this.router.currentRouteName}},{key:"cta",get:function(){return(0,a.isSSR)()||this.platform.browser.ismacOS?"":this.platform.couldHaveiTunes?this.i18n.t("WEA.LocalNav.CTA.DownloadiTunes"):""}},{key:"ctaUrl",get:function(){return this.platform.browser.ismacOS?"":this.i18n.t("WEA.LocalNav.CTA.DownloadiTunes.url")}},{key:"storeLink",get:function(){var e=this.currentRouteName
return e&&["episode.","movie.","movie-collection.","show.","tv-season."].some((function(t){return e.indexOf(t)>-1}))?"/itunes/video/":"/itunes/"}}])&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),c=w(u.prototype,"i18n",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=w(u.prototype,"platform",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=w(u.prototype,"router",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w(u.prototype,"storeLink",[l],Object.getOwnPropertyDescriptor(u.prototype,"storeLink"),u.prototype),u)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-lockup/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object","@ember/utils","web-experience-app/helpers/shelf-profile","web-experience-app/utils/shelf","web-experience-app/utils/generate-monogram","web-experience-app/utils/sanitize","web-experience-app/utils/date-time","web-experience-app/utils/apps/device-support","@glimmer/tracking","web-experience-app/utils/apps/app-type","web-experience-app/helpers/app-artwork","@ember/debug","@apple/babel-plugin-feature-remover"],(function(e,t,r,n,o,i,a,l,u,c,s,p,f,d,b,m,y,h){var v,g,w,O,P,_,j,k,x,T,A,S,E,R,M,z,C,L,I
function D(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=K(e)
if(t){var o=K(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return W(this,r)}}function W(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var q=(0,r.createTemplateFactory)({id:"H2kYrDUH",block:'[[[8,[39,0],[[16,0,[29,["we-lockup",[52,[30,0,["isPerson"]]," we-lockup--person"],[52,[30,0,["lockupUrl"]]," targeted-link"]]]],[16,6,[30,0,["lockupUrl"]]],[16,"aria-label",[30,0,["ariaLabel"]]],[17,1]],[["@tagName"],[[30,0,["tagName"]]]],[["default"],[[[[1,"\\n"],[41,[30,2],[[[1,"    "],[10,"h3"],[14,0,"we-lockup__lockup-eyebrow"],[12],[1,"\\n      "],[1,[30,2]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[41,[28,[37,2],[[30,0,["artwork"]],[30,0,["fallbackArtworkProfile"]]],null],[[[41,[30,0,["useVideoThumbnail"]],[[[1,"      "],[8,[39,3],null,[["@artworkClassName","@artwork","@profile","@fallbackProfile","@hasPreviewLabel","@media"],[[28,[37,4],["we-lockup__artwork ",[30,0,["artworkClassName"]]],null],[30,0,["artwork"]],[30,0,["useArtworkProfile"]],[30,0,["fallbackArtworkProfile"]],[30,0,["canHaveVideoPreview"]],[28,[37,5],["media-meta/lockup-video"],[["model"],[[30,3]]]]]],null],[1,"\\n"]],[]],[[[1,"      "],[10,0],[14,0,"we-lockup__overlay"],[15,5,[52,[30,4],[30,4]]],[12],[1,"\\n"],[41,[28,[37,6],[[30,0,["useArtworkProfile"]],[28,[37,7],["epubBook","audio-book","media-audio-book"],null]],null],[[[1,"          "],[8,[39,8],[[16,0,[28,[37,4],["we-lockup__artwork ",[30,0,["artworkClassName"]]],null]],[16,"dir",[30,0,["artworkDirection"]]]],[["@artworkClassName","@artwork","@profile","@fallbackProfile"],[[28,[37,4],["we-lockup__artwork ",[30,0,["artworkClassName"]]],null],[30,0,["artwork"]],[30,0,["useArtworkProfile"]],[30,0,["fallbackArtworkProfile"]]]],null],[1,"\\n"]],[]],[[[1,"          "],[8,[39,9],[[16,0,[28,[37,4],["we-lockup__artwork ",[30,0,["artworkClassName"]]],null]],[16,"dir",[30,0,["artworkDirection"]]]],[["@artworkClassName","@artwork","@profile","@fallbackProfile"],[[28,[37,4],["we-lockup__artwork ",[30,0,["artworkClassName"]]],null],[30,0,["artwork"]],[30,0,["useArtworkProfile"]],[30,0,["fallbackArtworkProfile"]]]],null],[1,"\\n"]],[]]],[1,"        "],[10,0],[14,0,"we-lockup__material"],[12],[13],[1,"\\n        "],[10,0],[14,0,"we-lockup__joe-color"],[12],[13],[1,"\\n      "],[13],[1,"\\n"]],[]]]],[]],null],[1,"\\n  "],[10,0],[15,0,[29,["we-lockup__copy",[52,[30,3,["supportsArcade"]]," lockup--arcade"]]]],[12],[1,"\\n"],[41,[30,5],[[[1,"      "],[10,2],[14,0,"we-lockup__rank"],[12],[1,[30,5]],[13],[1,"\\n"]],[]],null],[1,"    "],[10,0],[14,0,"we-lockup__text"],[12],[1,"\\n"],[41,[28,[37,2],[[30,6],[30,3,["eyebrow"]]],null],[[[1,"        "],[10,0],[14,0,"truncate-single-line we-lockup__eyebrow"],[12],[1,[28,[35,2],[[30,6],[30,3,["eyebrow"]]],null]],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,3,["supportsArcade"]],[[[1,"        "],[10,2],[14,0,"we-lockup__eyebrow"],[12],[1,[28,[35,10],["WEA.AppPages.Arcade.Branding.Title"],null]],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["title"]],[[[1,"        "],[10,0],[15,1,[30,0,["ariaLabelledBy"]]],[15,0,[29,["we-lockup__title ",[52,[30,0,["isExplicit"]]," icon icon-after icon-explicit"]]]],[12],[1,"\\n"],[41,[30,0,["shouldTruncateTitle"]],[[[1,"            "],[8,[39,11],[[16,0,[52,[30,0,["lockupUrl"]],"targeted-link__target"]]],[["@value","@clampProfile","@isInteractive"],[[28,[37,12],[[30,0,["title"]]],null],[30,7],[30,8]]],null],[1,"\\n"]],[]],[[[1,"            "],[10,0],[15,0,[29,[[52,[30,0,["lockupUrl"]],"targeted-link__target"]]]],[12],[1,[30,0,["title"]]],[13],[1,"\\n"]],[]]],[1,"        "],[13],[1,"\\n"]],[]],[[[1,"        "],[10,"br"],[12],[13],[1,"\\n"]],[]]],[1,"\\n"],[41,[30,0,["subtitle"]],[[[1,"        "],[8,[39,11],[[24,0,"we-lockup__subtitle"]],[["@value"],[[30,0,["subtitle"]]]],null],[1,"\\n"]],[]],null],[41,[30,0,["details"]],[[[1,"        "],[10,0],[14,0,"truncate-single-line we-lockup__details"],[12],[1,[30,0,["details"]]],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["&attrs","@lockupEyebrow","@model","@overlayStyles","@rank","@eyebrow","@clampProfile","@isInteractive"],false,["html-tag","if","or","we-video-thumbnail","concat","present","includes","array","we-book-artwork","amp-artwork/wea","t","we-truncate","html-sanitize"]]',moduleName:"web-experience-app/components/we-lockup/index.hbs",isStrictMode:!1}),Q=(v=(0,i.computed)("args.model.{id,kind,playbackUrl}"),g=(0,i.computed)("args.model.{subTitle,title}","args.{rank,isPodcast}"),w=(0,i.computed)("args.model.{kind,pageProgressionDirection}"),O=(0,i.computed)("args.model.{kind,name,videoSubType}","args.title"),P=(0,i.computed)("_softwareAddonPricing","args.{model.primaryGenre.name,showArtistName,subtitle}","lockupKind","releaseYear"),_=(0,i.computed)("_softwareAddonPricing","args.details","args.model.{description,kind}"),j=(0,i.computed)("args.model.{isSubscription,introPricing,priceFormatted}"),k=(0,i.computed)("args.model.{releaseDate,releaseYear}","i18n.locale"),x=(0,i.computed)("args.clampProfile"),T=(0,i.computed)("args.model.kind"),A=(0,i.computed)("args.model.kind"),S=(0,i.computed)("args.model.{kind,lockupKind}"),E=(0,i.computed)("args.model.{kind,url}"),R=(0,i.computed)("args.artworkProfile","isMessagesOnly","shelfProfile.{artwork,large,medium,small}"),M=(0,i.computed)("args.model.kind","isPerson","shelfProfile.fallback"),z=(0,i.computed)("args.artworkClassName","args.model.{deviceFamilies.[],isIOSApp,kind}","isMessagesOnly"),C=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)})(i,e)
var t,r,n,o=U(i)
function i(){var e
if(B(this,i),D(V(e=o.apply(this,arguments)),"i18n",L,V(e)),H(V(e),"eyebrow",null),H(V(e),"model",null),D(V(e),"tagName",I,V(e)),H(V(e),"artworkProfile",null),!e.args.model)return W(e)
var t=(0,a.isBlank)(e.lockupUrl)?"div":"a"
return e.tagName=t,e}return t=i,(r=[{key:"lockupId",get:function(){return"clip"===this.args.model.kind?this.args.model.playbackUrl:this.args.model.id}},{key:"ariaLabel",get:function(){var e=this.i18n,t=this.title,r=this.subtitle,n=this.isExplicit,o=e.t("WEA.Common.SentenceDelimiter"),i=(0,s.sanitizeForAttribute)(t),a=e.t(this.args.isPodcast?"WEA.PodcastPages.Explicit.AX":"WEA.MusicPages.Riaa.Explicit.AX")
return this.args.rank&&(i="".concat(e.t("WEA.Charts.Common.Rank",{rank:this.args.rank})).concat(o," ").concat(i)),r&&(i+="".concat(o," ").concat((0,s.sanitizeForAttribute)(r))),n&&(i+="".concat(o," ").concat(a)),"".concat(i).concat(o)}},{key:"artworkDirection",get:function(){var e=this.args.model,t=void 0===e?{}:e,r=t.kind,n=t.pageProgressionDirection
return"epubBook"===r&&n?n:"ltr"}},{key:"title",get:function(){if("title"in this.args)return this.args.title
var e=this.args.model
return"tvEpisode"!==e.kind?e.name:this.i18n.t("WEA.Common.VideoSubType.".concat(e.videoSubType),{_disableSafeString:!0})}},{key:"subtitle",get:function(){var e,t
if("subtitle"in this.args&&void 0!==this.args.subtitle)return this.args.subtitle
var r=this.args.model
if(this.args.showArtistName)return r.artistName
switch(this.lockupKind){case"AppleTVOnlyApp":case"artist":case"iosSoftware":case"iOSmacOSApp":case"iOStvOSApp":case"iOStvOSmacOSApp":case"iOSwatchOSApp":case"iOStvOSwatchOSApp":case"movie":case"movieBundle":case"desktopApp":return(null===(e=r.primaryGenre)||void 0===e?void 0:e.name)||(null===(t=r.item)||void 0===t?void 0:t.genreDisplayName)
case"softwareAddOn":var n=r.description
return"object"==typeof n&&(0,a.isPresent)(n)&&n.standard?n.standard:"string"==typeof n?n:this._softwareAddonPricing
case"tvEpisode":return r.name
case"musicVideo":return r.musicVideoSubtitle||this.releaseYear
case"appEvent":case"editorialItem":case"role":return r.subtitle
case"album":return r.albumSubtitle||this.releaseYear
case"episodic":case"serial":return r.artistName
default:return this.releaseYear}}},{key:"details",get:function(){if(this.args.details)return this.args.details
var e=this.args.model,t=e.kind,r=e.description
return"softwareAddOn"!==t?"":r?this._softwareAddonPricing:null}},{key:"_softwareAddonPricing",get:function(){var e=this.args.model
if("softwareAddOn"===e.kind){var t=e.priceFormatted
if(e.isSubscription){var r=e.introPricing
if(r)return this.i18n.t("WEA.AppPages.Subscriptions.".concat(r),{price:t})}return t}}},{key:"artwork",get:function(){if(this.args.artwork)return this.args.artwork
var e=this.args.model,t=(0,m.appArtwork)(e)||(0,m.appArtwork)(e.item)
return t||e.artwork}},{key:"releaseYear",get:function(){var e=this.args.model
if(e.releaseYear)return e.releaseYear
var t=e.releaseDate
return t?(0,p.formatDate)(t,this.i18n.locale,p.FORMATS.YEAR):null}},{key:"shouldTruncateTitle",get:function(){return"book-in-shelf"!==this.args.clampProfile}},{key:"canHaveVideoPreview",get:function(){var e=this.args.model.kind
return["musicVideo","tvEpisode"].includes(e)}},{key:"useVideoThumbnail",get:function(){var e=this.args.model.kind
return["musicVideo","tvEpisode","clip"].includes(e)}},{key:"isExplicit",get:function(){return this.args.model.isExplicit||"explicit"===this.args.model.contentRating}},{key:"isPerson",get:function(){return this.isArtist||this.isRole}},{key:"isArtist",get:function(){return"artist"===this.args.model.kind}},{key:"isRole",get:function(){return"role"===this.args.model.kind}},{key:"isMessagesOnly",get:function(){return(0,b.isMessagesOnly)(this.args.model.lockup||this.args.model)}},{key:"lockupKind",get:function(){return this.args.model.lockupKind||this.args.model.kind}},{key:"lockupUrl",get:function(){var e=this.args.model,t=e.kind,r=e.url
return r&&"softwareAddOn"!==t?r:null}},{key:"shelfProfile",get:function(){return(0,l.getShelfProfile)([this.lockupKind])}},{key:"useArtworkProfile",get:function(){var e=this.args.artworkProfile
if(e)return e
if(this.isMessagesOnly)return"lockup-imessage-app"
var t=this.shelfProfile
return t.artwork||(0,u.generateDefaultArtworkProfile)(t)}},{key:"fallbackArtworkProfile",get:function(){if(!this.isPerson)return this.shelfProfile.fallback
var e=this.args.model
return e.isAppleMusicArtist?"artist-music":e.name?(0,c.default)(e.name):void 0}},{key:"artworkClassName",get:function(){var e=this.args,t=e.artworkClassName,r=e.model
if(t)return t
var n=r.type,o=r.kind,i="we-artwork--lockup we-artwork--fullwidth"
switch(o||("books"===n?o="epubBook":"audio-books"===n&&(o="book")),o){case"book":i="".concat(i," we-lockup__artwork--book we-book-artwork--audiobook we-artwork--audiobook")
break
case"epubBook":i="".concat(i," we-lockup__artwork--book we-book-artwork--spine we-artwork--ebook")
break
case"role":case"artist":i="".concat(i," we-artwork--round")
break
case"softwareAddOn":i="".concat(i," in-app-purchase-artwork__purchase")
break
case"app":case"mobileSoftwareBundle":i="".concat(i," we-artwork--ios-app-icon")
break
case"AppleTVOnlyApp":case"iOSmacOSApp":case"iosSoftware":case"iOStvOSApp":case"iOStvOSmacOSApp":case"iOSwatchOSApp":case"desktopApp":var a,l=r.deviceFamilies||(null===(a=r.item)||void 0===a?void 0:a.deviceFamilies)
i=(0,f.isMacOnly)(l)?"".concat(i," we-artwork--not-round we-artwork--macos-app-icon"):(0,f.isAppleTVOnly)(l)?"".concat(i," we-artwork--tvos-app-icon"):this.isMessagesOnly?"".concat(i," we-artwork--imessages-app-icon"):"".concat(i," we-artwork--ios-app-icon")}return i}}])&&N(t.prototype,r),n&&N(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),L=G(C.prototype,"i18n",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G(C.prototype,"lockupId",[v],Object.getOwnPropertyDescriptor(C.prototype,"lockupId"),C.prototype),I=G(C.prototype,"tagName",[d.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G(C.prototype,"ariaLabel",[g],Object.getOwnPropertyDescriptor(C.prototype,"ariaLabel"),C.prototype),G(C.prototype,"artworkDirection",[w],Object.getOwnPropertyDescriptor(C.prototype,"artworkDirection"),C.prototype),G(C.prototype,"title",[O],Object.getOwnPropertyDescriptor(C.prototype,"title"),C.prototype),G(C.prototype,"subtitle",[P],Object.getOwnPropertyDescriptor(C.prototype,"subtitle"),C.prototype),G(C.prototype,"details",[_],Object.getOwnPropertyDescriptor(C.prototype,"details"),C.prototype),G(C.prototype,"_softwareAddonPricing",[j],Object.getOwnPropertyDescriptor(C.prototype,"_softwareAddonPricing"),C.prototype),G(C.prototype,"releaseYear",[k],Object.getOwnPropertyDescriptor(C.prototype,"releaseYear"),C.prototype),G(C.prototype,"shouldTruncateTitle",[x],Object.getOwnPropertyDescriptor(C.prototype,"shouldTruncateTitle"),C.prototype),G(C.prototype,"canHaveVideoPreview",[T],Object.getOwnPropertyDescriptor(C.prototype,"canHaveVideoPreview"),C.prototype),G(C.prototype,"useVideoThumbnail",[A],Object.getOwnPropertyDescriptor(C.prototype,"useVideoThumbnail"),C.prototype),G(C.prototype,"lockupKind",[S],Object.getOwnPropertyDescriptor(C.prototype,"lockupKind"),C.prototype),G(C.prototype,"lockupUrl",[E],Object.getOwnPropertyDescriptor(C.prototype,"lockupUrl"),C.prototype),G(C.prototype,"useArtworkProfile",[R],Object.getOwnPropertyDescriptor(C.prototype,"useArtworkProfile"),C.prototype),G(C.prototype,"fallbackArtworkProfile",[M],Object.getOwnPropertyDescriptor(C.prototype,"fallbackArtworkProfile"),C.prototype),G(C.prototype,"artworkClassName",[z],Object.getOwnPropertyDescriptor(C.prototype,"artworkClassName"),C.prototype),C)
e.default=Q,(0,t.setComponentTemplate)(q,Q)})),define("web-experience-app/components/we-media-trigger",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,n,o,i){var a,l,u,c
function s(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(0,r.createTemplateFactory)({id:"oqmdDcl6",block:'[[[11,"button"],[24,4,"button"],[17,1],[4,[38,0],["click",[30,0,["mediaClickHandler"]]],null],[12],[1,"\\n  "],[18,2,null],[1,"\\n"],[13],[1,"\\n"]],["&attrs","&default"],false,["on","yield"]]',moduleName:"web-experience-app/components/we-media-trigger.hbs",isStrictMode:!1}),O=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)})(y,e)
var t,r,n,o,i,a=m(y)
function y(){var e
f(this,y)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return p(h(e=a.call.apply(a,[this].concat(r))),"mediaPlayer",l,h(e)),p(h(e),"metrics",u,h(e)),p(h(e),"videoPlayer",c,h(e)),e}return t=y,(r=[{key:"mediaClickHandler",value:(o=regeneratorRuntime.mark((function e(t){var r,n
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),e.next=4,this.args.media
case 4:return r=e.sent,e.next=7,this.args.queue
case 7:n=e.sent,"audio"===r.attributes.mediaKind&&(this.mediaPlayer.togglePlayback(n,r,this.args.isPlayableQueue),this.metrics.recordEvent("click",{actionType:"play",actionDetails:"trackSelection",targetType:"button",targetId:r.id}))
case 9:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){s(i,r,n,a,l,"next",e)}function l(e){s(i,r,n,a,l,"throw",e)}a(void 0)}))},function(e){return i.apply(this,arguments)})}])&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),y}(n.default),l=g(a.prototype,"mediaPlayer",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=g(a.prototype,"metrics",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=g(a.prototype,"videoPlayer",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g(a.prototype,"mediaClickHandler",[i.action],Object.getOwnPropertyDescriptor(a.prototype,"mediaClickHandler"),a.prototype),a)
e.default=O,(0,t.setComponentTemplate)(w,O)})),define("web-experience-app/components/we-modal",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/string","@ember/object/internals","@ember/runloop","@ember/service","@glimmer/tracking"],(function(e,t,r,n,o,i,a,l,u,c){var s,p,f,d
function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return m(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function y(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=_(e)
if(t){var o=_(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return O(this,r)}}function O(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var k=(0,r.createTemplateFactory)({id:"IO6hO+bp",block:'[[[11,0],[17,1],[4,[38,0],[[30,0,["didUpdateArgs"]],[30,2]],null],[4,[38,1],[[30,0,["didUpdateArgs"]],false],null],[12],[1,"\\n"],[41,[28,[37,3],[[30,3],[28,[37,4],[[28,[37,5],null,null]],null]],null],[[[1,"    "],[11,"button"],[24,0,"we-modal__show link section__nav__see-all-link"],[16,1,[29,[[30,0,["triggerId"]]]]],[16,"data-metrics-click",[28,[37,6],["openModal"],[["modalTarget"],[[30,0,["modalTarget"]]]]]],[24,4,"button"],[4,[38,7],["click",[30,0,["openModal"]]],null],[12],[1,[30,3]],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["isOpen"]],[[[40,[[[1,"      "],[11,0],[16,0,[29,["we-modal we-modal--",[30,0,["modalType"]]," we-modal--open"]]],[24,"role","dialog"],[24,"aria-hidden","false"],[16,"aria-labelledby",[29,[[30,0,["triggerId"]]]]],[24,"tabindex","0"],[17,1],[12],[1,"\\n        "],[10,0],[15,0,[29,["we-modal__content large-10 medium-12 ",[30,4]]]],[15,1,[29,[[30,0,["contentId"]]]]],[14,"role","document"],[14,"tabindex","0"],[12],[1,"\\n          "],[10,0],[14,0,"we-modal__content__wrapper"],[12],[1,"\\n            "],[18,5,[[28,[37,11],null,[["isOpen"],[true]]]]],[1,"\\n          "],[13],[1,"\\n\\n          "],[11,"button"],[24,0,"we-modal__close"],[16,"data-metrics-click",[28,[37,6],["closeModal"],[["modalTarget"],[[30,0,["modalTarget"]]]]]],[16,"aria-label",[29,[[28,[37,12],["WEA.Common.Close"],null]]]],[24,4,"button"],[4,[38,7],["click",[30,0,["closeModal"]]],null],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[11,"button"],[24,0,"we-modal__close--overlay"],[24,"tabindex","-1"],[16,"data-metrics-click",[28,[37,6],["closeModal"],[["modalTarget"],[[30,0,["modalTarget"]]]]]],[16,"aria-label",[29,[[28,[37,12],["WEA.Common.Close"],null]]]],[24,4,"button"],[4,[38,7],["click",[30,0,["closeModal"]]],null],[12],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],"%cursor:0%",[28,[37,9],[[30,0,["modalElementTarget"]]],null]]],[]],null],[13],[1,"\\n"]],["&attrs","@isOpen","@triggerText","@modalContentClass","&default"],false,["did-update","will-destroy","if","and","not","is-ssr","metrics-data","on","in-element","-in-el-null","yield","hash","t"]]',moduleName:"web-experience-app/components/we-modal.hbs",isStrictMode:!1}),x=(s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)})(u,e)
var t,r,n,o=w(u)
function u(){var e
return h(this,u),y(P(e=o.apply(this,arguments)),"fastboot",p,P(e)),y(P(e),"containerId",f,P(e)),y(P(e),"_isOpen",d,P(e)),e.containerId=(0,a.guidFor)(P(e)),e}return t=u,(r=[{key:"isOpen",get:function(){var e
return null!==(e=this.args.isOpen)&&void 0!==e?e:this._isOpen}},{key:"modalElementTarget",get:function(){return this.fastboot.isFastBoot?null:document.querySelector("#modal-container")}},{key:"modalType",get:function(){return this.args.modalType||"page-overlay"}},{key:"modalTarget",get:function(){var e=this.args.metricsTarget,t=e?(0,i.classify)(e.toString()):""
return"".concat("Modal").concat(t)}},{key:"contentId",get:function(){return"modal-content-".concat(this.containerId)}},{key:"triggerId",get:function(){return this.args.triggerId||"modal-trigger-".concat(this.containerId)}},{key:"closeModal",value:function(){var e,t
this.updateModalVisibility(!1),null===(e=(t=this.args).onModalClose)||void 0===e||e.call(t)}},{key:"openModal",value:function(){var e,t
this.updateModalVisibility(!0),null===(e=(t=this.args).onModalOpen)||void 0===e||e.call(t)}},{key:"didUpdateArgs",value:function(e,t){var r=b(t,1)[0]
this.updateModalVisibility(r)}},{key:"updateModalVisibility",value:function(e){var t="has-modal--".concat(this.modalType)
this._isOpen=e
var r=e?this.contentId:this.triggerId
e?document.body.classList.add(t):document.body.classList.contains(t)&&document.body.classList.remove(t),(0,l.scheduleOnce)("afterRender",this,this.setFocus,r)}},{key:"setFocus",value:function(e){var t=document.getElementById(e)
null==t||t.focus()}}])&&v(t.prototype,r),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.default),p=j(s.prototype,"fastboot",[u.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=j(s.prototype,"containerId",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=j(s.prototype,"_isOpen",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),j(s.prototype,"closeModal",[o.action],Object.getOwnPropertyDescriptor(s.prototype,"closeModal"),s.prototype),j(s.prototype,"openModal",[o.action],Object.getOwnPropertyDescriptor(s.prototype,"openModal"),s.prototype),j(s.prototype,"didUpdateArgs",[o.action],Object.getOwnPropertyDescriptor(s.prototype,"didUpdateArgs"),s.prototype),j(s.prototype,"setFocus",[o.action],Object.getOwnPropertyDescriptor(s.prototype,"setFocus"),s.prototype),s)
e.default=x,(0,t.setComponentTemplate)(k,x)})),define("web-experience-app/components/we-rating-badge",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,o){var i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(0,r.createTemplateFactory)({id:"alfSWygd",block:'[[[41,[28,[37,1],[[28,[37,2],[[30,0,["ratingDisplayName"]]],null],"string"],null],[[[1,"  "],[1,[28,[35,2],[[30,0,["ratingDisplayName"]]],[["class","aria-label"],[[28,[37,3],[[30,1]," badge-asset--",[30,0,["ratingDisplayName"]]],null],[30,0,["ariaLabelText"]]]]]],[1,"\\n"]],[]],[[[1,"  "],[10,1],[14,0,"badge"],[15,"aria-label",[30,0,["ariaLabelText"]]],[12],[1,[30,2]],[13],[1,"\\n"]],[]]]],["@svgClass","@ratingName"],false,["if","get","svg-jar","concat"]]',moduleName:"web-experience-app/components/we-rating-badge.hbs",isStrictMode:!1}),P=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(i,e)
var t,r,n,o=p(i)
function i(){var e
u(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=o.call.apply(o,[this].concat(r))),"globalElements",a,d(e)),e}return t=i,(r=[{key:"ratingDisplayName",get:function(){var e=this.args.ratingName.toLowerCase(),t=this.globalElements.storefront||"US"
return"".concat(t.toLowerCase(),"-").concat(e)}},{key:"ariaLabelText",get:function(){var e=this.args.ariaLabel
if(e)return e.replace("-"," ")}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),m=i.prototype,y="globalElements",h=[o.inject],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),a=w,i)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-screenshot-viewer",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/string"],(function(e,t,r,n,o,i){var a,l
function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b,m,y,h,v,g,w=(0,r.createTemplateFactory)({id:"BpzSQLwh",block:'[[[10,0],[14,0,"we-screenshot-viewer"],[12],[1,"\\n  "],[10,0],[14,0,"we-screenshot-viewer__screenshots"],[12],[1,"\\n    "],[10,"ul"],[14,0,"l-row l-row--peek we-screenshot-viewer__screenshots-list"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,1,["images"]]],null]],null],null,[[[41,[28,[37,3],[[30,2]],null],[[[1,"          "],[10,"li"],[15,0,[29,[[30,1,["profiles","portrait","columnClassNames"]],[52,[30,3]," we-screenshot-viewer__screenshot--labelled",""]]]],[12],[1,"\\n            "],[8,[39,4],[[16,0,[28,[37,5],[[30,0,["artworkClasses"]]," we-artwork--screenshot-orientation-portrait"],null]]],[["@artwork","@profile","@overrideBgColor"],[[30,2],[30,1,["profiles","portrait","artworkProfile"]],[30,1,["overrideBgColor"]]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]],[[[1,"          "],[10,"li"],[15,0,[29,[[30,1,["profiles","landscape","columnClassNames"]],[52,[30,3]," we-screenshot-viewer__screenshot--labelled",""]]]],[12],[1,"\\n            "],[8,[39,4],[[16,0,[28,[37,5],[[30,0,["artworkClasses"]]," we-artwork--screenshot-orientation-landscape"],null]]],[["@artwork","@profile","@overrideBgColor"],[[30,2],[30,1,["profiles","landscape","artworkProfile"]],[30,1,["overrideBgColor"]]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]]]],[2]],null],[1,"    "],[13],[1,"\\n"],[41,[30,3],[[[1,"      "],[10,2],[14,0,"we-screenshot-viewer__screenshots__label"],[12],[1,[28,[35,6],[[30,1,["title"]]],null]],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@screenshotGroup","image","@showLabel"],false,["each","-track-array","if","is-portrait","amp-artwork/wea","concat","t"]]',moduleName:"web-experience-app/components/we-screenshot-viewer.hbs",isStrictMode:!1}),O=(a=(0,o.computed)("args.screenshotGroup.{platform,platform.version}"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(a,e)
var t,r,n,o=p(a)
function a(){return u(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"artworkClasses",get:function(){var e=this.args.screenshotGroup,t=(0,i.dasherize)(e.platform),r=(e.version?(0,i.dasherize)(e.version):t).replace("+","plus")
return"we-artwork--fullwidth we-artwork--screenshot-platform-".concat(t," we-artwork--screenshot-version-").concat(r)}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),b=l.prototype,m="artworkClasses",y=[a],h=Object.getOwnPropertyDescriptor(l.prototype,"artworkClasses"),v=l.prototype,g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=y.slice().reverse().reduce((function(e,t){return t(b,m,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(b,m,g),g=null),l)
e.default=O,(0,t.setComponentTemplate)(w,O)})),define("web-experience-app/components/we-see-all",["exports","@ember/component","@ember/template-factory","@ember/service","@ember/object","@glimmer/component","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a){var l,u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"DEPk/7St",block:'[[[41,[30,0,["shouldShow"]],[[[1,"   "],[8,[39,1],[[24,"rel","nofollow"],[24,0,"link section__nav__see-all-link"],[16,"data-metrics-click",[52,[30,0,["metricsLocation"]],[28,[37,2],["seeAll"],[["sectionName"],[[28,[37,3],[[30,0,["metricsLocation"]]],null]]]]]],[24,"data-we-link-to-exclude",""],[17,1]],[["@query"],[[28,[37,4],null,[["seeAll"],[[28,[37,5],[[28,[37,6],[[30,2],""],null]],null]]]]]],[["default"],[[[[1,"\\n     "],[1,[28,[35,7],["WEA.Common.SeeAll.Button"],null]],[1,"\\n   "]],[]]]]],[1,"\\n"]],[]],null]],["&attrs","@sectionType"],false,["if","link-to","metrics-data","capitalize","hash","dasherize","or","t"]]',moduleName:"web-experience-app/components/we-see-all.hbs",isStrictMode:!1}),w=(l=(0,o.computed)("responsive.viewport","args.{nextLink,itemCount,small,medium,large}"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(i,e)
var t,r,n,o=b(i)
function i(){var e
p(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=o.call.apply(o,[this].concat(r))),"responsive",c,y(e)),e}return t=i,(r=[{key:"metricsLocation",get:function(){return this.args.metricsLocation||this.args.sectionType}},{key:"shouldShow",get:function(){if((0,a.isSSR)())return!1
var e=this.args,t=e.nextLink,r=e.itemCount,n=this.responsive.viewport||"small",o=this.args[n]
return t?r>=o:r>o}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(i.default),c=v(u.prototype,"responsive",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(u.prototype,"shouldShow",[l],Object.getOwnPropertyDescriptor(u.prototype,"shouldShow"),u.prototype),u)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/we-share",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service","@ember/runloop","web-experience-app/config/timeouts","@ember/utils","@glimmer/tracking","@ember/object/internals"],(function(e,t,r,n,o,i,a,l,u,c,s){var p,f,d,b,m,y,h,v,g,w,O,P,_,j,k
function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return T(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function A(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function S(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=I(e)
if(t){var o=I(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return C(this,r)}}function C(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var N=(0,r.createTemplateFactory)({id:"+n1O1s3Z",block:'[[[11,0],[16,0,[29,["we-share ",[30,0,["additionalClasses"]]]]],[17,1],[4,[38,0],[[30,0,["handleInsert"]]],null],[4,[38,1],[[30,0,["handleDestroy"]]],null],[4,[38,2],["click",[30,0,["onClick"]]],null],[4,[38,2],["keyup",[30,0,["onKeyUp"]]],null],[4,[38,2],["mouseleave",[30,0,["onMouseLeave"]]],null],[12],[1,"\\n  "],[11,"button"],[24,0,"we-share__trigger icon icon-sharrow"],[16,"aria-controls",[52,[30,0,["isOpened"]],[28,[37,4],["we-share__menu-content--",[30,0,["elementId"]]],null]]],[16,"aria-label",[28,[37,5],["WEA.Common.Share.OpenMenu.AX"],null]],[16,"aria-expanded",[52,[30,0,["isOpened"]],"true","false"]],[24,"aria-haspopup","menu"],[16,"disabled",[52,[30,0,["emittedMsg"]],"disabled"]],[24,4,"button"],[4,[38,2],["click",[30,0,["toggleShareMenu"]]],null],[12],[1,"\\n  "],[13],[1,"\\n\\n"],[41,[28,[37,6],[[30,0,["isOpened"]],[30,0,["emittedMsg"]]],null],[[[1,"    "],[10,0],[14,0,"we-share__menu-content"],[15,1,[29,["we-share__menu-content--",[30,0,["elementId"]]]]],[14,"role","menu"],[12],[1,"\\n"],[41,[30,0,["showCloseIcon"]],[[[1,"        "],[11,"button"],[24,0,"we-share__close icon icon-legacy-close"],[16,"aria-controls",[29,["we-share__menu-content--",[30,0,["elementId"]]]]],[16,"aria-label",[28,[37,5],["WEA.Common.Share.CloseMenu.AX"],null]],[24,4,"button"],[4,[38,2],["click",[30,0,["toggleShareMenu"]]],null],[12],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[41,[30,0,["emittedMsg"]],[[[1,"        "],[10,2],[14,0,"we-share__message"],[12],[1,"\\n          "],[10,1],[14,0,"we-share__message-text"],[12],[1,[52,[30,0,["hasErrored"]],[30,0,["emittedMsg"]],[28,[37,5],[[30,0,["emittedMsg"]]],null]]],[13],[1,"\\n        "],[13],[1,"\\n"]],[]],[[[1,"        "],[10,"ul"],[14,0,"we-share__list"],[12],[1,"\\n"],[41,[30,2],[[[1,"            "],[10,"li"],[14,0,"we-share__list-item"],[12],[1,"\\n              "],[8,[39,7],[[24,0,"we-share__list-button we-share__list-button--copylink icon icon-embed-copylink"],[16,"aria-label",[28,[37,5],["WEA.Common.Share.Embed.AX"],[["contentType","mediaTitle","name"],[[30,3],[30,4,["name"]],[30,5]]]]],[16,"data-metrics-click",[52,[30,6],[28,[37,8],[[30,6]],[["shareType"],["Embed"]]]]]],[["@clipboardText","@success","@error"],[[30,0,["embedURL"]],[28,[37,9],[[30,0,["onCopyIconClick"]],[30,0,["EMBED_COPIED_MSG"]],"success"],null],[28,[37,9],[[30,0,["onCopyIconClick"]],[30,0,["embedURL"]],"error"],null]]],null],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["isChinese"]],[[[1,"            "],[10,"li"],[14,0,"we-share__list-item"],[12],[1,"\\n              "],[11,"button"],[24,0,"we-share__list-button we-share__list-button--weibo icon icon-embed-weibo"],[16,"aria-label",[29,[[28,[37,5],["WEA.Common.Share.Social.AX"],[["contentType","mediaTitle","name","network"],[[30,3],[30,4,["name"]],[30,5],"weibo"]]]]]],[16,"data-metrics-click",[52,[30,6],[28,[37,8],[[30,6]],[["shareType"],["Weibo"]]]]],[24,4,"button"],[4,[38,2],["click",[30,0,["shareWeibo"]]],null],[12],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],[[[1,"            "],[10,"li"],[14,0,"we-share__list-item"],[12],[1,"\\n              "],[11,"button"],[24,0,"we-share__list-button we-share__list-button--twitter icon icon-embed-twitter"],[16,"aria-label",[29,[[28,[37,5],["WEA.Common.Share.Social.AX"],[["contentType","mediaTitle","name","network"],[[30,3],[30,4,["name"]],[30,5],"Twitter"]]]]]],[16,"data-metrics-click",[52,[30,6],[28,[37,8],[[30,6]],[["shareType"],["Twitter"]]]]],[24,4,"button"],[4,[38,2],["click",[30,0,["shareTwitter"]]],null],[12],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,"li"],[14,0,"we-share__list-item"],[12],[1,"\\n              "],[11,"button"],[24,0,"we-share__list-button we-share__list-button--facebook icon icon-embed-facebook"],[16,"aria-label",[29,[[28,[37,5],["WEA.Common.Share.Social.AX"],[["contentType","mediaTitle","name","network"],[[30,3],[30,4,["name"]],[30,5],"Facebook"]]]]]],[16,"data-metrics-click",[52,[30,6],[28,[37,8],[[30,6]],[["shareType"],["Facebook"]]]]],[24,4,"button"],[4,[38,2],["click",[30,0,["shareFacebook"]]],null],[12],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]]],[1,"\\n          "],[10,"li"],[14,0,"we-share__list-item"],[12],[1,"\\n            "],[8,[39,7],[[24,0,"we-share__list-button we-share__list-button--link icon icon-embed-link"],[16,"aria-label",[28,[37,5],["WEA.Common.Share.Link.AX"],[["contentType","mediaTitle","name"],[[30,3],[30,4,["name"]],[30,5]]]]],[16,"data-metrics-click",[52,[30,6],[28,[37,8],[[30,6]],[["shareType"],["CopyLink"]]]]]],[["@clipboardText","@success","@error"],[[30,0,["shareableURL"]],[28,[37,9],[[30,0,["onCopyIconClick"]],[30,0,["LINK_COPIED_MSG"]],"success"],null],[28,[37,9],[[30,0,["onCopyIconClick"]],[30,0,["shareableURL"]],"error"],null]]],null],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n"]],[]]],[1,"    "],[13],[1,"\\n"]],[]],null],[13]],["&attrs","@isEmbedEnabled","@contentType","@model","@creator","@metricsClickEvent"],false,["did-insert","will-destroy","on","if","concat","t","or","we-copy","metrics-data","fn"]]',moduleName:"web-experience-app/components/we-share.hbs",isStrictMode:!1}),F=(p=(0,o.computed)("args.model.url","appViewState.requestedApp"),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)})(p,e)
var t,r,n,o,i,c=z(p)
function p(){var e
E(this,p)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return S(L(e=c.call.apply(c,[this].concat(r))),"fastboot",d,L(e)),S(L(e),"responsive",b,L(e)),S(L(e),"locale",m,L(e)),S(L(e),"appViewState",y,L(e)),S(L(e),"musickit",h,L(e)),D(L(e),"EMBED_COPIED_MSG","WEA.Common.Share.EmbedCopied"),D(L(e),"LINK_COPIED_MSG","WEA.Common.Share.LinkCopied"),S(L(e),"isOpened",v,L(e)),S(L(e),"isOpening",g,L(e)),S(L(e),"isClosing",w,L(e)),S(L(e),"hasErrored",O,L(e)),D(L(e),"creator",null),S(L(e),"embedURL",P,L(e)),S(L(e),"emittedMsg",_,L(e)),S(L(e),"dialog",j,L(e)),D(L(e),"_showMsgTimer",null),D(L(e),"_hideMsgTimer",null),D(L(e),"_openTimer",null),D(L(e),"_closeTimer",null),S(L(e),"touchAvailable",k,L(e)),e}return t=p,(r=[{key:"additionalClasses",get:function(){var e=[]
return this.isOpened&&e.push("we-share--open"),this.isOpening&&e.push("we-share--opening"),this.isClosing&&e.push("we-share--closing"),this.hasErrored&&e.push("we-share--errored"),this.emittedMsg&&e.push("we-share--message"),this.args.isEmbedEnabled&&e.push("we-share--allows-embed"),e.join(" ")}},{key:"showCloseIcon",get:function(){var e
return null!==(e=this.args.showCloseIcon)&&void 0!==e?e:this.touchAvailable}},{key:"isChinese",get:function(){return"zh-cn"===this.locale.locale}},{key:"shareableURL",get:function(){var e,t=null===(e=this.args.model)||void 0===e?void 0:e.url
if(!t)return""
var r=this.appViewState.requestedApp
return(0,u.isPresent)(r)&&(t=t.indexOf("?")>=0?"".concat(t,"&app=").concat(r):"".concat(t,"?app=").concat(r)),t}},{key:"handleInsert",value:function(e){this.elementId=(0,s.guidFor)(e),window.addEventListener("click",this.clickOutside,!1),this._setupEmbedURL()}},{key:"handleDestroy",value:function(){window.removeEventListener("click",this.clickOutside,!1),this._resetTimers(),(0,a.cancel)(this._hideMsgTimer)}},{key:"onClick",value:function(e){if(this.emittedMsg)return!1
e.stopPropagation()}},{key:"onKeyUp",value:function(e){if(27===e.keyCode&&this.isOpened)return this._startClosing()}},{key:"onMouseLeave",value:function(){if(this.isOpened)return this._startClosing()}},{key:"_startOpening",value:(o=regeneratorRuntime.mark((function e(){var t,r,n,o,i=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isOpened=!0,this.isOpening){e.next=12
break}return this.isOpening=!0,e.next=5,Promise.all([emberAutoImportDynamic("@marcom/ac-feature"),emberAutoImportDynamic("@marcom/ac-social/Dialog")])
case 5:t=e.sent,r=x(t,2),n=r[0],o=r[1].default,this.touchAvailable=n.touchAvailable(),this.dialog=o,this._openTimer=(0,a.later)(this,(function(){i.isOpening=!1}),l.FADE_OUT_MESSAGE_DURATION)
case 12:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=o.apply(e,t)
function a(e){A(i,r,n,a,l,"next",e)}function l(e){A(i,r,n,a,l,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"_startClosing",value:function(){var e=this
this.isClosing||(this.isClosing=!0,this._closeTimer=(0,a.later)(this,(function(){e.isClosing=!1,e.isOpened=!1}),l.FADE_OUT_MESSAGE_DURATION))}},{key:"_setupEmbedURL",value:function(){var e
if(this.args.isEmbedEnabled){var t=null===(e=this.args.model)||void 0===e?void 0:e.url
t&&(this.embedURL=this.musickit.generateMusickitEmbedCode(t))}}},{key:"clickOutside",value:function(e){var t=e.target
this.isDestroyed||this.isDestroying||"sharrow-trigger"===t.id||(this.isOpened=!1,this.hasErrored=!1,this._hideEmittedMsg(),this._resetTimers())}},{key:"_hideEmittedMsg",value:function(){var e=this
this._hideMsgTimer=(0,a.later)(this,(function(){e.emittedMsg=null}),l.FADE_OUT_MESSAGE_DURATION)}},{key:"_resetTimers",value:function(){(0,a.cancel)(this._showMsgTimer),(0,a.cancel)(this._openTimer),(0,a.cancel)(this._closeTimer)}},{key:"toggleShareMenu",value:function(){this.isClosing=!1,this._resetTimers(),this.isOpened?this._startClosing():this._startOpening()}},{key:"onCopyIconClick",value:function(e,t){var r=this
this._resetTimers(),this.isOpened=!1,this.emittedMsg=e,"success"===t?this._showMsgTimer=(0,a.later)(this,(function(){return r._hideEmittedMsg()}),l.EMITTED_MESSAGE_DURATION):this.hasErrored=!0}},{key:"shareTwitter",value:function(){this.dialog.create(this.dialog.TWITTER_TWEET,{url:this.shareableURL})}},{key:"shareFacebook",value:function(){this.dialog.create(this.dialog.FACEBOOK_SHARE,{url:this.shareableURL})}},{key:"shareWeibo",value:function(){var e=this.args.model.name
this.dialog.create(this.dialog.WEIBO_SHARE,{url:this.shareableURL,title:e})}}])&&R(t.prototype,r),n&&R(t,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n.default),d=B(f.prototype,"fastboot",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=B(f.prototype,"responsive",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=B(f.prototype,"locale",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=B(f.prototype,"appViewState",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=B(f.prototype,"musickit",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=B(f.prototype,"isOpened",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=B(f.prototype,"isOpening",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w=B(f.prototype,"isClosing",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),O=B(f.prototype,"hasErrored",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P=B(f.prototype,"embedURL",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=B(f.prototype,"emittedMsg",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=B(f.prototype,"dialog",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=B(f.prototype,"touchAvailable",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),B(f.prototype,"shareableURL",[p],Object.getOwnPropertyDescriptor(f.prototype,"shareableURL"),f.prototype),B(f.prototype,"handleInsert",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"handleInsert"),f.prototype),B(f.prototype,"handleDestroy",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"handleDestroy"),f.prototype),B(f.prototype,"onClick",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"onClick"),f.prototype),B(f.prototype,"onKeyUp",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"onKeyUp"),f.prototype),B(f.prototype,"onMouseLeave",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"onMouseLeave"),f.prototype),B(f.prototype,"clickOutside",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"clickOutside"),f.prototype),B(f.prototype,"toggleShareMenu",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"toggleShareMenu"),f.prototype),B(f.prototype,"onCopyIconClick",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"onCopyIconClick"),f.prototype),B(f.prototype,"shareTwitter",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"shareTwitter"),f.prototype),B(f.prototype,"shareFacebook",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"shareFacebook"),f.prototype),B(f.prototype,"shareWeibo",[o.action],Object.getOwnPropertyDescriptor(f.prototype,"shareWeibo"),f.prototype),f)
e.default=F,(0,t.setComponentTemplate)(N,F)})),define("web-experience-app/components/we-shelf",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,n,o,i){var a,l,u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"RoW8ZFkQ",block:'[[[8,[39,0],null,[["@items","@small","@medium","@large"],[[30,1],[30,0,["small"]],[30,0,["medium"]],[30,0,["large"]]]],[["default"],[[[[1,"\\n"],[41,[48,[30,8]],[[[1,"    "],[18,8,[[30,2],[30,3]]],[1,"\\n"]],[]],[[[1,"    "],[8,[39,4],[[16,0,[30,0,["columnClassNames"]]],[16,"data-metrics-click",[28,[37,5],["navigateShelf"],[["id","url"],[[30,2,["id"]],[30,2,["url"]]]]]],[16,"data-metrics-location",[28,[37,5],["location"],[["sectionType"],[[30,4]]]]]],[["@model","@artworkProfile","@clampProfile","@showArtistName","@subtitle","@isPodcast"],[[30,2],[30,0,["artworkProfile"]],[30,5],[30,6],[52,[30,7],[30,2,["artistName"]]],[30,7]]],null],[1,"\\n"]],[]]]],[2,3]]]]],[1,"\\n"]],["@items","item","index","@metricsLocation","@clampProfile","@showArtistName","@isPodcast","&default"],false,["we-limit-per-viewport","if","has-block","yield","we-lockup","metrics-data"]]',moduleName:"web-experience-app/components/we-shelf.hbs",isStrictMode:!1}),w=(a=(0,i.computed)("responsive.viewport","small","medium","large"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(i,e)
var t,r,n,o=b(i)
function i(){var e
p(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=o.call.apply(o,[this].concat(r))),"mediaPlayer",u,y(e)),s(y(e),"responsive",c,y(e)),e}return t=i,(r=[{key:"small",get:function(){var e,t,r
return null!==(e=null!==(t=this.args.small)&&void 0!==t?t:null===(r=this.args.profile)||void 0===r?void 0:r.small)&&void 0!==e?e:this.args.items.length}},{key:"medium",get:function(){var e,t,r
return null!==(e=null!==(t=this.args.medium)&&void 0!==t?t:null===(r=this.args.profile)||void 0===r?void 0:r.medium)&&void 0!==e?e:this.small}},{key:"large",get:function(){var e,t,r
return null!==(e=null!==(t=this.args.large)&&void 0!==t?t:null===(r=this.args.profile)||void 0===r?void 0:r.large)&&void 0!==e?e:this.medium}},{key:"artworkProfile",get:function(){var e
return this.args.artworkProfile||(null===(e=this.args.profile)||void 0===e?void 0:e.artwork)}},{key:"columnClassNames",get:function(){var e
return this.args.columnClassNames||(null===(e=this.args.profile)||void 0===e?void 0:e.columnClassNames)}},{key:"limit",get:function(){return this[this.responsive.viewport||"small"]}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),u=v(l.prototype,"mediaPlayer",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=v(l.prototype,"responsive",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(l.prototype,"limit",[a],Object.getOwnPropertyDescriptor(l.prototype,"limit"),l.prototype),l)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/we-star-rating",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/debug","@ember/service","web-experience-app/config"],(function(e,t,r,n,o,i,a){var l,u
function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v,g,w,O,P,_,j=(0,r.createTemplateFactory)({id:"Lz2Pu1KF",block:'[[[11,"figure"],[24,0,"we-star-rating"],[16,"aria-label",[30,0,["defaultAriaLabel"]]],[17,1],[12],[1,"\\n  "],[10,1],[14,0,"we-star-rating-stars-outlines"],[12],[1,"\\n    "],[10,1],[15,0,[29,["we-star-rating-stars ",[30,0,["starsClassName"]]]]],[12],[13],[1,"\\n  "],[13],[1,"\\n"],[41,[30,2],[[[1,"    "],[10,"figcaption"],[14,0,"we-rating-count star-rating__count"],[12],[1,[28,[35,1],[[30,3]],null]],[1,[28,[35,2],["WEA.StarRating.Separator"],null]],[1,[28,[35,2],["WEA.Common.Ratings"],[["count"],[[28,[37,3],[[30,2]],null]]]]],[13],[1,"\\n"]],[]],null],[13],[1,"\\n"]],["&attrs","@ratingCount","@value"],false,["if","to-locale-fixed","t","abbr-number"]]',moduleName:"web-experience-app/components/we-star-rating.hbs",isStrictMode:!1}),k=(l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(i,e)
var t,r,n,o=d(i)
function i(){var e
s(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=o.call.apply(o,[this].concat(r))),"i18n",u,m(e)),h(m(e),"maxValue",a.default.maxRating),e}return t=i,(r=[{key:"defaultAriaLabel",get:function(){return this.i18n.t("WEA.Common.AverageRating",{rating:this.args.value,ratingTotal:this.maxValue})}},{key:"roundedValue",get:function(){var e=parseFloat(this.args.value,10),t=this.maxValue,r=Math.round(2*e)/2
return r<0?r=0:r>t&&(r=t),r}},{key:"starsClassName",get:function(){var e="".concat(this.roundedValue).replace(".","_")
return"we-star-rating-stars-".concat(e)}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),v=l.prototype,g="i18n",w=[i.inject],O={configurable:!0,enumerable:!0,writable:!0,initializer:null},_={},Object.keys(O).forEach((function(e){_[e]=O[e]})),_.enumerable=!!_.enumerable,_.configurable=!!_.configurable,("value"in _||_.initializer)&&(_.writable=!0),_=w.slice().reverse().reduce((function(e,t){return t(v,g,e)||e}),_),P&&void 0!==_.initializer&&(_.value=_.initializer?_.initializer.call(P):void 0,_.initializer=void 0),void 0===_.initializer&&(Object.defineProperty(v,g,_),_=null),u=_,l)
e.default=k,(0,t.setComponentTemplate)(j,k)})),define("web-experience-app/components/we-tabs",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@glimmer/tracking"],(function(e,t,r,n,o,i){var a,l
function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=(0,r.createTemplateFactory)({id:"wkbXBaD0",block:'[[[10,0],[14,0,"we-tabs"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[41,[30,4],[[[1,"      "],[11,3],[24,"data-we-link-to-exclude",""],[16,"aria-label",[30,2,["ariaLabel"]]],[16,6,[30,2,["link"]]],[16,0,[29,["we-tabs__tab ",[52,[28,[37,3],[[30,3],[30,0,["activeTabIndex"]]],null]," is-active"]]]],[4,[38,4],["click",[28,[37,5],[[30,0,["onClick"]],[30,2],[30,3]],null]],null],[12],[1,"\\n        "],[1,[30,2,["label"]]],[1,"\\n      "],[13],[1,"\\n"]],[]],[[[1,"      "],[11,"button"],[16,"aria-label",[30,2,["ariaLabel"]]],[16,0,[29,["we-tabs__tab ",[52,[28,[37,3],[[30,3],[30,0,["activeTabIndex"]]],null]," is-active"]]]],[24,4,"button"],[4,[38,4],["click",[28,[37,5],[[30,0,["onClick"]],[30,2],[30,3]],null]],null],[12],[1,"\\n        "],[1,[30,2,["label"]]],[1,"\\n      "],[13],[1,"\\n"]],[]]]],[2,3]],null],[13]],["@tabs","tab","index","@pageTransition"],false,["each","-track-array","if","eq","on","fn"]]',moduleName:"web-experience-app/components/we-tabs.hbs",isStrictMode:!1}),v=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(i,e)
var t,r,n,o=f(i)
function i(){var e
c(this,i),u(b(e=o.apply(this,arguments)),"activeTabIndex",l,b(e))
var t=e.args.tabs.findIndex((function(e){return!0===e.isActive}))
return e.activeTabIndex=-1===t?0:t,e}return t=i,(r=[{key:"onClick",value:function(e,t){var r,n
null===(r=(n=this.args).onTabClick)||void 0===r||r.call(n,e,t),this.activeTabIndex=t}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),l=y(a.prototype,"activeTabIndex",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y(a.prototype,"onClick",[o.action],Object.getOwnPropertyDescriptor(a.prototype,"onClick"),a.prototype),a)
e.default=v,(0,t.setComponentTemplate)(h,v)})),define("web-experience-app/components/we-truncate-list",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service","@ember/debug","web-experience-app/config","@glimmer/tracking","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a,l,u,c){var s,p,f,d
function b(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=O(e)
if(t){var o=O(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return g(this,r)}}function g(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var _=(0,r.createTemplateFactory)({id:"gStj3fsG",block:'[[[10,0],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,0,["visibleItems"]]],null]],null],null,[[[1,"    "],[18,2,[[30,1]]],[1,"\\n"]],[1]],null],[41,[30,0,["showMoreButton"]],[[[1,"    "],[11,"button"],[24,0,"we-truncate__button we-truncate__button--top-offset link"],[24,"aria-expanded","false"],[24,4,"button"],[4,[38,4],["click",[30,0,["showMore"]]],null],[12],[1,"\\n      "],[1,[28,[35,5],["WEA.Common.More"],null]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13],[1,"\\n"]],["item","&default"],false,["each","-track-array","yield","if","on","t"]]',moduleName:"web-experience-app/components/we-truncate-list.hbs",isStrictMode:!1}),j=l.default.clampProfiles,k=(s=(0,o.computed)("clampConfig","responsive.viewport"),p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)})(i,e)
var t,r,n,o=v(i)
function i(){var e
m(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return b(w(e=o.call.apply(o,[this].concat(r))),"responsive",f,w(e)),b(w(e),"isExpanded",d,w(e)),e}return t=i,(r=[{key:"showMoreButton",get:function(){return!this.isExpanded&&this.args.items.length>this.visibleItems.length}},{key:"clampConfig",get:function(){var e=j[this.args.clampProfile]
return e}},{key:"lines",get:function(){var e=this.responsive.viewport||"small",t=this.clampConfig[e]
return t?t.lines:null}},{key:"visibleItems",get:function(){return this.isExpanded||(0,c.isSSR)()?this.args.items:this.args.items.slice(0,this.lines)}},{key:"showMore",value:function(){this.isExpanded=!0}}])&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),f=P(p.prototype,"responsive",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=P(p.prototype,"isExpanded",[u.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P(p.prototype,"lines",[s],Object.getOwnPropertyDescriptor(p.prototype,"lines"),p.prototype),P(p.prototype,"showMore",[o.action],Object.getOwnPropertyDescriptor(p.prototype,"showMore"),p.prototype),p)
e.default=k,(0,t.setComponentTemplate)(_,k)})),define("web-experience-app/components/we-truncate/clamp-base",["exports","@glimmer/component","@ember/service","@ember/object","@ember/runloop"],(function(e,t,r,n,o){var i,a,l,u
function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(b,e)
var t,r,n,i=d(b)
function b(){var e
s(this,b)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=i.call.apply(i,[this].concat(r))),"fastboot",a,m(e)),c(m(e),"responsive",l,m(e)),c(m(e),"router",u,m(e)),h(m(e),"element",void 0),e}return t=b,(r=[{key:"_clamp",value:function(){var e,t
if(!(this.fastboot.isFastBoot||this.isDestroyed||this.isDestroying)){var r=this.args.configLines
if(r&&this.element){var n=!1
this._shouldClamp()&&(n=this.clamp(r)),null===(e=(t=this.args).didTruncate)||void 0===e||e.call(t,n)}}}},{key:"_shouldClamp",value:function(){return!this.args.configMaxLines||this.clamp(this.args.configMaxLines)}},{key:"_valueUpdateHandler",value:function(){(0,o.scheduleOnce)("afterRender",this,this._clamp)}},{key:"resetOnResize",value:function(){this.args.isInteractive||(this.element.innerHTML="object"==typeof this.originalText?this.originalText.string:this.originalText),(0,o.scheduleOnce)("afterRender",this,this._clamp)}},{key:"handleInsert",value:function(e){this.element=e,this._clamp(),this.router.on("routeDidChange",this,this._valueUpdateHandler),this.responsive.on("didChange",this.resetOnResize)}},{key:"handleDestroy",value:function(){this.router.off("routeDidChange",this,this._valueUpdateHandler),this.responsive.off("didChange",this.resetOnResize)}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),b}(t.default),a=v(i.prototype,"fastboot",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=v(i.prototype,"responsive",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=v(i.prototype,"router",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(i.prototype,"resetOnResize",[n.action],Object.getOwnPropertyDescriptor(i.prototype,"resetOnResize"),i.prototype),v(i.prototype,"handleInsert",[n.action],Object.getOwnPropertyDescriptor(i.prototype,"handleInsert"),i.prototype),v(i.prototype,"handleDestroy",[n.action],Object.getOwnPropertyDescriptor(i.prototype,"handleDestroy"),i.prototype),i)
e.default=g})),define("web-experience-app/components/we-truncate/clamp-height",["exports","@ember/component","@ember/template-factory","web-experience-app/components/we-truncate/clamp-base","web-experience-app/utils/truncate-text","@ember/service"],(function(e,t,r,n,o,i){var a,l
function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y=(0,r.createTemplateFactory)({id:"q1H9VdqD",block:'[[[11,0],[24,"data-clamp",""],[24,0,"we-clamp"],[17,1],[4,[38,0],[[30,0,["handleInsert"]]],null],[4,[38,1],[[30,0,["handleDestroy"]]],null],[12],[1,"\\n  "],[8,[39,2],null,[["@value"],[[28,[37,3],[[30,2]],null]]],null],[1,"\\n"],[13],[1,"\\n"]],["&attrs","@originalText"],false,["did-insert","will-destroy","bidi-text","html-safe"]]',moduleName:"web-experience-app/components/we-truncate/clamp-height.hbs",isStrictMode:!1})
var h,v,g,w,O,P,_=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(a,e)
var t,r,n,i=f(a)
function a(){var e
c(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=i.call.apply(i,[this].concat(r))),"locale",l,b(e)),e}return t=a,(r=[{key:"clamp",value:function(e){var t=this.element,r=(0,o.getMaxHeight)(t,e),n=0,i=document.documentElement,a=t.getBoundingClientRect()
if(Array.prototype.forEach.call(t.childNodes,(function(e){e.offsetHeight&&(n+=e.offsetHeight),e.getBoundingClientRect&&a.y+r>e.getBoundingClientRect().y&&(i=e)})),n>r){var l=(0,o.getLineHeight)(t),u=(0,o.getFontSize)(t)*function(e){switch(e){case"ja-jp":return 10.4
default:return 8.2}}(this.locale.locale)/13,c=this.args.maskOffsetText.length,s="rtl"===i.getAttribute("dir")
t.setAttribute("isMoreRTL",s)
var p=s?90:270,f="\n        linear-gradient(\n          0deg,\n          rgba(0,0,0,0) 0,\n          rgba(0,0,0,0) ".concat(l,"px,\n          rgba(0,0,0,1) ").concat(l,"px\n        ),\n        linear-gradient(\n          ").concat(p,"deg,\n          rgba(0,0,0,0) 0,\n          rgba(0,0,0,0) ").concat(c*u,"px,\n          rgba(0,0,0,1) ").concat(c*u+2*l,"px\n        )")
return this.element.style.height="".concat(r,"px"),this.element.style.mask=f,this.element.style.webkitMask=f,!0}return this.element.style.height=null,this.element.style.mask=null,this.element.style.webkitMask=null,!1}},{key:"originalText",get:function(){return this.args.originalText}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),h=a.prototype,v="locale",g=[i.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),l=P,a)
e.default=_,(0,t.setComponentTemplate)(y,_)})),define("web-experience-app/components/we-truncate/clamp-slice",["exports","@ember/component","@ember/template-factory","web-experience-app/components/we-truncate/clamp-base","@ember/object","web-experience-app/utils/sanitize","@amp/ember-ui-bidi-text/utils/amp-bidi","@ember/template"],(function(e,t,r,n,o,i,a,l){var u
function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=f(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h,v,g,w,O,P,_=(0,r.createTemplateFactory)({id:"3t676cEz",block:'[[[11,0],[24,0,"we-clamp we-clamp--visual"],[24,"data-clamp",""],[16,5,[30,0,["styles"]]],[17,1],[4,[38,0],[[30,0,["handleInsert"]]],null],[4,[38,1],[[30,0,["handleDestroy"]]],null],[12],[13],[1,"\\n"]],["&attrs"],false,["did-insert","will-destroy"]]',moduleName:"web-experience-app/components/we-truncate/clamp-slice.hbs",isStrictMode:!1}),j=(u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(u,e)
var t,r,n,o=b(u)
function u(){return c(this,u),o.apply(this,arguments)}return t=u,(r=[{key:"originalText",get:function(){var e,t,r,n=this.args.originalText,o=void 0===n?"":n
return null!==(e=null!==(t=null===(r=o.toString)||void 0===r?void 0:r.call(o))&&void 0!==t?t:o)&&void 0!==e?e:""}},{key:"clamp",value:function(){var e=this.element,t=this.originalText,r=(0,a.isRTLParagraph)(t)?"rtl":"ltr"
return e.dir=r,e.innerHTML=(0,i.sanitizeForAttribute)(t),!0}},{key:"styles",get:function(){var e=this.args.configLines
return e?(0,l.htmlSafe)("--clamp-lines: ".concat(e)):""}},{key:"handleInsert",value:function(e){e.innerHTML=this.originalText,p(y(u.prototype),"handleInsert",this).call(this,e)}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.default),h=u.prototype,v="handleInsert",g=[o.action],w=Object.getOwnPropertyDescriptor(u.prototype,"handleInsert"),O=u.prototype,P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),u)
e.default=j,(0,t.setComponentTemplate)(_,j)})),define("web-experience-app/components/we-truncate/clamp",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,n,o,i){var a,l,u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"fF542Hy5",block:'[[[41,[28,[37,1],null,null],[[[44,[[50,"bidi-text",0,null,[["value"],[[30,1]]]]],[[[1,"    "],[18,3,[[28,[37,5],null,[["height","slice"],[[30,2],[30,2]]]]]],[1,"\\n"]],[2]]]],[]],[[[1,"  "],[18,3,[[28,[37,5],null,[["height","slice"],[[50,"we-truncate/clamp-height",0,null,[["originalText","configLines","configMaxLines"],[[30,1],[30,0,["clampConfig","lines"]],[30,0,["clampConfig","maxLines"]]]]],[50,"we-truncate/clamp-slice",0,null,[["originalText","configLines","configMaxLines"],[[30,1],[30,0,["clampConfig","lines"]],[30,0,["clampConfig","maxLines"]]]]]]]]]],[1,"\\n"]],[]]]],["@originalText","bidi","&default"],false,["if","is-ssr","let","component","yield","hash"]]',moduleName:"web-experience-app/components/we-truncate/clamp.hbs",isStrictMode:!1}),w=(a=(0,i.computed)("args.clampConfig.small","fastboot.isFastBoot","responsive.viewport"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(i,e)
var t,r,n,o=b(i)
function i(){var e
p(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=o.call.apply(o,[this].concat(r))),"fastboot",u,y(e)),s(y(e),"responsive",c,y(e)),e}return t=i,(r=[{key:"clampConfig",get:function(){return this.fastboot.isFastBoot?this.args.clampConfig.small:this.args.clampConfig[this.responsive.viewport]}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),u=v(l.prototype,"fastboot",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=v(l.prototype,"responsive",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(l.prototype,"clampConfig",[a],Object.getOwnPropertyDescriptor(l.prototype,"clampConfig"),l.prototype),l)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/we-truncate/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","web-experience-app/config","@ember/service","@ember/object","@amp/ember-ui-bidi-text/utils/amp-bidi","@glimmer/tracking"],(function(e,t,r,n,o,i,a,l,u){var c,s,p,f,d
function b(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=v(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=_(e)
if(t){var o=_(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return O(this,r)}}function O(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var k=(0,r.createTemplateFactory)({id:"ubYnO61o",block:'[[[8,[39,0],[[16,0,[29,["we-truncate",[52,[30,0,["isSingleLine"]]," we-truncate--single-line"],[52,[30,0,["isMultiLine"]]," we-truncate--multi-line"],[52,[30,1]," we-truncate--interactive"]," ",[52,[30,0,["showFullText"]]," we-truncate--full"],[52,[30,0,["showMoreButton"]]," we-truncate--truncated"]]]],[16,"dir",[30,0,["dir"]]],[16,"aria-label",[30,0,["ariaLabel"]]],[17,2]],[["@tagName"],[[30,3]]],[["default"],[[[[1,"\\n"],[41,[30,0,["doClamp"]],[[[1,"    "],[8,[39,2],null,[["@originalText","@clampConfig"],[[30,4],[30,0,["clampConfig"]]]],[["default"],[[[[1,"\\n\\n"],[41,[30,1],[[[1,"        "],[8,[30,5,["height"]],[[16,0,[30,6]]],[["@didTruncate","@isInteractive","@maskOffsetText"],[[30,0,["didTruncate"]],[30,1],[28,[37,3],["WEA.Common.More"],[["_disableSafeString"],[true]]]]],null],[1,"\\n"]],[]],[[[1,"        "],[8,[30,5,["slice"]],[[16,0,[30,6]]],[["@didTruncate"],[[30,0,["didTruncate"]]]],null],[1,"\\n"]],[]]],[1,"    "]],[5]]]]],[1,"\\n\\n"],[41,[30,0,["showMoreButton"]],[[[1,"      "],[11,"button"],[24,"aria-hidden","true"],[24,"tabindex","-1"],[24,0,"link"],[24,"data-more-button",""],[16,"data-metrics-click",[30,7]],[24,4,"button"],[4,[38,4],["click",[30,0,["onShowMore"]]],null],[4,[38,5],[[30,0,["addClassForDirection"]]],null],[12],[1,"\\n        "],[1,[28,[35,3],["WEA.Common.More"],null]],[1,"\\n      "],[13],[1,"\\n"]],[]],null]],[]],[[[41,[30,0,["isSingleLine"]],[[[1,"    "],[1,[30,4]],[1,"\\n"]],[]],[[[1,"    "],[8,[39,6],null,[["@value"],[[28,[37,7],[[30,4]],null]]],null],[1,"\\n  "]],[]]]],[]]]],[]]]]],[1,"\\n"]],["@isInteractive","&attrs","@tagName","@value","clamp","@clampClassNames","@dataMetricsClick"],false,["html-tag","if","we-truncate/clamp","t","on","did-insert","bidi-text","html-safe"]]',moduleName:"web-experience-app/components/we-truncate/index.hbs",isStrictMode:!1}),x=o.default.clampProfiles,T=(c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)})(i,e)
var t,r,n,o=w(i)
function i(){var e
return m(this,i),b(P(e=o.apply(this,arguments)),"router",s,P(e)),b(P(e),"isClamped",p,P(e)),b(P(e),"moreShown",f,P(e)),b(P(e),"showFullText",d,P(e)),e.router.on("routeDidChange",e._valueUpdateHandler),e}return t=i,(r=[{key:"dir",get:function(){var e=this.args.value
return this.isSingleLine&&e?(0,l.isRTLParagraph)(e.toString())?"rtl":"ltr":""}},{key:"addClassForDirection",value:function(e){var t=e.parentElement.querySelector("[data-clamp]"),r=!!t&&"true"===t.getAttribute("isMoreRTL"),n="we-truncate__button"
"rtl"===document.documentElement.getAttribute("dir")!==r&&(n="we-truncate__button--direction-reversed"),e.classList.add(n)}},{key:"doClamp",get:function(){return this.isMultiLine&&!this.showFullText&&!this.moreShown}},{key:"isMultiLine",get:function(){return!!this.args.clampProfile}},{key:"isSingleLine",get:function(){return!this.args.isInteractive&&!this.isMultiLine}},{key:"showMoreButton",get:function(){return this.args.isInteractive&&!this.showFullText&&this.isClamped}},{key:"clampConfig",get:function(){return x[this.args.clampProfile]}},{key:"_valueUpdateHandler",value:function(){this.showFullText=!1,this.moreShown=!1}},{key:"onShowMore",value:function(){this.args.onShowMore?this.args.onShowMore():(this.showFullText=!0,this.moreShown=!0)}},{key:"didTruncate",value:function(e){this.isClamped=e}},{key:"willDestroy",value:function(){h(_(i.prototype),"willDestroy",this).apply(this,arguments),this.router.off("routeDidChange",this._valueUpdateHandler)}}])&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),s=j(c.prototype,"router",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=j(c.prototype,"isClamped",[u.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=j(c.prototype,"moreShown",[u.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=j(c.prototype,"showFullText",[u.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),j(c.prototype,"addClassForDirection",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"addClassForDirection"),c.prototype),j(c.prototype,"_valueUpdateHandler",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"_valueUpdateHandler"),c.prototype),j(c.prototype,"onShowMore",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"onShowMore"),c.prototype),j(c.prototype,"didTruncate",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"didTruncate"),c.prototype),c)
e.default=T,(0,t.setComponentTemplate)(k,T)})),define("web-experience-app/components/we-truncate/modal",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/object/internals","@glimmer/tracking"],(function(e,t,r,n,o,i,a){var l,u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"bxecD/Sl",block:'[[[11,0],[16,1,[30,0,["triggerId"]]],[17,1],[12],[1,"\\n  "],[8,[39,0],null,[["@isOpen","@onModalClose","@triggerId","@metricsTarget","@modalContentClass"],[[30,0,["showModal"]],[30,0,["onModalClose"]],[30,0,["triggerId"]],[30,2],[30,3]]],[["default"],[[[[1,"\\n    "],[18,4,[[28,[37,2],null,[["isTruncated"],[false]]]]],[1,"\\n  "]],[]]]]],[1,"\\n\\n  "],[18,4,[[28,[37,2],null,[["onShowMore","isTruncated"],[[30,0,["onShowMore"]],true]]]]],[1,"\\n"],[13],[1,"\\n"]],["&attrs","@metricsTarget","@modalContentClass","&default"],false,["we-modal","yield","hash"]]',moduleName:"web-experience-app/components/we-truncate/modal.hbs",isStrictMode:!1}),w=(l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(a,e)
var t,r,n,o=b(a)
function a(){var e
return p(this,a),s(y(e=o.apply(this,arguments)),"showModal",u,y(e)),s(y(e),"triggerId",c,y(e)),e.triggerId=(0,i.guidFor)(y(e)),e}return t=a,(r=[{key:"onShowMore",value:function(){this.showModal=!0}},{key:"onModalClose",value:function(){this.showModal=!1}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),u=v(l.prototype,"showModal",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=v(l.prototype,"triggerId",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(l.prototype,"onShowMore",[o.action],Object.getOwnPropertyDescriptor(l.prototype,"onShowMore"),l.prototype),v(l.prototype,"onModalClose",[o.action],Object.getOwnPropertyDescriptor(l.prototype,"onModalClose"),l.prototype),l)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/we-video-thumbnail",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service"],(function(e,t,r,n,o,i){var a,l,u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(0,r.createTemplateFactory)({id:"w+55wS4U",block:'[[[11,0],[16,0,[29,["we-video-thumbnail ",[52,[30,1,["url"]],"has-preview"]," ",[52,[30,0,["isPlaying"]],"is-playing"]]]],[17,2],[12],[1,"\\n  "],[8,[39,1],[[16,0,[28,[37,2],["we-video-thumbnail__artwork we-artwork--fullwidth ",[30,3]],null]]],[["@artwork","@fallbackProfile","@profile"],[[30,4],[30,5],[30,6]]],null],[1,"\\n\\n"],[41,[30,1,["url"]],[[[1,"    "],[10,0],[15,0,[29,["we-video-thumbnail__control",[28,[37,2],[" ",[30,0,["controlClassName"]]],null]]]],[12],[1,"\\n      "],[8,[39,3],[[16,"aria-label",[30,0,["controlAriaLabel"]]]],[["@metricsData","@controlClasses","@media"],[[28,[37,4],["preview"],[["id"],[[30,1,["id"]]]]],[29,["we-video-thumbnail__control__icon ",[52,[51,[30,7]],"we-video-thumbnail__control__icon--no-text"]]],[30,1]]],[["default"],[[[[1,"\\n"],[41,[30,7],[[[1,"          "],[10,1],[14,0,"we-video-thumbnail__control__text"],[12],[1,[28,[35,6],["WEA.Common.Preview"],null]],[13],[1,"\\n"]],[]],null],[1,"      "]],[]]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13],[1,"\\n"]],["@media","&attrs","@artworkClassName","@artwork","@fallbackProfile","@profile","@hasPreviewLabel"],false,["if","amp-artwork/wea","concat","we-video-trigger","metrics-data","unless","t"]]',moduleName:"web-experience-app/components/we-video-thumbnail.hbs",isStrictMode:!1}),w=(a=(0,o.computed)("args.media.meta.title"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(i,e)
var t,r,n,o=b(i)
function i(){var e
p(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=o.call.apply(o,[this].concat(r))),"mediaPlayer",u,y(e)),s(y(e),"i18n",c,y(e)),e}return t=i,(r=[{key:"controlAriaLabel",get:function(){var e,t,r=null===(e=this.args.media)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.title
return r?this.i18n.t("WEA.Common.Preview.VideoName",{videoName:r}):this.i18n.t("WEA.Common.TogglePlay")}},{key:"isPlaying",get:function(){var e,t=this.mediaPlayer
return!!t.movieIsPlaying&&t.nowPlayingItem.url===(null===(e=this.args.media)||void 0===e?void 0:e.url)}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),u=v(l.prototype,"mediaPlayer",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=v(l.prototype,"i18n",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(l.prototype,"controlAriaLabel",[a],Object.getOwnPropertyDescriptor(l.prototype,"controlAriaLabel"),l.prototype),l)
e.default=w,(0,t.setComponentTemplate)(g,w)})),define("web-experience-app/components/we-video-trigger",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/runloop","@ember/object"],(function(e,t,r,n,o,i,a){var l,u,c
function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(0,r.createTemplateFactory)({id:"PzCkEEGS",block:'[[[11,"button"],[24,4,"button"],[17,1],[4,[38,0],[[30,0,["setHref"]]],null],[4,[38,1],[[30,0,["setHref"]],[30,2,["url"]]],null],[4,[38,2],["click",[30,0,["recordEvent"]]],null],[12],[1,"\\n  "],[10,1],[15,0,[30,3]],[12],[1,"\\n    "],[18,4,null],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["&attrs","@media","@controlClasses","&default"],false,["did-insert","did-update","on","yield"]]',moduleName:"web-experience-app/components/we-video-trigger.hbs",isStrictMode:!1}),O=(l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(a,e)
var t,r,n,o=b(a)
function a(){var e
p(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return s(y(e=o.call.apply(o,[this].concat(r))),"metrics",u,y(e)),s(y(e),"videoPlayer",c,y(e)),v(y(e),"href",null),e}return t=a,(r=[{key:"recordEvent",value:function(e){e.stopPropagation()
var t=this.args.metricsData
t&&this.metrics.recordEvent("click",JSON.parse(t))}},{key:"setHref",value:function(e){(0,i.scheduleOnce)("render",this,this._setHref,e)}},{key:"_setHref",value:function(e){var t=this.args.media
e&&t&&(e.href=t.url,e.dataset.acFilmsHref=t.url,this.videoPlayer.registerVideo(t,e))}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),u=g(l.prototype,"metrics",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=g(l.prototype,"videoPlayer",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g(l.prototype,"recordEvent",[a.action],Object.getOwnPropertyDescriptor(l.prototype,"recordEvent"),l.prototype),g(l.prototype,"setHref",[a.action],Object.getOwnPropertyDescriptor(l.prototype,"setHref"),l.prototype),l)
e.default=O,(0,t.setComponentTemplate)(w,O)})),define("web-experience-app/components/we-web-to-native-cta/app-store",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"Sf1OqIiV",block:'[[[8,[39,0],[[16,"data-metrics-click",[28,[37,1],["webToNativeAppStoreCTA"],null]],[16,"aria-label",[28,[37,2],["WEA.AppPages.CTA.AppStore.AX"],null]]],[["@url","@platformPredicates","@queryParams"],[[30,1],"couldHaveAppStore",[28,[37,3],null,[["mt"],["8"]]]]],[["default"],[[[[1,"\\n  "],[1,[28,[35,2],["WEA.AppPages.CTA.AppStore.App"],null]],[1," "],[10,1],[14,0,"we-button__app-text"],[12],[1,[28,[35,2],["WEA.AppPages.CTA.AppStore.Action"],null]],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["@url"],false,["we-web-to-native-cta","metrics-data","t","hash"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/app-store.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-web-to-native-cta/apple-books",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"zymgchY8",block:'[[[8,[39,0],[[16,"data-metrics-click",[28,[37,1],["webToNativeAppleBooksCTA"],null]],[16,"aria-label",[28,[37,2],["WEA.BookPages.CTA.AppleBooks.AX"],null]],[17,1]],[["@url","@queryParams","@platformPredicates"],[[30,2],[28,[37,3],null,[["mt"],[[52,[30,3],"3","11"]]]],"couldHaveBookStore"]],[["default"],[[[[1,"\\n"],[41,[48,[30,4]],[[[1,"    "],[18,4,null],[1,"\\n"]],[]],[[[1,"    "],[1,[28,[35,2],["WEA.BookPages.CTA.AppleBooks.Action"],null]],[1," "],[10,1],[14,0,"we-button__app-text"],[12],[1,[28,[35,2],["WEA.BookPages.CTA.AppleBooks.App"],null]],[13],[1,"\\n"]],[]]]],[]]]]],[1,"\\n"]],["&attrs","@url","@isAudioBook","&default"],false,["we-web-to-native-cta","metrics-data","t","hash","if","has-block","yield"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/apple-books.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-web-to-native-cta/apple-music",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"MCtjIPDK",block:'[[[8,[39,0],[[16,"data-metrics-click",[28,[37,1],["webToNativeAppleMusicCTA"],null]],[16,"aria-label",[28,[37,2],["WEA.MusicPages.CTA.AM.AX"],null]],[17,1]],[["@url","@platformPredicates"],[[30,2],"canOpenAppleMusic"]],[["default"],[[[[1,"\\n  "],[1,[28,[35,2],[[28,[37,3],[[30,3],"WEA.MusicPages.CTA.AM.Action"],null]],null]],[1," "],[10,1],[14,0,"we-button__app-text"],[12],[1,[28,[35,2],[[28,[37,3],[[30,4],"WEA.MusicPages.CTA.AM.App"],null]],null]],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["&attrs","@url","@locKeyActionText","@locKeyAppName"],false,["we-web-to-native-cta","metrics-data","t","or"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/apple-music.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-web-to-native-cta/apple-podcasts/index",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"Ms9SgN6V",block:'[[[41,[30,1],[[[1,"  "],[8,[39,1],null,[["@url","@locKeyActionText","@subscriptionTextKey"],[[30,2],[30,3],[30,1]]],null],[1,"\\n"]],[]],[[[1,"  "],[10,0],[14,0,"we-button__container"],[12],[1,"\\n    "],[8,[39,2],[[16,"data-metrics-click",[28,[37,3],["webToNativePodcastsCTA"],null]],[16,"aria-label",[28,[37,4],["WEA.PodcastPages.CTA.Podcasts.AX"],null]],[17,4]],[["@app","@url","@platformPredicates"],["podcast",[30,2],[28,[37,5],["couldHaveiTunes","couldHavePodcasts"],null]]],[["default"],[[[[1,"\\n      "],[8,[39,6],null,[["@locKeyActionText"],[[30,3]]],null],[1,"\\n    "]],[]]]]],[1,"\\n\\n"],[41,[30,1],[[[1,"      "],[10,0],[14,0,"we-button__app-subline"],[12],[1,"\\n        "],[1,[28,[35,4],[[30,1]],null]],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n"]],[]]]],["@subscriptionTextKey","@url","@locKeyActionText","&attrs"],false,["if","we-web-to-native-cta/apple-podcasts/with-kb","we-web-to-native-cta","metrics-data","t","array","we-web-to-native-cta/apple-podcasts/text"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/apple-podcasts/index.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-web-to-native-cta/apple-podcasts/text",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"Ptz+a1vN",block:'[[[1,[28,[35,0],[[28,[37,1],[[30,1],"WEA.PodcastPages.CTA.Podcasts.Action"],null]],null]],[1," "],[10,1],[14,0,"we-button__app-text"],[12],[1,[28,[35,0],["WEA.PodcastPages.CTA.Podcasts.App"],null]],[13],[1,"\\n"]],["@locKeyActionText"],false,["t","or"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/apple-podcasts/text.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i}))
define("web-experience-app/components/we-web-to-native-cta/apple-podcasts/with-kb",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,o){var i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(0,r.createTemplateFactory)({id:"cmdeMb4j",block:'[[[10,0],[14,0,"we-button__container"],[12],[1,"\\n"],[41,[30,0,["canOpen"]],[[[1,"    "],[8,[39,1],[[16,"data-metrics-click",[28,[37,2],["webToNativePodcastsCTA"],null]],[16,"aria-label",[28,[37,3],["WEA.PodcastPages.CTA.Podcasts.AX"],null]],[17,1]],[["@app","@url","@platformPredicates"],["podcast",[30,2],true]],[["default"],[[[[1,"\\n      "],[8,[39,4],null,[["@locKeyActionText"],[[30,3]]],null],[1,"\\n    "]],[]]]]],[1,"\\n"]],[]],[[[1,"    "],[11,3],[16,"data-metrics-click",[28,[37,2],["webToNativePodcastsChannelKB"],null]],[24,0,"we-button we-button--outlined we-button--external icon icon-external we-button-fade-in"],[17,1],[24,6,"https://support.apple.com/kb/ht212178"],[12],[1,"\\n      "],[8,[39,4],null,[["@locKeyActionText"],[[30,3]]],null],[1,"\\n    "],[13],[1,"\\n"]],[]]],[1,"\\n"],[41,[30,4],[[[1,"    "],[10,0],[14,0,"we-button__app-subline"],[12],[1,"\\n      "],[1,[28,[35,3],[[30,4]],null]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13],[1,"\\n"]],["&attrs","@url","@locKeyActionText","@subscriptionTextKey"],false,["if","we-web-to-native-cta","metrics-data","t","we-web-to-native-cta/apple-podcasts/text"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/apple-podcasts/with-kb.hbs",isStrictMode:!1}),P=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(i,e)
var t,r,n,o=p(i)
function i(){var e
u(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=o.call.apply(o,[this].concat(r))),"platform",a,d(e)),e}return t=i,(r=[{key:"canOpen",get:function(){return this.platform.browser.ismacOS||this.platform.browser.isiOS}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),m=i.prototype,y="platform",h=[o.inject],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),a=w,i)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-web-to-native-cta/failed/apple-music",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","web-experience-app/utils/launch-client"],(function(e,t,r,n,o,i){var a,l,u
function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(0,r.createTemplateFactory)({id:"KqLJScZh",block:'[[[41,[30,0,["platform","nativeLaunchFailed"]],[[[1,"  "],[10,0],[12],[1,"\\n    "],[8,[39,1],null,null,[["default"],[[[[1,"\\n      "],[10,0],[14,0,"l-content-width we-banner-callout selfclear"],[14,"role","alert"],[12],[1,"\\n        "],[10,"img"],[14,"src","/assets/images/banner-artwork/applemusic_logo.svg"],[14,0,"we-banner-callout__AM-logo"],[14,"alt",""],[14,"role","presentation"],[12],[13],[1,"\\n        "],[10,"h4"],[14,0,"we-banner-callout__headline"],[12],[1,[28,[35,2],["WEA.Error.NativeMissing.Other.AM"],null]],[13],[1,"\\n        "],[10,0],[12],[10,3],[15,6,[52,[30,0,["isAndroid"]],[30,0,["installMusicPlayStoreLink"]],[28,[37,2],["WEA.Error.NativeMissing.Other.LearnMore.link"],null]]],[14,0,"we-banner-callout__more-link more"],[12],[1,[28,[35,2],["WEA.Common.LearnMore"],null]],[13],[13],[1,"\\n      "],[13],[1,"\\n    "]],[]]]]],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","we-web-to-native-cta/failed","t"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/failed/apple-music.hbs",isStrictMode:!1}),g=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(a,e)
var t,r,n,o=d(a)
function a(){var e
s(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=o.call.apply(o,[this].concat(r))),"platform",l,m(e)),c(m(e),"fastboot",u,m(e)),e}return t=a,(r=[{key:"installMusicPlayStoreLink",get:function(){return(0,i.googlePlayStoreLink)()}},{key:"isAndroid",get:function(){return this.platform.browser.isAndroid}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),l=h(a.prototype,"platform",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=h(a.prototype,"fastboot",[o.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)
e.default=g,(0,t.setComponentTemplate)(v,g)})),define("web-experience-app/components/we-web-to-native-cta/failed/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,o){var i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(0,r.createTemplateFactory)({id:"rqUd2Wia",block:'[[[10,0],[12],[1,"\\n"],[41,[30,0,["platform","couldHaveiTunes"]],[[[1,"    "],[10,0],[14,0,"l-content-width we-banner-callout selfclear"],[14,"role","alert"],[12],[1,"\\n      "],[10,"img"],[14,"src","/assets/images/banner-artwork/iTunes_icon@2x-2bebb71080717c1e66aa78730e96c9cd.png"],[14,0,"we-banner-callout__itunes-icon"],[14,"alt",""],[14,"role","presentation"],[12],[13],[1,"\\n      "],[10,"h4"],[14,0,"we-banner-callout__headline we-banner-callout__headline--itunes-image-spacer"],[12],[1,"\\n        "],[1,[28,[35,1],["WEA.Error.NativeMissing.iTunes.Title"],null]],[10,"br"],[12],[13],[1,[28,[35,1],["WEA.Error.NativeMissing.AM.Subtitle"],null]],[1,"\\n      "],[13],[1,"\\n      "],[10,0],[12],[1,"\\n        "],[10,3],[15,6,[28,[37,1],["WEA.Error.NativeMissing.iTunes.Download.link"],null]],[14,0,"we-banner-callout__download-button we-button we-button--compact"],[12],[1,"\\n          "],[1,[28,[35,1],["WEA.Error.NativeMissing.iTunes.Download.text"],null]],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],[[[1,"    "],[18,1,null],[1,"\\n"]],[]]],[13],[1,"\\n"]],["&default"],false,["if","t","yield"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/failed/index.hbs",isStrictMode:!1}),P=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(i,e)
var t,r,n,o=p(i)
function i(){var e
c(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=o.call.apply(o,[this].concat(r))),"platform",a,d(e)),e}return t=i,r&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(n.default),m=i.prototype,y="platform",h=[o.inject],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),a=w,i)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-web-to-native-cta/failed/itunes",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,o){var i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(0,r.createTemplateFactory)({id:"h535431r",block:'[[[41,[30,0,["platform","nativeLaunchFailed"]],[[[1,"  "],[10,0],[12],[1,"\\n    "],[8,[39,1],null,null,[["default"],[[[[1,"\\n      "],[10,0],[14,0,"l-content-width we-banner-callout selfclear"],[14,"role","alert"],[12],[1,"\\n        "],[10,"h4"],[14,0,"we-banner-callout__headline"],[12],[1,[28,[35,2],["WEA.Error.NativeMissing.Other.iTunes"],null]],[13],[1,"\\n        "],[10,0],[12],[10,3],[15,6,[28,[37,2],["WEA.Error.NativeMissing.Other.LearnMore.link"],null]],[14,0,"we-banner-callout__more-link more"],[12],[1,[28,[35,2],["WEA.Common.LearnMore"],null]],[13],[13],[1,"\\n      "],[13],[1,"\\n    "]],[]]]]],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","we-web-to-native-cta/failed","t"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/failed/itunes.hbs",isStrictMode:!1}),P=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(i,e)
var t,r,n,o=p(i)
function i(){var e
c(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=o.call.apply(o,[this].concat(r))),"platform",a,d(e)),e}return t=i,r&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(n.default),m=i.prototype,y="platform",h=[o.inject],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),a=w,i)
e.default=P,(0,t.setComponentTemplate)(O,P)})),define("web-experience-app/components/we-web-to-native-cta/index",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@ember/service"],(function(e,t,r,n,o,i){var a,l
function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=(0,r.createTemplateFactory)({id:"ZhvSWRBI",block:'[[[41,[30,0,["shouldDisplay"]],[[[41,[30,1],[[[1,"    "],[11,3],[24,0,"we-button we-button--outlined we-button--external icon icon-external we-button-fade-in"],[16,6,[30,2]],[17,3],[12],[1,"\\n      "],[18,4,null],[1,"\\n    "],[13],[1,"\\n"]],[]],[[[1,"    "],[11,"button"],[24,4,"button"],[24,0,"we-button we-button--outlined we-button--external icon icon-external we-button-fade-in"],[17,3],[4,[38,2],["click",[30,0,["click"]]],null],[12],[1,"\\n        "],[18,4,null],[1,"\\n    "],[13],[1,"\\n"]],[]]]],[]],null]],["@isLink","@url","&attrs","&default"],false,["if","yield","on"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/index.hbs",isStrictMode:!1}),v=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(i,e)
var t,r,n,o=f(i)
function i(){var e
c(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=o.call.apply(o,[this].concat(r))),"platform",l,b(e)),e}return t=i,(r=[{key:"shouldDisplay",get:function(){var e=this,t=this.args.platformPredicates
return"boolean"==typeof t?t:(Array.isArray(t)||(t=[t].filter(Boolean)),!!t.length&&t.some((function(t){return e.platform[t]})))}},{key:"click",value:function(){var e=this.args,t=e.app,r=e.url,n=e.queryParams
this.platform.launchFromCta(t,r,n)}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default),l=y(a.prototype,"platform",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y(a.prototype,"click",[o.action],Object.getOwnPropertyDescriptor(a.prototype,"click"),a.prototype),a)
e.default=v,(0,t.setComponentTemplate)(h,v)})),define("web-experience-app/components/we-web-to-native-cta/itunes",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"rWS8ndOE",block:'[[[8,[39,0],[[16,"data-metrics-click",[28,[37,1],["webToNativeiTunesCTA"],null]],[16,"aria-label",[28,[37,2],["WEA.MusicPages.CTA.iTunes.AX"],null]],[17,1]],[["@app","@url","@platformPredicates"],["itunes",[30,2],"couldHaveiTunes"]],[["default"],[[[[1,"\\n  "],[1,[28,[35,2],[[28,[37,3],[[30,3],"WEA.MusicPages.CTA.iTunes.Action"],null]],null]],[1," "],[10,1],[14,0,"we-button__app-text"],[12],[1,[28,[35,2],[[28,[37,3],[[30,4],"WEA.MusicPages.CTA.iTunes.App"],null]],null]],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["&attrs","@url","@locKeyActionText","@locKeyAppName"],false,["we-web-to-native-cta","metrics-data","t","or"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/itunes.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-web-to-native-cta/mac-app-store",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,r.createTemplateFactory)({id:"iyCRupio",block:'[[[8,[39,0],[[16,"data-metrics-click",[28,[37,1],["webToNativeMacAppStoreCTA"],null]],[16,"aria-label",[28,[37,2],["WEA.AppPages.CTA.MacAppStore.AX"],null]],[17,1]],[["@url","@queryParams","@platformPredicates","@isLink"],[[30,2],[28,[37,3],null,[["extRefUrl2","mt"],[[28,[37,4],null,null],"12"]]],[28,[37,5],[[30,3],"couldHaveMacAppStore"],null],[30,4]]],[["default"],[[[[1,"\\n  "],[1,[28,[35,2],["WEA.AppPages.CTA.MacAppStore.Action"],null]],[1," "],[10,1],[14,0,"we-button__app-text"],[12],[1,[28,[35,2],["WEA.AppPages.CTA.MacAppStore.App"],null]],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["&attrs","@url","@shouldDisplay","@isLink"],false,["we-web-to-native-cta","metrics-data","t","hash","encoded-referrer","or"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/mac-app-store.hbs",isStrictMode:!1}),i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("web-experience-app/components/we-web-to-native-cta/tv",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","web-experience-app/config"],(function(e,t,r,n,o,i){var a,l
function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,v,g,w,O,P=(0,r.createTemplateFactory)({id:"zWv09Ihj",block:'[[[8,[39,0],[[16,"data-metrics-click",[28,[37,1],["webToNativeAppleTvCTA"],null]],[16,"aria-label",[28,[37,2],["WEA.Common.TV.CTA.AX"],null]]],[["@app","@url","@platformPredicates"],["tv",[30,0,["url"]],"couldHaveTV"]],[["default"],[[[[1,"\\n  "],[1,[28,[35,2],["WEA.ShowPages.CTA.AM.Action"],null]],[1," "],[10,1],[14,0,"we-button__app-text"],[12],[1,[28,[35,2],["WEA.LocalNav.Store.TV"],null]],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],[],false,["we-web-to-native-cta","metrics-data","t"]]',moduleName:"web-experience-app/components/we-web-to-native-cta/tv.hbs",isStrictMode:!1}),_=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(a,e)
var t,r,n,o=f(a)
function a(){var e
c(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=o.call.apply(o,[this].concat(r))),"platform",l,b(e)),e}return t=a,(r=[{key:"url",get:function(){var e=this.platform.browser.isAtLeastMojavePlusOne,t=this.args.showName
return e&&t?"".concat(i.default.tvAppSearchUrl).concat(t):this.args.tvUrl}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.default),y=a.prototype,h="platform",v=[o.inject],g={configurable:!0,enumerable:!0,writable:!0,initializer:null},O={},Object.keys(g).forEach((function(e){O[e]=g[e]})),O.enumerable=!!O.enumerable,O.configurable=!!O.configurable,("value"in O||O.initializer)&&(O.writable=!0),O=v.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),O),w&&void 0!==O.initializer&&(O.value=O.initializer?O.initializer.call(w):void 0,O.initializer=void 0),void 0===O.initializer&&(Object.defineProperty(y,h,O),O=null),l=O,a)
e.default=_,(0,t.setComponentTemplate)(P,_)})),define("web-experience-app/config/adapters",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.storePlatformConfig=e.mzstoreConfig=void 0
e.mzstoreConfig={params:{isWebExpV2:!0,dataOnly:!0}}
e.storePlatformConfig={params:{version:2,caller:"webExp",p:"lockup",useSsl:!0}}})),define("web-experience-app/config/artwork-crop-codes",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={ej:{horizontalCrop:2013,verticalCrop:0}}})),define("web-experience-app/config/artwork-fallbacks",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={song:{isVector:!0,url:"/assets/images/missing-artwork/music-2c72ea75d983d8fc263bcf8f1bcc183b.svg",aspectRatio:1,width:45,height:45},"artist-music":{isVector:!0,url:"/assets/images/missing-artwork/artist-music-2ce946c1cdaea01b7afd378f75242263.svg",aspectRatio:1},"product-hero-story":{isVector:!1,url:"/assets/images/missing-artwork/product-hero-story-cc8568349d01718205100adbfd1b9ebc.png",aspectRatio:626/458,width:626,height:458},"product-app-story":{isVector:!0,url:"/assets/images/missing-artwork/product-app-story-19a56a366c8215f750c204cf7419e912.svg",aspectRatio:1},"product-hero-tv":{isVector:!1,url:"/assets/images/missing-artwork/product-hero-tv-644db0f66832fb3682501578923ccd36.png",aspectRatio:626/352,width:626,height:352},"social-deeplink":{isVector:!1,url:"/assets/images/missing-artwork/social-deeplink-d37562e0c0117f3604f8064933d1f462.png",aspectRatio:2,width:1e3,height:500},"lockup-playlist":{isVector:!0,url:"/assets/images/missing-artwork/music-2c72ea75d983d8fc263bcf8f1bcc183b.svg",aspectRatio:1}}})),define("web-experience-app/config/artwork-profiles",["exports"],(function(e){function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.buildImgOptions=c,e.default=void 0
var n=16/9,o=16/9,i=16/9,a=4/3,l=2/3,u=[146,157,104]
function c(e,r,n){var o=t(e,3),i=o[0],a=o[1],l=o[2]
return{crop:n,large:s(i,r),medium:s(a,r),small:s(l,r)}}function s(e,t){return 0===t?{width:e,height:0}:{width:e,height:e*(1/t)}}var p={"app-event-detail":c([280,280,643],.625,"sr"),"artist-header":c([190,190,135],1,"cc"),"artist-featured-album":c(u,0,"w"),"artist-featured-iTunesBrand":c(u,1,"cc"),"artist-featured-playlist":c(u,1,"cc"),"artist-featured-musicVideo":c(u,o,"sr"),"artist-featured-tvEpisode":c(u,n,"mv"),"artist-featured-movie":c([97,157,104],l),"artist-featured-tvSeason":c(u,1),"artist-featured-radioStation":c(u,1,"sr"),"artist-featured-showBrand":c(u,1),"audio-book":c([146,157,320],0,"w"),"category-for-artwork":{fileType:"png",crop:"sr",large:{width:24,height:24},medium:{width:24,height:24},small:{width:24,height:24}},epubBook:c([146,157,320],0,"w"),"bordered-list":c([45,45,45],1,"cc"),"song-list-row":c([45,45,45],1,"cc"),"song-list-row-music-video":c([80,80,80],o,"sr"),"see-all-song-list":c([48,48,45],1,"cc"),episode:c([196,157,196],n,"mv"),"artist-inline":c([146,157,146],1,"cc"),"lockup-1-3-3":c([313,217,643],0,"w"),"lockup-2-2-3":c([313,336,309],0,"w"),"lockup-2-4-4":c([230,157,300],0,"w"),"lockup-2-4-6":c([146,157,309],0,"w"),"lockup-3-2-3":c([313,336,560],0,"w"),"lockup-3-2-3-story":c([313,336,560],1.5,"fo"),"lockup-3-2-3-event":c([313,336,560],1.6,"sr"),"lockup-3-2-3-mv":c([313,336,560],n,"mv"),"lockup-6-4-6":c([146,157,320],0,"w"),"lockup-imessage-app":c([146,157,320],a,"sr"),"lockup-2-4-6-sr":{crop:"sr",large:{width:146,height:146},medium:{width:157,height:157},small:{width:309,height:200}},"lockup-6-4-6-sr":c([146,157,320],1,"sr"),"lockup-6-4-6-no-crop":c([146,157,320],1),"lockup-6-4-6-no-crop-16-9":c([146,157,250],i),"lockup-6-4-6-sh-16-9":c([146,157,250],o,"sh"),"lockup-6-4-6-no-crop-3-2":c([147,157,350],l),"lockup-6-4-6-no-crop-sr":c([147,157,350],1),"lockup-6-2-3":c([313,336,250],n,"mv"),"lockup-6-3-2":c([147,157,250],0,"w"),"lockup-6-6-4":c([313,336,250],0,"w"),"media-audio-book":c([146,157,320],0,"w"),"product-hero-podcast":c([313,276,268],0,"w"),"product-hero-book":c([313,276,268],0,"w"),"grouping-page-book":c([230,247,268],0,"w"),"product-hero-show":c([313,276,268],0,"w"),"product-hero-show-tv":c([313,278,313],1),"product-hero-tv-season":c([313,276,268],0,"w"),"product-hero-ios-app":c([230,217,246],0,"w"),"product-hero-tvos-app":c([313,336,203],0,"w"),"product-hero-imessage-app":{crop:"sr",large:{width:230,height:172},medium:{width:216,height:161},small:{width:190,height:140}},"product-grid-small-iosPlatform":c([128,88,88],1,"cc"),"product-grid-large-iosPlatform":c([271,191,191],1,"cc"),"product-grid-small-watchPlatform":c([128,88,88],1,"cc"),"product-grid-large-watchPlatform":c([271,191,191],1,"cc"),"product-grid-small-imessage":c([128,88,88],a,"sr"),"product-grid-large-imessage":c([272,192,192],a,"sr"),"product-grid-one-iosPlatform":c([250,160,160],1,"cc"),"product-grid-one-watchPlatform":c([250,160,160],1,"cc"),"product-grid-two-iosPlatform":c([208,130,130],1,"cc"),"product-grid-two-watchPlatform":c([208,130,130],1,"cc"),"product-grid-three-iosPlatform":c([240,168,140],1,"cc"),"product-grid-three-watchPlatform":c([240,168,140],1,"cc"),"product-grid-four-iosPlatform":c([271,178,178],1,"cc"),"product-grid-four-watchPlatform":c([271,178,178],1,"cc"),"product-grid-small-osxPlatform":{fileType:"png",crop:"cc",large:{width:128,height:128},medium:{width:88,height:88},small:{width:88,height:88}},"product-grid-large-osxPlatform":{fileType:"png",crop:"cc",large:{width:271,height:271},medium:{width:191,height:191},small:{width:191,height:191}},"product-grid-one-osxPlatform":{fileType:"png",crop:"cc",large:{width:250,height:250},medium:{width:160,height:160},small:{width:160,height:160}},"product-grid-two-osxPlatform":{fileType:"png",crop:"cc",large:{width:208,height:208},medium:{width:130,height:130},small:{width:130,height:130}},"product-grid-three-osxPlatform":{fileType:"png",crop:"cc",large:{width:240,height:240},medium:{width:168,height:168},small:{width:140,height:140}},"product-grid-four-osxPlatform":{fileType:"png",crop:"cc",large:{width:271,height:271},medium:{width:178,height:178},small:{width:178,height:178}},"product-hero-video":c([647,336,735],n,"mv"),"product-hero-sport-event":c([313,276,735],o,"sh"),"product-story-iap-app":c([96,56,56],1,"cc"),"product-story-iap-purchase":c([262,158,158],1,"cc"),"product-story-card-background":c([Math.round(633*1.6),Math.round(443*1.6),Math.round(483*1.6)],1,"cc"),"product-story-card-icon":c([326,226,226],1,"cc"),"product-story-card":{crop:"fn",large:{width:480,height:633},medium:{width:336,height:443},small:{width:366,height:483}},"product-story-card-iae":{crop:"fn",large:{width:506,height:633},medium:{width:354,height:443},small:{width:386,height:483}},"product-story-card-short":c([480,336,366],i,"fo"),"product-app-story":c([48,48,48],1,"cc"),"product-app-story-imessage":c([48,48,48],a,"sr"),"product-app-placard-large":c([80,60,52],1,"sr"),"product-app-placard-iae":c([80,60,60],1,"sr"),"product-story-app-event":c([480,336,736],1.6,"sr"),"product-story-inlineimage":c([480,336,736],0,"w"),"product-hero-movie":c([230,217,268],0,"w"),"product-hero-movie-tv":c([230,217,268],l),"in-app-purchase-hero-purchase":c([157,157,126],1,"cc"),"in-app-purchase-hero-app":c([54,54,44],1,"cc"),"in-app-purchase-collection-purchase":c([44,44,44],1,"cc"),"in-app-purchase-collection-app":c([14,14,14],1,"cc"),"product-app-supports":c([44,44,44],1,"cc"),uber:{crop:"sr",large:{width:1120,height:280},medium:{width:1120,height:280},small:{width:735,height:166}},"books-brick-compositing":{crop:"ej",large:{width:313,height:0},medium:{width:336,height:0},small:{width:642,height:0}},"podcast-channel-logo":c([216,216,176],1,"sr"),default:c([44,44,44],1,"cc")}
e.default=p})),define("web-experience-app/config/blocks",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={models:{tvApp:{language:{audioTrackFormats:[]}}}}})),define("web-experience-app/config/charts",["exports","web-experience-app/services/app-view-state","web-experience-app/utils/charts"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.VIEW_STATE_CHART_CONFIG=void 0
var n="book",o="audiobook",i={[t.VIEW_STATES.BOOK]:n,[r.VIEW_STATE_AUDIOBOOK]:o,[t.VIEW_STATES.APP]:"app"}
e.VIEW_STATE_CHART_CONFIG=i
var a={[n]:{clampProfile:"book-in-shelf",metricsLocation:"shelfTopBooks",nativeCta:"we-web-to-native-cta/apple-books",sectionHeadlineClass:"section__headline--book",shelfProfile:"epubBook",shelfColumnClassName:"we-lockup--in-book-shelf",showArtistName:!0,titleKey:"WEA.Charts.Books.Title",genreShelfConfig:{large:12,medium:8},pageLimits:{index:6,genre:12,seeAll:40,totalMax:100},nativeLink:"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=@@storefront@@&genreId=@@genre@@&mt=11"},[o]:{clampProfile:"book-in-shelf",metricsLocation:"shelfTopBooks",nativeCta:"we-web-to-native-cta/apple-books",sectionHeadlineClass:"section__headline--book",shelfProfile:"epubBook",shelfColumnClassName:"we-lockup--in-book-shelf",showArtistName:!0,titleKey:"WEA.Charts.AudioBooks.Title",pageLimits:{index:40,genre:40,seeAll:40,totalMax:100},nativeLink:"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=@@storefront@@&genreId=@@genre@@&mt=3"},app:{clampProfile:"app-lockup",metricsLocation:"shelfTopApps",nativeCta:"we-web-to-native-cta/app-store",sectionHeadlineClass:"section__headline--app",shelfProfile:"default",shelfColumnClassName:"we-lockup--shelf-align-top we-lockup--in-app-shelf",showArtistName:!0,titleKey:"WEA.Charts.Apps.Title",genreShelfConfig:{large:12,medium:8},pageLimits:{index:6,genre:12,seeAll:100,totalMax:100},nativeLink:"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=@@storefront@@&genreId=@@genre@@&mt=8",meta:{deviceTypeLanguage:{iphone:"iPhone",ipad:"iPad"},appsLocKey:"WEA.Charts.Apps.AppType.Apps",gamesLocKey:"WEA.Charts.Apps.AppType.Games"}}}
e.default=a})),define("web-experience-app/config/clamp-profiles",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={"book-in-shelf":{large:{lines:2},medium:{lines:2},small:{lines:2}},"book-description":{large:{lines:8},medium:{lines:8},small:{lines:8}},"book-critical-reviews":{large:{lines:4},medium:{lines:4},small:{lines:4}},"book-editorial-notes":{large:{lines:4},medium:{lines:4},small:{lines:4}},"customer-review":{large:{lines:4},medium:{lines:4},small:{lines:4}},"customer-review-with-response":{large:{lines:1},medium:{lines:1},small:{lines:1}},"customer-review-response":{large:{lines:1},medium:{lines:1},small:{lines:1}},"review-rotten-tomatoes":{large:{lines:5},medium:{lines:5},small:{lines:5}},"review-commonsense-media":{large:{lines:7},medium:{lines:7},small:{lines:7}},"review-editor-notes":{large:{lines:7},medium:{lines:7},small:{lines:7}},"review-editor-choice":{large:{lines:6},medium:{lines:6},small:{lines:3}},"movie-name-shelf":{large:{lines:2},medium:{lines:2},small:{lines:2}},"app-bundle-shelf":{large:{lines:2},medium:{lines:2},small:{lines:2}},"product-name":{large:{lines:4},medium:{lines:3},small:{lines:2}},"product-description":{large:{lines:5},medium:{lines:3},small:{lines:3}},"product-description-app":{large:{lines:5},medium:{lines:5},small:{lines:5}},"product-description-movie":{large:{lines:7},medium:{lines:7},small:{lines:3}},"product-description-show":{large:{lines:3},medium:{lines:3},small:{lines:3}},"product-description-tv-season":{large:{lines:7},medium:{lines:7},small:{lines:3}},"product-description-episode":{large:{lines:8},medium:{lines:3},small:{lines:3}},"people-description-inline":{large:{lines:8,maxLines:12},medium:{lines:8,maxLines:12},small:{lines:6,maxLines:10}},"episode-description":{large:{lines:3},medium:{lines:3},small:{lines:3}},"episode-brands":{large:{lines:2},medium:{lines:2},small:{lines:2}},"episode-headline":{large:{lines:1},medium:{lines:1},small:{lines:2}},"software-info":{large:{lines:2},medium:{lines:2},small:{lines:5}},"supports-description":{large:{lines:2},medium:{lines:2},small:{lines:2}},"app-info-iap":{small:{lines:3},medium:{lines:3},large:{lines:3}},"app-whats-new":{small:{lines:5},medium:{lines:5},large:{lines:5}},"app-version-history":{small:{lines:5},medium:{lines:5},large:{lines:5}},"featured-media-title":{small:{lines:3},medium:{lines:3},large:{lines:3}},"podcast-channel-description":{small:{lines:5},medium:{lines:4},large:{lines:4}},"app-lockup":{small:{lines:2},medium:{lines:2},large:{lines:2}}}
e.default=t})),define("web-experience-app/config/domain-modifiers",["exports","web-experience-app/config/environment"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={["development"===t.default.environment?"dev-books.apple.com:4200":"books.apple.com"]:{url:"itunes.apple.com"}}
e.default=r})),define("web-experience-app/config/get-storefront-redirect-url",["exports","web-experience-app/utils/url"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=function(e,r){if("undefined"!=typeof FastBoot)return""
var n=new t.default(window.location.href),o=n.pathname.split("/").filter(Boolean)
o[0]=e
var i=o.join("/"),a=new URLSearchParams(n.search)
return a.delete("l"),r&&a.append("l",r),a.toString().trim().length&&(i+="?".concat(a)),"/".concat(i)}})),define("web-experience-app/config/index",["exports","web-experience-app/config/artwork-fallbacks","web-experience-app/config/artwork-profiles","web-experience-app/config/artwork-crop-codes","web-experience-app/config/blocks","web-experience-app/config/clamp-profiles","web-experience-app/config/metrics","web-experience-app/config/meta","web-experience-app/config/routing","web-experience-app/config/menu-links","web-experience-app/config/environment","web-experience-app/utils/breakpoints","@amp/ember-ui-global-elements/utils/constants","@amp/affiliate-util"],(function(e,t,r,n,o,i,a,l,u,c,s,p,f,d){function b(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v,g={},w=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return
if("string"==typeof e)return h(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,o=function(){}
return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}(d.KNOWN_MARKETING_QUERY_PARAMS)
try{for(w.s();!(v=w.n()).done;){var O=v.value
g[O]=O}}catch(x){w.e(x)}finally{w.f()}var P=m(m({"ign-itscg":"itscg","ign-itsct":"itsct"},g),{mttnact:"mttnact",mttnadvid:"mttnadvid",mttncmpid:"mttncmpid",mttncost:"mttncost",mttncostmdl:"mttncostmdl",mttngadurl:"mttngadurl",mttngd:"mttngd",mttngmo:"mttngmo",mttnresformat:"mttnresformat",mttnsubadgpname:"mttnsubadgpname",mttnsubadgpref:"mttnsubadgpref",mttnsubadname:"mttnsubadname",mttnsubadref:"mttnsubadref",mttnsubcmpname:"mttnsubcmpname",mttnsubcmpref:"mttnsubcmpref",mttnuid:"mttnuid"}),_=m({l:"l"},P),j=["small","medium","large"].map((function(e){var t=s.default.BREAKPOINTS[e],r=t.min
return{mediaQuery:"small"!==e&&r?"(min-width: ".concat(r,"px)"):null,mediaQueryStrict:(0,p.breakpointToMediaQuery)(t,e),name:e}})),k={env:s.default,shoeboxNames:{data:"ember-data-store",mzstoreMeta:"ember-mzstore-meta",globalElements:f.SHOEBOX_KEY,metricsBase:"metrics-base",languageCode:"language-code"},defaultStorefront:"US",defaultPriceCurrency:"USD",popularityThreshold:.7,maxRating:5,videoLoadingPoster:"data:image/gif;base64,R0lGODdhBwAEAPAAAAAAACZFySH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7",videoLocalizationPath:"/global/ac_media_player/scripts/ac_media_languages/",podcastsAppLaunchURL:"podcasts://podcasts.apple.com",podcastsAppPageURL:"https://apps.apple.com/us/app/apple-podcasts/id525463029",appStoreArcadeLaunchUrl:"macappstores://apps.apple.com/arcade",appStoreArcadeSubscribeLaunchUrl:"macappstores://apps.apple.com/arcade/subscribe",appStoreArcadeSeeAllGamesLaunchUrl:"macappstores://apps.apple.com/arcadeSeeAllGames",appStoreArcadeOffersLaunchUrl:"macappstores://apps.apple.com/arcade/offers",iosAppStoreUrl:"https://www.apple.com/ios/app-store/",macAppStoreUrl:"https://www.apple.com/osx/apps/app-store/",tvAppSearchUrl:"https://tv.apple.com/search?q=",appleBooksUrl:"https://www.apple.com/apple-books/",privacyDefinitionsUrl:"https://apps.apple.com/story/id1539235847",privacyLearnMoreUrl:"https://apps.apple.com/story/id1538632801",privacyAppleDeveloperIDs:["284417353","1464590764","314638464","284993479","1351056256"],artworkFallbacks:t.default,artworkProfiles:r.default,artworkCropCodes:n.default,blocks:o.default,booksGiftCardRedemptionUrlBase:"://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage",clampProfiles:i.default,menuLinks:c.default,meta:l.default,routing:u.default,metrics:a.default,viewports:j,pixelDensities:[1,2],hideGlobalElements:["deeplink","not-found"],launchNativeParameters:P,launchQueryParameters:Object.keys(P),applicationQueryParameters:Object.keys(_),htmlSanitizeRegex:new RegExp("&lt;/?(".concat(["b","i","u","br","strong","em"].join("|"),")(?:\\s.*?(?=&gt;)&gt;|&gt;|/&gt;)"),"gi"),systemAppsToFilter:["com.apple.iCloudDriveApp","is.workflow.my.app","com.apple.mobileme.fmf1","com.apple.mobileme.fmip1"]}
e.default=k})),define("web-experience-app/config/menu-links",["exports","web-experience-app/services/app-view-state"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={[t.VIEW_STATES.BOOK]:[{nameKey:"WEA.Charts.LocalNav.Links.TopBooks",routeName:"charts.index"},{nameKey:"WEA.Charts.LocalNav.Links.TopAudiobooks",routeName:"charts.audiobooks.index"}]}
e.default=r})),define("web-experience-app/config/meta",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={og:{type:{album:"music.album",app:"website",event:"website",artist:"profile","artist-music":"music.musician",book:"book",developer:"website",episode:"video.episode",movie:"video.movie","movie-collection":"video.movie",playlist:"music.playlist",podcast:{episode:"product.item",show:"product.group"},profile:"profile",show:"video.tv_show",song:"music.song",story:"website"}},appleStore:{id:{appStore:"375380948",appleTV:"1174078549",books:"364709193",podcasts:"525463029"}}}})),define("web-experience-app/config/metrics",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={clickEvents:{localNavAppleTvCTA:{actionType:"open",actionUrl:"@@url@@",targetType:"button",targetId:"LearnMoreTVApp"},localNavArcadeCTA:{actionType:"open",actionUrl:"@@url@@",targetType:"button",targetId:"LearnMoreArcadeApp"},webToNativeAppleBooksCTA:{actionType:"open",targetType:"button",targetId:"OpenInAppleBooks"},webToNativeAppleMusicCTA:{actionType:"open",targetType:"button",targetId:"OpenInAppleMusic"},webToNativeAppStoreCTA:{actionType:"open",targetType:"button",targetId:"OpenInAppStore"},webToNativeMacAppStoreCTA:{actionType:"open",targetType:"button",targetId:"OpenInMacAppStore"},webToNativeiTunesCTA:{actionType:"open",targetType:"button",targetId:"OpenInItunes"},webToNativePodcastsCTA:{actionType:"open",targetType:"button",targetId:"OpenInPodcasts"},webToNativePodcastsChannelKB:{actionType:"navigate",targetType:"button",targetId:"PodcastsSubscriptionKB"},webToNativeAppleTvCTA:{actionType:"open",targetType:"button",targetId:"OpenInAppleTV"},preview:{actionType:"preview",targetType:"button",targetId:"@@id@@"},previewAll:{actionType:"previewAll",targetType:"button",targetId:"@@id@@"},navigateEpisode:{actionType:"navigate",actionUrl:"@@url@@",targetType:"card",targetId:"@@id@@"},skipBack:{targetType:"button",targetId:"@@id@@",actionType:"skipBack15"},skipAhead:{targetType:"button",targetId:"@@id@@",actionType:"skipAhead30"},playPause:{targetType:"button",targetId:"@@id@@",actionType:"@@action@@"},play:{targetType:"button",targetId:"@@id@@",actionType:"play",actionDetails:"trackSelection"},playAll:{targetType:"button",targetId:"@@id@@",actionType:"play"},shuffle:{targetType:"button",targetId:"@@id@@",actionType:"shuffle"},linkToAppSupport:{actionType:"navigate",targetType:"link",targetId:"LinkToAppSupport"},linkToAppEvent:{actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"@@id@@"},linkToArtist:{actionType:"navigate",targetType:"link",targetId:"LinkToArtist"},linkToCast:{actionDetails:{type:"cast"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToCastCrew"},linkToChannel:{actionDetails:{type:"channel"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"@@id@@"},linkToDeveloper:{actionDetails:{type:"developer"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"@@id@@"},linkToDirector:{actionDetails:{type:"director"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToCastCrew"},linkToGenre:{actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"GenrePage"},linkToGuest:{actionDetails:{type:"guest"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToCastCrew"},linkToHost:{actionDetails:{type:"host"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToCastCrew"},linkToPerformer:{actionDetails:{type:"performer"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToCastCrew"},linkToPodcast:{actionType:"navigate",targetType:"link",targetId:"LinkToPodcast"},linkToPrivacyPolicy:{actionType:"navigate",targetType:"link",targetId:"LinkToPrivacyPolicy"},linkToProducer:{actionDetails:{type:"producer"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToCastCrew"},linkToScreenshotPlatform:{actionType:"change",targetType:"tabItem",targetId:"LinkToScreenshotsPlatform"},linkToScreenwriter:{actionDetails:{type:"screenwriter"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToCastCrew"},linkToStoryApp:{actionDetails:{type:"app"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToStoryApp"},linkToStoryLink:{actionDetails:{type:"story"},actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToStoryLink"},linkToExternalPurchasesLearnMore:{actionType:"navigate",actionUrl:"@@url@@",targetId:"LearnMore",targetType:"link"},linkToUrl:{actionType:"navigate",targetType:"button",targetId:"@@url@@"},navigateShelf:{actionType:"navigate",actionUrl:"@@url@@",targetType:"card",targetId:"@@id@@"},navigateArtistShelf:{actionType:"navigate",targetType:"card",targetId:"@@id@@",actionDetails:{type:"artist"}},openChartsLink:{actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToTopCharts"},seeAll:{actionType:"navigate",targetType:"button",targetId:"SeeAll@@sectionName@@"},seeMoreEpisodes:{actionType:"navigate",targetType:"button",targetId:"SeeMoreEpisodes"},expandMore:{actionType:"more",targetType:"button",targetId:"More"},expandMoreReviews:{actionType:"open",targetType:"button",targetId:"MoreReviews"},expandMoreSynopsis:{actionType:"open",targetType:"button",targetId:"MoreSynopsis"},openModal:{actionType:"open",targetType:"button",targetId:"@@modalTarget@@"},closeModal:{actionType:"close",targetType:"button",targetId:"@@modalTarget@@"},shareBook:{actionType:"share",actionDetails:{actionSubtype:"BookSharrow"},targetType:"button",targetId:"@@shareType@@"},sharePodcast:{actionType:"share",actionDetails:{actionSubtype:"PodcastSharrow"},targetType:"button",targetId:"@@shareType@@"},location:{locationType:"@@sectionType@@"},toggleAppsChartsFilterDropdown:{actionType:"toggle",targetType:"button",targetId:"ToggleAppsFilter"},toggleGamesChartsFilterDropdown:{actionType:"toggle",targetType:"button",targetId:"ToggleGamesFilter"},toggleBooksChartsFilterDropdown:{actionType:"toggle",targetType:"button",targetId:"ToggleBooksFilter"},linkToChartsFilter:{actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToChartsFilter"},linkToPopularGenre:{actionType:"navigate",actionUrl:"@@url@@",targetType:"link",targetId:"LinkToPopularGenre"}}}
e.default=t})),define("web-experience-app/config/routing",["exports","web-experience-app/services/app-view-state"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={books:"books.apple.com",dev:"dev.apple.com",itunes:"itunes.apple.com",podcasts:"podcasts.apple.com",tv:"tv.apple.com"},n={domains:r,behaveAs:r.itunes,inDevelopment:{[r.books]:[],[r.dev]:[],[r.itunes]:[],[r.podcasts]:[],[r.tv]:[]},domainPaths:{[t.VIEW_STATES.BOOK]:["/viewAudiobook"],[t.VIEW_STATES.APP]:["/app/","/app-bundle/","/story/","/developer/"]},notFoundRedirects:{"/today":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=discover",platform:"ios"}},"/apps":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=discover",platform:"ios"}},"/games":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=discover",platform:"ios"}},"/updates":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=updates",platform:"ios"}},"/search":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=search",platform:"ios"},[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/search"}},"/categories":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=categories",platform:"mas"}},"/create":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=create",platform:"mas"}},"/develop":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=develop",platform:"mas"}},"/discover":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=discover",platform:"mas"}},"/play":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=play",platform:"mas"}},"/work":{[t.VIEW_STATES.APP]:{target:"itms-appss://?action=work",platform:"mas"}},"/":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/browse"}},"/browse":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/browse"}},"/browse/categories":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/browse/categories"}},"/browse/top-charts":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/browse/top-charts"}},"/browse/top-charts/episodes":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/browse/top-charts/episodes"}},"/library":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/library"}},"/library/episodes":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/library/episodes"}},"/library/shows":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/library/shows"}},"/listen-now":{[t.VIEW_STATES.PODCASTS]:{target:"podcasts://podcasts.apple.com/listen-now"}},"/for-you":{[t.VIEW_STATES.BOOK]:{target:"itms-bookss://books.apple.com/store"}},"/foryou":{[t.VIEW_STATES.BOOK]:{target:"itms-bookss://books.apple.com/store"}},"/book-store":{[t.VIEW_STATES.BOOK]:{target:"itms-bookss://books.apple.com/store",platformTargets:[{platform:"isiOS12Plus",target:"itms-bookss://books.apple.com/book-store"}]}},"/charts":{[t.VIEW_STATES.BOOK]:{target:"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?genreId=38&mt=11"}}}}
e.default=n})),define("web-experience-app/config/screenshot-profiles",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ORDERED_PLATFORMS=void 0
var t={artworkProfile:"lockup-2-4-4",columnClassNames:"l-column small-2 medium-3 large-3"},r={artworkProfile:"lockup-1-3-3",columnClassNames:"l-column small-4 medium-4 large-4"},n="WEA.AppPages.Screenshots"
e.ORDERED_PLATFORMS=["mac","iphone","ipad","appletv","applewatch","messages"]
var o={iphone:{platform:"iphone",profiles:{portrait:t,landscape:r},singularTitle:"".concat(n,".iphoneScreenshots"),title:"".concat(n,".iphone")},ipad:{platform:"ipad",profiles:{portrait:r,landscape:r},singularTitle:"".concat(n,".ipadScreenshots"),title:"".concat(n,".ipad")},messages:{platform:"messages",profiles:{portrait:t,landscape:r},singularTitle:"".concat(n,".messagesScreenshots"),title:"".concat(n,".messages")},applewatch:{platform:"appleWatch",profiles:{portrait:t},singularTitle:"".concat(n,".appleWatchScreenshots"),title:"".concat(n,".appleWatch"),overrideBgColor:"000000"},appleWatch:{platform:"appleWatch",profiles:{portrait:t},singularTitle:"".concat(n,".appleWatchScreenshots"),title:"".concat(n,".appleWatch"),overrideBgColor:"000000"},appletv:{platform:"appleTV",profiles:{landscape:r},singularTitle:"".concat(n,".appleTVScreenshots"),title:"".concat(n,".appleTV")},appleTV:{platform:"appleTV",profiles:{landscape:r},singularTitle:"".concat(n,".appleTVScreenshots"),title:"".concat(n,".appleTV")},mac:{platform:"mac",profiles:{landscape:r},singularTitle:"".concat(n),title:"".concat(n,".mac")}}
e.default=o})),define("web-experience-app/config/see-all-profiles",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.profileAliases=e.default=void 0
e.default={app:{small:2,medium:4,large:6,clampProfile:"app-lockup",lockupClassNames:"small-valign-top we-lockup--in-app-shelf"},appEvent:{small:1,medium:2,large:3,lockupClassNames:"small-valign-top we-lockup--in-app-event-module"},book:{small:2,medium:4,large:6,artwork:"media-audio-book",clampProfile:"book-in-shelf",lockupClassNames:"small-valign-bottom we-lockup--in-book-shelf"},books:{small:2,medium:4,large:6,artwork:"media-audio-book",clampProfile:"book-in-shelf",lockupClassNames:"small-valign-bottom we-lockup--in-book-shelf"},clip:{small:2,medium:2,large:3},editorialItem:{small:1,medium:2,large:3,artwork:"lockup-3-2-3-story",lockupClassNames:"small-valign-top"},epubBook:{small:2,medium:4,large:6,artwork:"epubBook",clampProfile:"book-in-shelf",lockupClassNames:"small-valign-bottom we-lockup--in-book-shelf"},tvEpisode:{small:2,medium:2,large:3},musicVideo:{small:2,medium:2,large:3},playlist:{small:2,medium:4,large:6,artwork:"lockup-6-4-6-sr",fallback:"lockup-playlist"},"rating-card-small":{small:2,medium:4,large:6},"rating-card":{small:1,medium:2,large:3},default:{small:2,medium:4,large:6}}
e.profileAliases={books:"epubBook",audiobooks:"book","audio-books":"book","editorial-items":"editorialItem"}})),define("web-experience-app/config/shelf-profiles",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"audio-book":{small:6,medium:4,large:6,artwork:"lockup-6-4-6-sr"},artist:{small:6,medium:4,large:6,artwork:"lockup-6-4-6-sr"},artistTopSongs:{small:6,medium:6,large:6},appEvent:{small:3,medium:2,large:3,artwork:"lockup-3-2-3-event"},book:{small:6,medium:4,large:6,artwork:"audio-book"},clip:{small:3,medium:2,large:3,artwork:"lockup-3-2-3-mv",fallback:"product-hero-tv"},default:{small:6,medium:4,large:6},developer:{small:6,medium:4,large:6,artwork:"lockup-6-4-6"},editorialItem:{small:3,medium:2,large:3,artwork:"lockup-3-2-3-story"},epubBook:{small:6,medium:4,large:6,artwork:"epubBook"},"media-audio-book":{small:6,medium:4,large:6,artwork:"media-audio-book"},musicVideo:{small:6,medium:2,large:3},playlist:{small:6,medium:4,large:6,artwork:"lockup-6-4-6-sr",fallback:"lockup-playlist"},podcast:{small:6,medium:4,large:6},rating:{small:4,medium:3,large:4},"rating-card":{small:3,medium:2,large:3},"rating-card-small":{small:6,medium:4,large:6},"rating-without-common-sense-media":{small:3,medium:2,large:3},"related-movie":{small:6,medium:4,large:6,artwork:"lockup-6-4-6-no-crop-3-2",fallback:"product-hero-tv"},"related-show":{small:6,medium:4,large:6,artwork:"lockup-6-4-6-no-crop-sr",fallback:"product-hero-tv"},review:{small:3,medium:2,large:3},role:{small:6,medium:4,large:6,artwork:"lockup-6-4-6-no-crop"},showBonusContent:{small:6,medium:2,large:3},song:{small:9,medium:8,large:9},"tv-season":{small:6,medium:4,large:6,artwork:"lockup-6-4-6-sr"}}})),define("web-experience-app/config/timeouts",["exports","web-experience-app/config/environment"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.VIDEO_NOTIFICATION_EXIT=e.VIDEO_NOTIFICATION_ENTER=e.VIDEO_INIT_TIMEOUT=e.LOADING_MSG_TIMEOUT=e.FADE_OUT_MESSAGE_DURATION=e.EMITTED_MESSAGE_DURATION=void 0
var r="test"===t.default.environment?10:2e3
e.EMITTED_MESSAGE_DURATION=r
var n="test"===t.default.environment?10:200
e.FADE_OUT_MESSAGE_DURATION=n
var o="test"===t.default.environment?10:5e3
e.VIDEO_NOTIFICATION_EXIT=o
var i="test"===t.default.environment?10:2e3
e.VIDEO_NOTIFICATION_ENTER=i
var a="test"===t.default.environment?10:3600
e.LOADING_MSG_TIMEOUT=a
var l="test"===t.default.environment?1:1e3
e.VIDEO_INIT_TIMEOUT=l})),define("web-experience-app/constants/keycode",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Z_KEY=e.TAB_KEY=e.SPACE_KEY=e.ESC_KEY=e.ENTER_KEY=void 0
e.TAB_KEY=9
e.ENTER_KEY=13
e.ESC_KEY=27
e.SPACE_KEY=32
e.Z_KEY=90})),define("web-experience-app/constants/os-version",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.MAC_OS_APP_IDS=void 0
e.MAC_OS_APP_IDS=[1616785793,1576738294,1526878132,1466841314,1398502828,1246284741]})),define("web-experience-app/controllers/application",["exports","@ember/controller","@ember/object","web-experience-app/config","@ember/utils","@ember/service"],(function(e,t,r,n,o,i){var a,l,u,c,s
function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(a=(0,r.computed)("appViewState.currentState"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)})(l,e)
var t,r,i,a=m(l)
function l(){var e
return f(this,l),g(h(e=a.apply(this,arguments)),"queryParams",n.default.applicationQueryParameters),p(h(e),"fastboot",u,h(e)),p(h(e),"globalElements",c,h(e)),p(h(e),"appViewState",s,h(e)),e.fastboot.isFastBoot?y(e):(P(),e)}return t=l,(r=[{key:"viewStateTheme",get:function(){var e=this.appViewState.currentState
return(0,o.isPresent)(e)?"is-".concat(e,"-theme"):void 0}}])&&d(t.prototype,r),i&&d(t,i),Object.defineProperty(t,"prototype",{writable:!1}),l}(t.default),u=w(l.prototype,"fastboot",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=w(l.prototype,"globalElements",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=w(l.prototype,"appViewState",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w(l.prototype,"viewStateTheme",[a],Object.getOwnPropertyDescriptor(l.prototype,"viewStateTheme"),l.prototype),l)
function P(){document.body.classList.remove("no-js"),document.body.classList.add("has-js"),emberAutoImportDynamic("@marcom/ac-feature").then((function(e){var t
document.body.classList.remove("no-touch"),t="touch",e.touchAvailable()?document.body.classList.add("has-".concat(t)):document.body.classList.add("no-".concat(t))}))}e.default=O})),define("web-experience-app/controllers/podcast-episode",["exports","@ember/controller","@glimmer/tracking"],(function(e,t,r){var n,o
function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var o=f(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b,m,y,h,v,g,w=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)})(f,e)
var t,r,n,s=c(f)
function f(){var e
l(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(p(e=s.call.apply(s,[this].concat(r))),"queryParams",[{seeAll:"see-all"}]),d(p(e),"seeAll",null),i(p(e),"headTagsData",o,p(e)),e}return t=f,r&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(t.default),b=n.prototype,m="headTagsData",y=[r.tracked],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=y.slice().reverse().reduce((function(e,t){return t(b,m,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(b,m,g),g=null),o=g,n)
e.default=w}))
define("web-experience-app/controllers/podcast",["exports","@ember/controller","@glimmer/tracking"],(function(e,t,r){var n,o
function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var o=f(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b,m,y,h,v,g,w=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)})(f,e)
var t,r,n,s=c(f)
function f(){var e
l(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(p(e=s.call.apply(s,[this].concat(r))),"queryParams",[{seeAll:"see-all"}]),d(p(e),"seeAll",null),i(p(e),"headTagsData",o,p(e)),e}return t=f,r&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(t.default),b=n.prototype,m="headTagsData",y=[r.tracked],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=y.slice().reverse().reduce((function(e,t){return t(b,m,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(b,m,g),g=null),o=g,n)
e.default=w})),define("web-experience-app/controllers/see-all-books",["exports","@ember/controller","@glimmer/tracking"],(function(e,t,r){var n,o
function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var o=f(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b,m,y,h,v,g,w=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)})(f,e)
var t,r,n,s=c(f)
function f(){var e
a(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(p(e=s.call.apply(s,[this].concat(r))),"queryParams",[{seeAll:"see-all"}]),d(p(e),"seeAll",null),i(p(e),"headTagsData",o,p(e)),e}return t=f,(r=[{key:"metricsConfigKey",get:function(){return"artist"===this.seeAllModelType?"navigateArtistShelf":"navigateShelf"}}])&&l(t.prototype,r),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(t.default),b=n.prototype,m="headTagsData",y=[r.tracked],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=y.slice().reverse().reduce((function(e,t){return t(b,m,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(b,m,g),g=null),o=g,n)
e.default=w})),define("web-experience-app/controllers/storefront",["exports","@ember/controller","@ember/service"],(function(e,t,r){var n,o
function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var o=f(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d,b,m,y,h,v,g=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)})(f,e)
var t,r,n,s=c(f)
function f(){var e
l(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return i(p(e=s.call.apply(s,[this].concat(r))),"globalElements",o,p(e)),e}return t=f,r&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(t.default),d=n.prototype,b="globalElements",m=[r.inject],y={configurable:!0,enumerable:!0,writable:!0,initializer:null},v={},Object.keys(y).forEach((function(e){v[e]=y[e]})),v.enumerable=!!v.enumerable,v.configurable=!!v.configurable,("value"in v||v.initializer)&&(v.writable=!0),v=m.slice().reverse().reduce((function(e,t){return t(d,b,e)||e}),v),h&&void 0!==v.initializer&&(v.value=v.initializer?v.initializer.call(h):void 0,v.initializer=void 0),void 0===v.initializer&&(Object.defineProperty(d,b,v),v=null),o=v,n)
e.default=g})),define("web-experience-app/helpers/abbr-number",["exports","@ember/component/helper","@ember/service","web-experience-app/helpers/to-locale-fixed"],(function(e,t,r,n){var o,i,a
function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(b,e)
var t,r,o,u=d(b)
function b(){var e
s(this,b)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=u.call.apply(u,[this].concat(r))),"i18n",i,m(e)),c(m(e),"shortNumber",a,m(e)),e}return t=b,(r=[{key:"compute",value:function(e){var t=l(e,1)[0]
return null==t?null:this.shortNumber.format(t,(0,n.localeWithOptionsForNumbers)(this.i18n.locale),{significantDigits:1,maximumFractionDigits:1})}}])&&p(t.prototype,r),o&&p(t,o),Object.defineProperty(t,"prototype",{writable:!1}),b}(t.default),i=h(o.prototype,"i18n",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=h(o.prototype,"shortNumber",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)
e.default=v})),define("web-experience-app/helpers/anchor-punctuation",["exports","@ember/component/helper","@ember/service","web-experience-app/utils/ssr"],(function(e,t,r,n){var o,i,a
function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.START_LTR_EMBED_ANCHOR=e.NON_BREAKING_SPACE=e.END_LTR_EMBED_ANCHOR=void 0
e.START_LTR_EMBED_ANCHOR="‪"
e.END_LTR_EMBED_ANCHOR="‬"
e.NON_BREAKING_SPACE=" "
var h=["Apple TV+","Apple".concat(" ","TV+"),"Apple Fitness+","Apple".concat(" ","Fitness+")]
function v(e){var t=e.slice(-1)
return e.replace(/.$/,"".concat("‪").concat(t).concat("‬"))}var g,w,O,P,_,j,k=(o=(0,r.inject)("-document"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(u,e)
var t,r,o,i=d(u)
function u(){var e
s(this,u)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=i.call.apply(i,[this].concat(r))),"document",a,m(e)),e}return t=u,(r=[{key:"compute",value:function(e){var t=l(e,1)[0],r=this.document.documentElement.getAttribute("dir")
if(("ltr"===r||null===r)&&!(0,n.isSSR)())return t
h.forEach((function(e){if(t.includes(e)){var r=v(e)
t=t.split(e).join(r)}}))
var o=t.slice(-1)
return/^[a-z0-9]+$/i.test(o)||"‬"===o?t:v(t)}}])&&p(t.prototype,r),o&&p(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(t.default),g=i.prototype,w="document",O=[o],P={configurable:!0,enumerable:!0,writable:!0,initializer:null},j={},Object.keys(P).forEach((function(e){j[e]=P[e]})),j.enumerable=!!j.enumerable,j.configurable=!!j.configurable,("value"in j||j.initializer)&&(j.writable=!0),j=O.slice().reverse().reduce((function(e,t){return t(g,w,e)||e}),j),_&&void 0!==j.initializer&&(j.value=j.initializer?j.initializer.call(_):void 0,j.initializer=void 0),void 0===j.initializer&&(Object.defineProperty(g,w,j),j=null),a=j,i)
e.default=k})),define("web-experience-app/helpers/and",["exports","ember-truth-helpers/helpers/and"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/helpers/app-artwork",["exports","@ember/component/helper","web-experience-app/utils/apps/app-type"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t,n
if(e){var o=(null===(t=e.primaryPlatform)||void 0===t?void 0:t.ovalArtwork)||e.ovalArtwork,i=(null===(n=e.primaryPlatform)||void 0===n?void 0:n.artwork)||e.artwork
return(0,r.isMessagesOnly)(e)?o:i}}Object.defineProperty(e,"__esModule",{value:!0}),e.appArtwork=i,e.default=void 0
var a=(0,t.helper)((function(e){return i(n(e,1)[0])}))
e.default=a})),define("web-experience-app/helpers/app-version",["exports","@ember/component/helper","web-experience-app/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,n){function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.default.APP.version,i=t.versionOnly||t.hideSha,a=t.shaOnly||t.hideVersion,l=null
return i&&(t.showExtended&&(l=o.match(n.versionExtendedRegExp)),l||(l=o.match(n.versionRegExp))),a&&(l=o.match(n.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var i=(0,t.helper)(o)
e.default=i})),define("web-experience-app/helpers/attr-sanitize",["exports","@ember/component/helper","web-experience-app/utils/sanitize"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,1)[0]
return(0,r.sanitizeForAttribute)(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.attrSanitize=i,e.default=void 0
var a=(0,t.helper)(i)
e.default=a})),define("web-experience-app/helpers/capitalize",["exports","@ember/component/helper","@ember/string","@ember/utils"],(function(e,t,r,n){function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function a(e){var t=o(e,1)[0]
return(0,n.isEmpty)(t)&&(t=""),(0,r.capitalize)("".concat(t))}Object.defineProperty(e,"__esModule",{value:!0}),e.capitalizeString=a,e.default=void 0
var l=t.default.helper(a)
e.default=l})),define("web-experience-app/helpers/chunk",["exports","ember-composable-helpers/helpers/chunk"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"chunk",{enumerable:!0,get:function(){return t.chunk}}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/helpers/dasherize",["exports","@ember/component/helper","@ember/string"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,1)[0]
return(0,r.dasherize)(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.dasherizeHelper=i,e.default=void 0
var a=(0,t.helper)(i)
e.default=a})),define("web-experience-app/helpers/deprecate-block-syntax",["exports","@amp/ember-ui-media-artwork/helpers/deprecate-block-syntax"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"deprecateBlockSyntax",{enumerable:!0,get:function(){return t.deprecateBlockSyntax}})})),define("web-experience-app/helpers/direction-marker",["exports","@ember/component/helper","@ember/service"],(function(e,t,r){var n,o,i
function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return p(this,r)}}function p(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.RTL_MARK=e.LTR_MARK=void 0,e.directionMarker=O
e.LTR_MARK="‎"
e.RTL_MARK="‏"
var b,m,y,h,v,g,w=(n=(0,r.inject)("-document"),o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)})(p,e)
var t,r,n,o=s(p)
function p(){var e
l(this,p)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a(f(e=o.call.apply(o,[this].concat(r))),"document",i,f(e)),e}return t=p,(r=[{key:"compute",value:function(){return O(this.document)}}])&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(t.default),b=o.prototype,m="document",y=[n],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=y.slice().reverse().reduce((function(e,t){return t(b,m,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(b,m,g),g=null),i=g,o)
function O(e){return"ltr"===(e.documentElement.dir||"ltr")?"‎":"‏"}e.default=w})),define("web-experience-app/helpers/duration",["exports","@ember/component/helper","@ember/service","@apple/duration"],(function(e,t,r,n){var o,i
function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return l(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("number"==typeof e){var r=Math.ceil(e/1e3),o=(0,n.default)(r),i=o.hours,a=o.minutes
return i>0&&a>0?t.t("WFA.Duration.Hours.Minutes",{hours:i,minutes:a}):i>0?t.t("WFA.Duration.Hours",{hours:i}):t.t("WFA.Duration.Minutes",{minutes:a})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.episodeDuration=y
var h,v,g,w,O,P,_=(o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(l,e)
var t,r,n,o=f(l)
function l(){var e
c(this,l)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=o.call.apply(o,[this].concat(r))),"i18n",i,b(e)),e}return t=l,(r=[{key:"compute",value:function(e){return y(a(e,1)[0],this.i18n)}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(t.default),h=o.prototype,v="i18n",g=[r.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),i=P,o)
e.default=_})),define("web-experience-app/helpers/encoded-referrer",["exports","@ember/component/helper"],(function(e,t){function r(){return encodeURI(window.document.referrer)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.encodedReferrer=r
var n=(0,t.helper)(r)
e.default=n})),define("web-experience-app/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})})),define("web-experience-app/helpers/format-date",["exports","@ember/component/helper","@ember/service","web-experience-app/utils/date-time"],(function(e,t,r,n){var o,i
function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return l(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,v,g,w,O,P=(o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(d,e)
var t,r,o,l=f(d)
function d(){var e
c(this,d)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=l.call.apply(l,[this].concat(r))),"i18n",i,b(e)),e}return t=d,(r=[{key:"compute",value:function(e){var t=a(e,2),r=t[0],o=t[1],i=this.i18n.locale
return"ISO"===o?(0,n.formatISOString)(r):(0,n.formatDate)(r,i,n.FORMATS[o])}}])&&s(t.prototype,r),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),d}(t.default),y=o.prototype,h="i18n",v=[r.inject],g={configurable:!0,enumerable:!0,writable:!0,initializer:null},O={},Object.keys(g).forEach((function(e){O[e]=g[e]})),O.enumerable=!!O.enumerable,O.configurable=!!O.configurable,("value"in O||O.initializer)&&(O.writable=!0),O=v.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),O),w&&void 0!==O.initializer&&(O.value=O.initializer?O.initializer.call(w):void 0,O.initializer=void 0),void 0===O.initializer&&(Object.defineProperty(y,h,O),O=null),i=O,o)
e.default=P})),define("web-experience-app/helpers/format-meta-content",["exports","@ember/component/helper","web-experience-app/helpers/direction-marker","@ember/service"],(function(e,t,r,n){var o,i,a
function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h,v,g,w,O,P,_=(o=(0,n.inject)("-document"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(u,e)
var t,n,o,i=d(u)
function u(){var e
s(this,u)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=i.call.apply(i,[this].concat(r))),"document",a,m(e)),e}return t=u,(n=[{key:"compute",value:function(e){var t=l(e,2),n=t[0],o=t[1]
return n.includes("title")||n.includes("description")?"".concat((0,r.directionMarker)(this.document)).concat(o):o}}])&&p(t.prototype,n),o&&p(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(t.default),h=i.prototype,v="document",g=[o],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),a=P,i)
e.default=_})),define("web-experience-app/helpers/generate-monogram-profile",["exports","@ember/component/helper","web-experience-app/utils/generate-monogram"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.helper)((function(e){var t=n(e,1)[0]
return(0,r.default)(t)}))
e.default=i})),define("web-experience-app/helpers/get-artwork",["exports","@ember/component/helper","@ember/array"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getArtwork=u
var i=["Core_WK_Regular","Core_PS_Regular","Core_PM_Regular","Core_PME_Regular","Core_MD_Wide","Core_TR_Wide"],a=function(e){return e.find((function(e){return i.includes(e.pictureFileType)}))||(null==e?void 0:e[0])},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.find((function(t){return e[t]}))
return e[t]||Object.values(e)[0]}
function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return(0,r.isArray)(e)?a(e):l(e)}var c=(0,t.helper)((function(e){return u(n(e,1)[0])}))
e.default=c})),define("web-experience-app/helpers/get-from-config",["exports","@ember/component/helper","web-experience-app/config/environment","@ember/object"],(function(e,t,r,n){function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function a(e){return(0,n.get)(r.default,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getFromConfig=a
var l=(0,t.helper)((function(e){return a(o(e,1)[0])}))
e.default=l})),define("web-experience-app/helpers/google-play-store-link",["exports","@ember/component/helper","web-experience-app/utils/launch-client"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,1)[0]
return(0,r.googlePlayStoreLink)(t)}Object.defineProperty(e,"__esModule",{value:!0}),e._googlePlayStoreLink=i,e.default=void 0
var a=(0,t.helper)(i)
e.default=a})),define("web-experience-app/helpers/grouped-index",["exports","@ember/component/helper","@ember/debug"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,3),r=t[0]
return r*t[1]+t[2]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.groupedIndex=i
var a=(0,t.helper)(i)
e.default=a})),define("web-experience-app/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})})),define("web-experience-app/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})})),define("web-experience-app/helpers/html-safe",["exports","@ember/component/helper","@ember/template"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,1)[0]
return(0,r.htmlSafe)(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.toHTMLSafe=i
var a=t.default.helper(i)
e.default=a})),define("web-experience-app/helpers/html-sanitize",["exports","@ember/component/helper","web-experience-app/utils/sanitize"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,1)[0]
return(0,r.sanitizeForHtml)(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.toHTMLSanitize=i
var a=t.default.helper(i)
e.default=a})),define("web-experience-app/helpers/inc",["exports","ember-composable-helpers/helpers/inc"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"inc",{enumerable:!0,get:function(){return t.inc}})})),define("web-experience-app/helpers/includes",["exports","ember-composable-helpers/helpers/includes"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"includes",{enumerable:!0,get:function(){return t.includes}})}))
define("web-experience-app/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})})),define("web-experience-app/helpers/is-book",["exports","@ember/component/helper"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.isBook=i
var o=["epubBook","book"]
function i(e){var t=r(e,1)[0]
return-1!==o.indexOf(t)}var a=(0,t.helper)(i)
e.default=a})),define("web-experience-app/helpers/is-empty",["exports","ember-truth-helpers/helpers/is-empty"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})})),define("web-experience-app/helpers/is-last-array-index",["exports","@amp/ember-ui-media-shelf/helpers/is-last-array-index"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isLastArrayIndex",{enumerable:!0,get:function(){return t.isLastArrayIndex}})})),define("web-experience-app/helpers/is-portrait",["exports","@ember/component/helper","web-experience-app/utils/images"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.helper)((function(e){var t=n(e,1)[0]
return(0,r.isPortrait)(t)}))
e.default=i})),define("web-experience-app/helpers/is-ssr",["exports","@ember/component/helper","web-experience-app/utils/ssr"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.helper)((function(){return(0,r.isSSR)()}))
e.default=n})),define("web-experience-app/helpers/item-component-chooser",["exports","@amp/ember-ui-media-shelf/helpers/item-component-chooser"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"itemComponentChooser",{enumerable:!0,get:function(){return t.itemComponentChooser}})})),define("web-experience-app/helpers/join",["exports","ember-composable-helpers/helpers/join"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/helpers/language-description",["exports","@ember/component/helper","@ember/service","web-experience-app/utils/loc-concatenate"],(function(e,t,r,n){var o,i
function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return l(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){var r=e.descriptors.map((function(e){return t.t("WEA.Common.Languages.".concat(e))}))
if(0===r.length)return e.name
var o=(0,n.default)(r,t)
return t.t("WEA.Common.Languages.languageDescriptor",{languageName:e.name,languageMeta:o})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.generateLanguageDescription=y
var h,v,g,w,O,P,_=(o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(l,e)
var t,r,n,o=f(l)
function l(){var e
c(this,l)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=o.call.apply(o,[this].concat(r))),"i18n",i,b(e)),e}return t=l,(r=[{key:"compute",value:function(e){return y(a(e,1)[0],this.i18n)}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(t.default),h=o.prototype,v="i18n",g=[r.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),i=P,o)
e.default=_})),define("web-experience-app/helpers/languages-list",["exports","@ember/component/helper","@ember/service","web-experience-app/helpers/language-description","web-experience-app/utils/loc-concatenate"],(function(e,t,r,n,o){var i,a
function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h,v,g,w,O,P,_=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(b,e)
var t,r,i,u=d(b)
function b(){var e
s(this,b)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=u.call.apply(u,[this].concat(r))),"i18n",a,m(e)),e}return t=b,(r=[{key:"compute",value:function(e){var t=this,r=l(e,1)[0].map((function(e){return(0,n.generateLanguageDescription)(e,t.i18n)}))
return(0,o.default)(r,this.i18n)}}])&&p(t.prototype,r),i&&p(t,i),Object.defineProperty(t,"prototype",{writable:!1}),b}(t.default),h=i.prototype,v="i18n",g=[r.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),a=P,i)
e.default=_})),define("web-experience-app/helpers/loc-duration",["exports","@ember/component/helper","@ember/service","@ember/utils","web-experience-app/utils/duration"],(function(e,t,r,n,o){var i,a
function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.deriveDuration=j
var h,v,g,w,O,P,_=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(i,e)
var t,r,n,o=d(i)
function i(){var e
s(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=o.call.apply(o,[this].concat(r))),"i18n",a,m(e)),e}return t=i,(r=[{key:"compute",value:function(e,t){var r=l(e,1)[0],n=t.abbr,o=void 0!==n&&n
return j(r,this.i18n,o)}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(t.default),h=i.prototype,v="i18n",g=[r.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),a=P,i)
function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if((0,n.isEmpty)(e))return""
var i=(0,o.duration)(e),a=i.hours,l=i.minutes,u=i.seconds,c=k(t,r)
return a>0&&l>0?t.t("WEA.Common.SeparatorDuration",{hours:c(a,"WEA.Common.Hours"),minutes:c(l,"WEA.Common.Minutes")}):a>0&&0===l?c(a,"WEA.Common.Hours"):0===a&&l>0?c(l,"WEA.Common.Minutes"):0===a&&0===l&&(0,n.isPresent)(u)?c(u,"WEA.Common.Seconds"):void 0}function k(e,t){return t?function(t,r){return e.t("".concat(r,".abbr"),{count:t})}:function(t,r){return e.t(r,{count:t})}}e.default=_})),define("web-experience-app/helpers/loc-filesize",["exports","@ember/component/helper","@ember/service","web-experience-app/utils/bytes-to-readable"],(function(e,t,r,n){var o,i
function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return l(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,v,g,w,O,P=(o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(d,e)
var t,r,o,l=f(d)
function d(){var e
c(this,d)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return u(b(e=l.call.apply(l,[this].concat(r))),"i18n",i,b(e)),e}return t=d,(r=[{key:"compute",value:function(e){var t=a(e,2),r=t[0],o=t[1],i=void 0===o?"b":o,l=(0,n.parse)(r,i),u=l.bytes,c=l.label
return this.i18n.t("".concat("WEA.Common.FileSize",".").concat(c),{count:u})}}])&&s(t.prototype,r),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),d}(t.default),y=o.prototype,h="i18n",v=[r.inject],g={configurable:!0,enumerable:!0,writable:!0,initializer:null},O={},Object.keys(g).forEach((function(e){O[e]=g[e]})),O.enumerable=!!O.enumerable,O.configurable=!!O.configurable,("value"in O||O.initializer)&&(O.writable=!0),O=v.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),O),w&&void 0!==O.initializer&&(O.value=O.initializer?O.initializer.call(w):void 0,O.initializer=void 0),void 0===O.initializer&&(Object.defineProperty(y,h,O),O=null),i=O,o)
e.default=P})),define("web-experience-app/helpers/lockup-presenter",["exports","@ember/component/helper"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getLockupPresenter=a
var o={default:"lockups/base",appEvent:"lockups/app-event","editorial-items":"lockups/editorial-item",books:"lockups/books","audio-books":"lockups/books"},i={seeAllDeveloperOtherApps:"lockups/app",seeAllAppsInBundle:"lockups/app",seeAllIMessageApps:"lockups/app"}
function a(e){var t=r(e,1),n=t[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.sectionType
return i[l]||o[n]||o.default}var l=(0,t.helper)(a)
e.default=l})),define("web-experience-app/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})})),define("web-experience-app/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})})),define("web-experience-app/helpers/media-player-classes",["exports","@ember/component/helper","@ember/service"],(function(e,t,r){var n,o
function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,h,v,g,w,O=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(f,e)
var t,r,n,a=p(f)
function f(){var e
u(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=a.call.apply(a,[this].concat(r))),"mediaPlayer",o,d(e)),e}return t=f,(r=[{key:"compute",value:function(e){var t,r,n=i(e,1)[0],o=this.mediaPlayer
if(!(n.id?(null===(t=o.nowPlayingItem)||void 0===t?void 0:t.id)===n.id:(null===(r=o.nowPlayingItem)||void 0===r?void 0:r.url)===n.url))return""
var a="is-now-playing"
return o.isPlaying&&(a="".concat(a," is-playing")),o.musicIsLoading&&(a="".concat(a," is-loading")),a}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(t.default),m=n.prototype,y="mediaPlayer",h=[r.inject],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=h.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(m,y,w),w=null),o=w,n)
e.default=O})),define("web-experience-app/helpers/metrics-data",["exports","@ember/component/helper","web-experience-app/config","web-experience-app/utils/string-template","@ember/debug"],(function(e,t,r,n,o){function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getMetricsJson=u
var l=r.default.metrics.clickEvents
function u(e){var t=i(e,1),r=t[0],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l[r],u=Object.assign({},a)
return Object.keys(a).forEach((function(e){var t=a[e]
u[e]="string"==typeof t?(0,n.replaceKeys)(t,o,"web-experience-app.metrics.missing-variable-in-".concat(e)):t})),JSON.stringify(u)}var c=t.default.helper(u)
e.default=c})),define("web-experience-app/helpers/model-metrics-data",["exports","@ember/component/helper"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,t.helper)((function(e){var t=r(e,2),n=t[0],o=t[1]
if(!n)return""
var i={actionType:"navigate",targetId:n.id,targetType:"button",actionUrl:n.url}
return void 0!==(null==o?void 0:o.locationPosition)&&(i.location=[{locationPosition:o.locationPosition,id:n.id,locationType:"lockup",name:n.name,idType:"its_id"}]),JSON.stringify(i)}))
e.default=o})),define("web-experience-app/helpers/mzstatic-image-url",["exports","@amp/ember-ui-media-artwork/helpers/mzstatic-image-url"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"mzstaticImageUrl",{enumerable:!0,get:function(){return t.mzstaticImageUrl}})})),define("web-experience-app/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEqualHelper",{enumerable:!0,get:function(){return t.notEqualHelper}})})),define("web-experience-app/helpers/not",["exports","ember-truth-helpers/helpers/not"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})})),define("web-experience-app/helpers/or",["exports","ember-truth-helpers/helpers/or"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})})),define("web-experience-app/helpers/pipe",["exports","ember-composable-helpers/helpers/pipe"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"pipe",{enumerable:!0,get:function(){return t.pipe}})})),define("web-experience-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("web-experience-app/helpers/present",["exports","@ember/application","@ember/debug","@ember/component/helper","@ember/object"],(function(e,t,r,n,o){function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var o=f(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return p(this,r)}}function p(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)})(f,e)
var r,n,a,p=s(f)
function f(){var e
l(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return(e=p.call.apply(p,[this].concat(r))).name=null,e.presenter=null,e}return r=f,(n=[{key:"createPresenter",value:function(e){var r=(0,t.getOwner)(this).factoryFor("presenter:".concat(e))
return r.create()}},{key:"destroyPresenter",value:function(){this.presenter&&this.presenter.destroy&&this.presenter.destroy()}},{key:"compute",value:function(e,t){var r=i(e,1)[0]
return this.presenter=this.createPresenter(r),(0,o.setProperties)(this.presenter,t),this.presenter}},{key:"willDestroy",value:function(){this.destroyPresenter()}}])&&u(r.prototype,n),a&&u(r,a),Object.defineProperty(r,"prototype",{writable:!1}),f}(n.default)
e.default=d})),define("web-experience-app/helpers/privacy-category-icon",["exports","@ember/component/helper"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.privacyCategoryIcon=i
var o={BROWSING_HISTORY:"clock-fill",CONTACTS:"person-crop-circle",CONTACT_INFO:"info-circle-fill",DIAGNOSTICS:"gearshape-fill",FINANCIAL_INFO:"creditcard-fill",HEALTH_AND_FITNESS:"heart-circle-fill",IDENTIFIERS:"person-crop-rectangle-line-fill",LOCATION:"location-fill",OTHER:"ellipsis-circle-fill",PURCHASES:"bag-fill",SEARCH_HISTORY:"magnifyingglass-circle-fill",SENSITIVE_INFO:"eye-fill",USAGE_DATA:"chart-bar-fill",USER_CONTENT:"photo-fill-on-rectangle-fill"}
function i(e){var t=r(e,1)[0]
return o[t]||"info-circle-fill"}var a=(0,t.helper)(i)
e.default=a})),define("web-experience-app/helpers/privacy-type-icon",["exports","@ember/component/helper"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.privacyTypeIcon=i
var o={DATA_USED_TO_TRACK_YOU:"person-square-brackets",DATA_LINKED_TO_YOU:"person-circle",DATA_NOT_LINKED_TO_YOU:"person-circle-slash",DATA_NOT_COLLECTED:"checkmark-circle",NO_DETAILS:"exclamationmark-triangle"}
function i(e){var t=r(e,1)[0]
return o[t]||"exclamationmark-triangle"}var a=(0,t.helper)(i)
e.default=a})),define("web-experience-app/helpers/route-idle",["exports","ember-app-scheduler/helpers/route-idle"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"routeIdle",{enumerable:!0,get:function(){return t.routeIdle}})})),define("web-experience-app/helpers/seconds-to-time",["exports","@ember/debug","@ember/component/helper","@ember/service","web-experience-app/utils/duration"],(function(e,t,r,n,o){var i,a
function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return u(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.secondsToTime=e.default=void 0
var h,v,g,w,O,P,_=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(i,e)
var t,r,n,o=d(i)
function i(){var e
s(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=o.call.apply(o,[this].concat(r))),"i18n",a,m(e)),e}return t=i,(r=[{key:"compute",value:function(e){var t=l(e,1)[0],r=parseFloat(t)
return isNaN(r)?"":j(r,this.i18n.locale)}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.default),h=i.prototype,v="i18n",g=[n.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),a=P,i)
e.default=_
var j=function(e,t){return(0,o.formatDuration)(e,t)}
e.secondsToTime=j}))
define("web-experience-app/helpers/see-all-profile",["exports","@ember/component/helper","@ember/object","web-experience-app/config/see-all-profiles","web-experience-app/utils/shelf"],(function(e,t,r,n,o){function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e){var t,a=i(e,1)[0],l=n.profileAliases[a]||a
return t=n.default[l]?n.default[l]:n.default.default,(0,r.set)(t,"columnClassNames",(0,o.generateColumnClassNames)(t)),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getSeeAllProfile=l
var u=(0,t.helper)(l)
e.default=u})),define("web-experience-app/helpers/service",["exports","@ember/application","@ember/component/helper","@ember/debug"],(function(e,t,r,n){function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=p(e)
if(t){var o=p(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)})(p,e)
var r,n,i,s=c(p)
function p(){return a(this,p),s.apply(this,arguments)}return r=p,(n=[{key:"compute",value:function(e){var r=o(e,1)[0],n=(0,t.getOwner)(this).lookup("service:".concat(r))
return n}}])&&l(r.prototype,n),i&&l(r,i),Object.defineProperty(r,"prototype",{writable:!1}),p}(r.default)
e.default=f})),define("web-experience-app/helpers/shelf-profile",["exports","@ember/component/helper","@ember/object","web-experience-app/config/shelf-profiles","web-experience-app/utils/shelf"],(function(e,t,r,n,o){function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e){var t,a=i(e,1)[0]
return t=n.default[a]?n.default[a]:n.default.default,(0,r.set)(t,"columnClassNames",(0,o.generateColumnClassNames)(t)),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getShelfProfile=l
var u=t.default.helper(l)
e.default=u})),define("web-experience-app/helpers/short-number",["exports","ember-short-number/helpers/short-number"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"shortNumber",{enumerable:!0,get:function(){return t.shortNumber}})})),define("web-experience-app/helpers/show-see-all-link",["exports","@ember/component/helper"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){var t=r(e,3),n=t[0],o=t[1]
return t[2]>=(o&&n&&o[n]||0)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.shouldShowSeeAllLink=o
var i=t.default.helper(o)
e.default=i})),define("web-experience-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("web-experience-app/helpers/sort-contributors",["exports","@ember/component/helper","@ember/array"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ORDERED_ROLE_TYPES=void 0,e.sortContributors=u
var l=["Celebrity","Guest","Narrator","Trainer"]
function u(e){if((0,r.isArray)(e))return o(e).sort((function(e,t){var r=l.indexOf(e._meta.role)-l.indexOf(t._meta.role)
return 0===r?e.name>t.name?1:-1:r}))}e.ORDERED_ROLE_TYPES=l
var c=(0,t.helper)((function(e){return u(n(e,1)[0])}))
e.default=c})),define("web-experience-app/helpers/style-attribute",["exports","@ember/component/helper","@ember/template"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,1)[0],o=[]
return Object.keys(t).forEach((function(e){o.push("".concat(e,": ").concat(t[e],";"))})),(0,r.htmlSafe)(o.join(" "))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.toStyleAttribute=i
var a=t.default.helper(i)
e.default=a})),define("web-experience-app/helpers/svg-jar",["exports","ember-svg-jar/utils/make-helper","ember-svg-jar/utils/make-svg"],(function(e,t,r){function n(e){try{return require("ember-svg-jar/inlined/".concat(e)).default}catch(t){return null}}function o(e,t){return(0,r.default)(e,t,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.svgJar=o
var i=(0,t.default)(o)
e.default=i})),define("web-experience-app/helpers/t",["exports","@amp/ember-localizer/helpers/t"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/helpers/take",["exports","ember-composable-helpers/helpers/take"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/helpers/thousands-separate",["exports","@ember/component/helper","@ember/service"],(function(e,t,r){var n,o
function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return"number"==typeof e&&isFinite(e)?new Intl.NumberFormat(t).format(e):""}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.thousandsSeparate=m
var y,h,v,g,w,O,P=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(f,e)
var t,r,n,a=p(f)
function f(){var e
u(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=a.call.apply(a,[this].concat(r))),"globalElements",o,d(e)),e}return t=f,(r=[{key:"compute",value:function(e){return m(i(e,1)[0],this.globalElements.languageCode)}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(t.default),y=n.prototype,h="globalElements",v=[r.inject],g={configurable:!0,enumerable:!0,writable:!0,initializer:null},O={},Object.keys(g).forEach((function(e){O[e]=g[e]})),O.enumerable=!!O.enumerable,O.configurable=!!O.configurable,("value"in O||O.initializer)&&(O.writable=!0),O=v.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),O),w&&void 0!==O.initializer&&(O.value=O.initializer?O.initializer.call(w):void 0,O.initializer=void 0),void 0===O.initializer&&(Object.defineProperty(y,h,O),O=null),o=O,n)
e.default=P})),define("web-experience-app/helpers/time-tag",["exports","@ember/component/helper","@ember/service","@ember/template","web-experience-app/utils/duration","web-experience-app/helpers/seconds-to-time","web-experience-app/utils/date-time"],(function(e,t,r,n,o,i,a){var l,u
function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g,w,O,P,_,j,k=(l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)})(y,e)
var t,r,l,s=m(y)
function y(){var e
f(this,y)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return p(h(e=s.call.apply(s,[this].concat(r))),"i18n",u,h(e)),e}return t=y,(r=[{key:"compute",value:function(e,t){var r=c(e,1)[0],l=t.format,u=t.ariaFormat,s=t.classNames,p=t.dataTestAttr,f=t.duration,d=void 0!==f&&f,b=t.timer,m=void 0!==b&&b,y=t.uppercaseText,h=void 0!==y&&y
return function(e,t,r,l,u,c,s,p,f){var d,b,m
u=u||""
var y=""
if(s)d=(0,i.secondsToTime)(t,e.locale),b=(0,o.isoDuration)(t),m=l||e.t("WEA.Common.TrackList.Time",{_disableSafeString:!0}),c=c||"data-test-we-duration",p&&(y='role="timer"',m=e.t("WEA.Common.TrackList.TimeRemaining",{_disableSafeString:!0}),d="-".concat(d))
else{if(!t)return""
r=a.FORMATS[r]||a.FORMATS.DEFAULT,l=a.FORMATS[l]||a.FORMATS.LONG_DATE,d=(0,a.formatDate)(t,e.locale,r),b=(0,a.formatISOString)(t),m=(0,a.formatDate)(t,e.locale,l),c=c||"data-test-we-datetime"}return f&&(d=d.toUpperCase()),(0,n.htmlSafe)("<time ".concat(c,' datetime="').concat(b,'" aria-label="').concat(m,'" class="').concat(u,'" ').concat(y,">").concat(d,"</time>"))}(this.i18n,r,l,u,s,p,d,m,h)}}])&&d(t.prototype,r),l&&d(t,l),Object.defineProperty(t,"prototype",{writable:!1}),y}(t.default),g=l.prototype,w="i18n",O=[r.inject],P={configurable:!0,enumerable:!0,writable:!0,initializer:null},j={},Object.keys(P).forEach((function(e){j[e]=P[e]})),j.enumerable=!!j.enumerable,j.configurable=!!j.configurable,("value"in j||j.initializer)&&(j.writable=!0),j=O.slice().reverse().reduce((function(e,t){return t(g,w,e)||e}),j),_&&void 0!==j.initializer&&(j.value=j.initializer?j.initializer.call(_):void 0,j.initializer=void 0),void 0===j.initializer&&(Object.defineProperty(g,w,j),j=null),u=j,l)
e.default=k})),define("web-experience-app/helpers/to-html",["exports","@ember/component/helper","@ember/template"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){var t=n(e,1)[0]
return t&&(0,r.htmlSafe)(t.replace(/\n/g,"<br>"))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.toHTML=i
var a=t.default.helper(i)
e.default=a})),define("web-experience-app/helpers/to-locale-fixed",["exports","@ember/component/helper","@ember/service"],(function(e,t,r){var n,o
function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return a(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=b(e)
if(t){var o=b(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){return"hi-in"===(e=e.toLowerCase().replace("_","-"))?"hi-in-u-nu-latn":e}function y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.minimumFractionDigits,o=void 0===n?0:n,i=r.maximumFractionDigits,a=void 0===i?2:i
if(e&&"number"==typeof e)return e.toLocaleString(m(t),{minimumFractionDigits:Math.min(o,a),maximumFractionDigits:Math.max(o,a)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.localeWithOptionsForNumbers=m,e.toLocaleFixed=y
var h,v,g,w,O,P,_=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(f,e)
var t,r,n,a=p(f)
function f(){var e
u(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(d(e=a.call.apply(a,[this].concat(r))),"i18n",o,d(e)),e}return t=f,(r=[{key:"compute",value:function(e){var t=i(e,1),r=t[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.decimal,a=void 0===o?2:o,l=n.minimumFractionDigits,u=void 0===l?1:l
return y(r,this.i18n.locale,{minimumFractionDigits:u,maximumFractionDigits:a})}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(t.default),h=n.prototype,v="i18n",g=[r.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),o=P,n)
e.default=_})),define("web-experience-app/helpers/upper-case",["exports","@ember/component/helper"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){var t=r(e,1)[0]
return t?"".concat(t).toLocaleUpperCase():""}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.upperCase=o
var i=(0,t.helper)(o)
e.default=i})),define("web-experience-app/helpers/utc",["exports","@ember/debug","@ember/component/helper"],(function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function i(e){if(e instanceof Date||(e=new Date(e),!isNaN(e.getTime())))return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.utc=i
var a=(0,r.helper)((function(e){return i(n(e,1)[0])}))
e.default=a})),define("web-experience-app/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})})),define("web-experience-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","web-experience-app/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("web-experience-app/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=r})),define("web-experience-app/initializers/ember-cli-mirage",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-cli-mirage",initialize(){}}
e.default=t})),define("web-experience-app/initializers/export-application-global",["exports","ember","web-experience-app/config/environment"],(function(e,t,r){function n(){var e=arguments[1]||arguments[0]
if(!1!==r.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,i=r.default.exportApplicationGlobal
o="string"==typeof i?i:t.default.String.classify(r.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=n
var o={name:"export-application-global",initialize:n}
e.default=o})),define("web-experience-app/initializers/grid-config",["exports","@amp/ember-ui-media-shelf/initializers/grid-config"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("web-experience-app/initializers/scroll-by-polyfill",["exports","@amp/ember-ui-media-shelf/initializers/scroll-by-polyfill"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("web-experience-app/initializers/viewport-config",["exports","ember-in-viewport/initializers/viewport-config"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("web-experience-app/instance-initializers/clear-double-boot",["exports","ember-cli-fastboot/instance-initializers/clear-double-boot"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/instance-initializers/ember-data-shoebox",["exports","@ember/object","web-experience-app/config","web-experience-app/utils/ssr","@apple/babel-plugin-feature-remover"],(function(e,t,r,n,o){function i(e){}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=i
var a={name:"ember-data-shoebox",after:["metrics-initializer","ember-localizer"],initialize:i}
e.default=a})),define("web-experience-app/instance-initializers/ember-localizer",["exports","@amp/ember-localizer/instance-initializers/ember-localizer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("web-experience-app/instance-initializers/ember-router-scroll",["exports","ember-router-scroll/instance-initializers/ember-router-scroll"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("web-experience-app/instance-initializers/global-elements",["exports","@amp/ember-ui-global-elements/instance-initializers/global-elements"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}))
define("web-experience-app/instance-initializers/history",["exports"],(function(e){function t(e){var t=e.lookup("service:router"),r=e.lookup("service:history")
t.on("routeWillChange",r.routeWillChange.bind(r))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=t
var r={name:"history",initialize:t}
e.default=r})),define("web-experience-app/instance-initializers/media-query-listener",["exports","@amp/ember-ui-media-shelf/instance-initializers/media-query-listener"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("web-experience-app/instance-initializers/metrics-initializer",["exports","@amp/ember-metrics/instance-initializers/metrics-initializer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("web-experience-app/instance-initializers/mt-errorkit",["exports","web-experience-app/config/environment","rsvp","web-experience-app/utils/ssr"],(function(e,t,r,n){function o(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={apps:"appstore_preview_web",books:"books_preview_web",podcasts:"podcasts_preview_web",fitness:"fitness_preview_web",default:"itunes_preview_web"},a={name:"mt-errorkit",initialize(){return(e=regeneratorRuntime.mark((function e(){var o,a,l,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("production"===t.default.environment){e.next=2
break}return e.abrupt("return")
case 2:if(!(0,n.isSSR)()){e.next=4
break}return e.abrupt("return")
case 4:return e.next=6,(0,r.hash)({MTErrorKit:emberAutoImportDynamic("@amp-metrics/mt-errorkit"),integrations:emberAutoImportDynamic("@amp-metrics/mt-errorkit/dist/sentry-integrations")})
case 6:if(o=e.sent,a=o.MTErrorKit.default,l=o.integrations.Ember,u=i[t.default.APP.buildVariant]){e.next=12
break}return e.abrupt("return")
case 12:a.init({projectId:u,environment:"prod",release:t.default.APP.version,integrations:[new l]})
case 13:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function l(e){o(a,n,i,l,u,"next",e)}function u(e){o(a,n,i,l,u,"throw",e)}l(void 0)}))})()
var e}}
e.default=a})),define("web-experience-app/instance-initializers/we-link-to",["exports","web-experience-app/utils/routing","web-experience-app/config","web-experience-app/config/environment","web-experience-app/utils/ssr"],(function(e,t,r,n,o){function i(e){function i(o){var i=o.target,a=o.ctrlKey,l=o.metaKey,u=o.shiftKey
if(l||a||u)return!0
var c=function(e){do{if("A"===e.tagName)return e}while(e=e.parentElement)
return!1}(i)
if(!c)return!0
if(c.hasAttribute("data-we-link-to-exclude"))return!0
var s=c.hostname,p=window.location.hostname
if(s!==p&&"production"===n.default.environment)return!0
"localhost"!==p&&p!==r.default.routing.domains.dev||(p=r.default.routing.behaveAs)
var f=(0,t.serializeURLObject)(c),d=e.lookup("router:main")._routerMicrolib,b=(f=(0,t.normalizeURL)(f,d,e)).split("/")[2]
return!d.recognizer.names[b]||((r.default.routing.inDevelopment[p]||[]).indexOf(b)>=0||(e.lookup("service:router").transitionTo(f),o.preventDefault()),!0)}(0,o.isSSR)()||(document.body.addEventListener("click",i),e.reopen({willDestroy(){return document.body.removeEventListener("click",i),this._super.apply(this,arguments)}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=i
var a={name:"we-link-to",initialize:i}
e.default=a})),define("web-experience-app/locales/ar/config",["exports","web-experience-app/locales/en/config"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/locales/dev/config",["exports","web-experience-app/locales/en/config"],(function(e,t){function r(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=n(n({},t.default),{},{rtl:!1})
e.default=i})),define("web-experience-app/locales/en/config",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={pluralForm:function(e){return 0===e?"zero":1===e?"one":"other"}}})),define("web-experience-app/locales/fi/config",["exports","web-experience-app/locales/en/config"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/locales/pl/config",["exports","web-experience-app/locales/en/config"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/locales/ru/config",["exports","web-experience-app/locales/en/config"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/locales/tr/config",["exports","web-experience-app/locales/en/config"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/locations/history-hash-router-scroll",["exports","@ember/routing/history-location","@ember/application","web-experience-app/utils/routing","@ember/service","@apple/babel-plugin-feature-remover"],(function(e,t,r,n,o,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.extend({fastboot:(0,o.inject)(),locationService:(0,o.inject)("location-wea"),router:(0,o.inject)(),history:{get state(){return window.history.state},pushState(e,t,r){window.history.pushState(e,t,"".concat(window.location.origin).concat(r))},replaceState(e,t,r){window.history.replaceState(e,t,"".concat(window.location.origin).concat(r))}},getURL(){var e=this._super.apply(this,arguments),t=this.router,o=(0,n.normalizeURL)(e,t._router._routerMicrolib,(0,r.getOwner)(this))
return this.fastboot.isFastBoot&&o!==e&&o===e.toLowerCase()&&this.locationService.replace(o),o},formatURL(e){e=this._super(e)
var t=this.router
return(0,n.denormalizeURL)(e,t._router._routerMicrolib,(0,r.getOwner)(this))}})
e.default=a})),define("web-experience-app/locations/none",["exports","ember-cli-fastboot/locations/none","web-experience-app/utils/routing","@ember/application","@ember/service","@apple/babel-plugin-feature-remover"],(function(e,t,r,n,o,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.extend({fastboot:(0,o.inject)(),locationService:(0,o.inject)("location-wea"),router:(0,o.inject)(),getURL(){var e=this._super.apply(this,arguments),t=this.router,o=(0,r.normalizeURL)(e,t._router._routerMicrolib,(0,n.getOwner)(this))
return this.fastboot.isFastBoot&&o!==e&&o===e.toLowerCase()&&this.locationService.replace(o),o},formatURL(e){e=this._super(e)
var t=this.router
return(0,r.denormalizeURL)(e,t._router._routerMicrolib,(0,n.getOwner)(this))}})
e.default=a})),define("web-experience-app/macros/field-from-asset",["exports","@ember/object"],(function(e,t){function r(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e}
if(!e)return null
"function"==typeof e.toArray&&(e=e.toArray())
for(var n=0;n<e.length;n++){var o=e[n].assets
if(o)for(var i=0;i<o.length;i++){var a=o[i]
if(t in a)return r(a[t])}}return null}Object.defineProperty(e,"__esModule",{value:!0}),e.fieldFromAsset=r,e.fieldFromAssetMacro=function(e,n,o){return(0,t.computed)(e,(function(){return r((0,t.get)(this,e),n,o)}))}})),define("web-experience-app/macros/formatted-prices",["exports","@ember/object","@ember/string"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var i="".concat(e,".{").concat(o,"}")
return(0,t.computed)(i,"args",(function(){var t,o=e
if(e.startsWith("args")&&this.args){if(!((o=e.split("args.")[1])in this.args)||!this.args[o])return[]
t=this.args[o]}else{if(!(e in this)||!this[e])return[]
t=this[e]}return n.filter((function(e){return t["has".concat((0,r.capitalize)(e),"Offers")]})).map((function(e,r,n){var o=t["".concat(e,"ActionText")]||"",i=t["".concat(e,"PriceFormatted")],a=i
return(n.length>1||"buy"!==e)&&""!==o&&(a="".concat(o," ").concat(i)),{text:a,type:e}}))}))}
var n=["rent","buy","preorder"],o=n.reduce((function(e,t){return e.push("".concat(t,"ActionText")),e.push("".concat(t,"PriceFormatted")),e.push("has".concat((0,r.capitalize)(t),"Offers")),e}),[]).join(",")})),define("web-experience-app/macros/ranking-by-store",["exports","@ember/object"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.rankingByStore=function(e){return(0,t.computed)("chartPositions",(function(){return(0,t.get)(this,"chartPositions.".concat(e))}))}})),define("web-experience-app/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/modifiers/in-parent-scrollport",["exports","@amp/ember-ui-media-shelf/modifiers/in-parent-scrollport"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/modifiers/in-viewport",["exports","ember-in-viewport/modifiers/in-viewport"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/modifiers/observe-impressions",["exports","@amp/ember-metrics/modifiers/observe-impressions"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/modifiers/reset-scroll",["exports","@amp/ember-ui-media-shelf/modifiers/reset-scroll"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/modifiers/scroll-to-child-start",["exports","@amp/ember-ui-media-shelf/modifiers/scroll-to-child-start"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/presenters/lockups/base",["exports","@ember/object","@ember/object/computed","@ember/service","web-experience-app/utils/date-time"],(function(e,t,r,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default.extend({i18n:(0,n.inject)(),model:null,lockup:null,id:(0,r.readOnly)("lockup.id"),artwork:(0,r.readOnly)("lockup.artwork"),kind:(0,r.readOnly)("lockup.kind"),name:(0,r.readOnly)("lockup.name"),url:(0,r.readOnly)("lockup.url"),isArtistLockup:(0,r.match)("model.constructor.modelName",/product\/artist/),artistName:(0,r.readOnly)("lockup.artistName"),buyPreviewUrl:(0,r.readOnly)("lockup.buyPreviewUrl"),subscriptionPreviewUrl:(0,r.readOnly)("lockup.subscriptionPreviewUrl"),playbackUrl:(0,r.readOnly)("lockup.playbackUrl"),isExplicit:(0,t.computed)("lockup.{isExplicit,contentRating}",(function(){return this.lockup.isExplicit||"explicit"===this.lockup.contentRating})),description:(0,r.readOnly)("lockup.description"),releaseDate:(0,r.readOnly)("lockup.releaseDate"),videoSubType:(0,r.readOnly)("lockup.videoSubType"),primaryGenre:(0,r.readOnly)("lockup.primaryGenre"),isIOSApp:(0,r.readOnly)("lockup.isIOSApp"),isSubscription:(0,r.readOnly)("lockup.isSubscription"),introPricing:(0,r.readOnly)("lockup.introPricing"),priceFormatted:(0,r.readOnly)("lockup.priceFormatted"),pageProgressionDirection:(0,r.readOnly)("lockup.pageProgressionDirection"),releaseYear:(0,t.computed)("i18n.locale","releaseDate",(function(){var e=this.releaseDate
return e?(0,o.formatDate)(e,this.i18n.locale,o.FORMATS.YEAR):null})),isNotPrimaryMusicVideoArtist:(0,t.computed)("model","artistName",(function(){var e=this.model,t=this.artistName
return!(!this.isArtistLockup||e.name===t)})),musicVideoSubtitle:(0,t.computed)("artistName","releaseYear","isNotPrimaryMusicVideoArtist",(function(){return this.isNotPrimaryMusicVideoArtist?this.i18n.t("WEA.Common.DotSeparator",{string1:this.artistName,string2:this.releaseYear}):this.releaseYear})),sectionName:(0,r.readOnly)("meta.type"),albumSubtitle:(0,t.computed)("artistName","sectionName","releaseYear",(function(){return"appearsOnAlbums"===this.sectionName?this.artistName:this.releaseYear}))})
e.default=i})),define("web-experience-app/presenters/lockups/books",["exports","web-experience-app/presenters/lockups/base"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)})(c,e)
var t,a,l,u=i(c)
function c(){return r(this,c),u.apply(this,arguments)}return t=c,(a=[{key:"type",get:function(){return this.lockup.type}}])&&n(t.prototype,a),l&&n(t,l),Object.defineProperty(t,"prototype",{writable:!1}),c}(t.default)
e.default=u})),define("web-experience-app/presenters/lockups/editorial-item",["exports","web-experience-app/presenters/lockups/base"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)})(p,e)
var t,a,u,s=i(p)
function p(){var e
r(this,p)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return c(l(e=s.call.apply(s,[this].concat(n))),"kind","editorialItem"),e}return t=p,(a=[{key:"artwork",get:function(){return this.lockup.cardArtwork}},{key:"eyebrow",get:function(){return this.lockup.label}},{key:"name",get:function(){var e
return null===(e=this.lockup.editorialNotes)||void 0===e?void 0:e.name}},{key:"subtitle",get:function(){var e
return null===(e=this.lockup.editorialNotes)||void 0===e?void 0:e.short}}])&&n(t.prototype,a),u&&n(t,u),Object.defineProperty(t,"prototype",{writable:!1}),p}(t.default)
e.default=s})),define("web-experience-app/presenters/media-api-review",["exports","@ember/object"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)})(c,e)
var t,a,l,u=i(c)
function c(){return r(this,c),u.apply(this,arguments)}return t=c,(a=[{key:"body",get:function(){return this.item.review}},{key:"rating",get:function(){return this.item.rating}},{key:"name",get:function(){return this.item.userName}},{key:"responseDate",get:function(){var e
return null===(e=this.item.developerResponse)||void 0===e?void 0:e.date}},{key:"responseText",get:function(){var e
return(null===(e=this.item.developerResponse)||void 0===e?void 0:e.body)||""}},{key:"date",get:function(){return this.item.date}},{key:"title",get:function(){return this.item.title}}])&&n(t.prototype,a),l&&n(t,l),Object.defineProperty(t,"prototype",{writable:!1}),c}(t.default)
e.default=u})),define("web-experience-app/presenters/media-meta/base",["exports","@ember/object","@ember/object/computed"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({model:null,id:(0,r.alias)("model.id"),artistName:(0,r.alias)("model.artistName"),isExplicit:(0,r.alias)("model.isExplicit"),kind:(0,r.alias)("model.kind"),title:(0,r.or)("model.name","model.title"),subtitle:(0,r.alias)("model.artistName"),canHaveVideoPlayback:(0,r.equal)("kind","clip"),url:(0,t.computed)("canHaveVideoPlayback","model.{playbackUrl,productOffers.buyPreviewUrl}",(function(){var e,t=this.model
return this.canHaveVideoPlayback?t.playbackUrl:null===(e=t.productOffers)||void 0===e?void 0:e.buyPreviewUrl})),meta:(0,t.computed)("title","subtitle",(function(){return{title:this.title,subtitle:this.subtitle}}))})
e.default=n}))
define("web-experience-app/presenters/media-meta/editorial-video",["exports","web-experience-app/presenters/media-meta/base","@ember/object/computed"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({url:(0,r.alias)("model.assetUrl")})
e.default=n})),define("web-experience-app/presenters/media-meta/lockup-video",["exports","web-experience-app/presenters/media-meta/base","@ember/object"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({id:(0,r.computed)("model.{id,kind}","url",(function(){return"clip"===this.model.kind?this.url:this.model.id}))})
e.default=n})),define("web-experience-app/presenters/media-meta/podcast-video",["exports","web-experience-app/presenters/media-meta/base","@ember/object/computed"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({kind:"podcastVideo",url:(0,r.reads)("model.assetUrl")})
e.default=n})),define("web-experience-app/presenters/media-meta/story",["exports","web-experience-app/presenters/media-meta/base","@ember/object/computed"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend({kind:"storyVideo",subtitle:(0,r.alias)("model.category"),url:(0,r.alias)("model.videoURL")})
e.default=n})),define("web-experience-app/resolver",["exports","@ember/object","ember-resolver"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=r.default.extend({moduleNameLookupPatterns:(0,t.computed)("defaultModuleName","mainModuleName","nestedColocationComponentModuleName",(function(){return[this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]}))})
e.default=n})),define("web-experience-app/router",["exports","web-experience-app/config/environment","@ember/routing/router","@ember/service","@apple/babel-plugin-feature-remover","@glimmer/tracking","@ember/runloop","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a,l){var u,c,s,p,f
function d(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=w(e)
if(t){var o=w(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return v(this,r)}}function v(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var _=(u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)})(u,e)
var r,n,o,i=h(u)
function u(){var e
return m(this,u),d(g(e=i.apply(this,arguments)),"fastboot",c,g(e)),d(g(e),"platform",s,g(e)),d(g(e),"mediaPlayer",p,g(e)),d(g(e),"isFirstRoute",f,g(e)),O(g(e),"location",t.default.locationType),O(g(e),"rootURL",t.default.rootURL),(0,l.isSSR)()||emberAutoImportDynamic("@marcom/ac-headjs/FocusManager").then((function(e){new(0,e.default)})),e.on("routeDidChange",(function(){e.platform.nativeLaunchFailed=!1,e.isFirstRoute=!1,(0,l.isSSR)()||(0,a.scheduleOnce)("afterRender",g(e),e.mediaPlayer.debouncedInitVideos)})),e}return r=u,n&&b(r.prototype,n),o&&b(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}(r.default),c=P(u.prototype,"fastboot",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=P(u.prototype,"platform",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=P(u.prototype,"mediaPlayer",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=P(u.prototype,"isFirstRoute",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),u)
e.default=_,_.map((function(){this.route("not-found",{path:"redeem"}),this.route("storefront",{path:":storefrontId"},(function(){this.route("room",{path:"see-all/:name/:roomId",resetNamespace:!0}),this.route("podcast",{path:"/podcast/:name/:adamId",resetNamespace:!0}),this.route("podcast-episode",{path:"/podcast-episode/:name/:adamId",resetNamespace:!0}),this.route("channel",{path:"/channel/:name/:adamId",resetNamespace:!0})})),this.route("not-found",{path:"/*path"})}))})),define("web-experience-app/routes/application-error",["exports","web-experience-app/routes/base","@ember/service","@apple/babel-plugin-feature-remover","web-experience-app/routes/error-fitness"],(function(e,t,r,n,o){var i,a,l,u,c,s,p,f
function d(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=h(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=P(e)
if(t){var o=P(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return w(this,r)}}function w(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)})(i,e)
var t,r,n,o=g(i)
function i(){var e
b(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(O(e=o.call.apply(o,[this].concat(r))),"appViewState",a,O(e)),_(O(e),"titleKey","WEA.Error.Generic.Meta.PageTitle"),_(O(e),"descriptionKeys",["WEA.Error.Generic.Meta.PageTitle"]),e}return t=i,(r=[{key:"getHeadTags",value:function(){var e=y(P(i.prototype),"getHeadTags",this).apply(this,arguments)
return e.searchEngineIndexing=!1,e}}])&&m(t.prototype,r),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(t.default),l=i.prototype,u="appViewState",c=[r.inject],s={configurable:!0,enumerable:!0,writable:!0,initializer:null},f={},Object.keys(s).forEach((function(e){f[e]=s[e]})),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce((function(e,t){return t(l,u,e)||e}),f),p&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(p):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(l,u,f),f=null),a=f,i)
e.default=j})),define("web-experience-app/routes/application",["exports","@ember/routing/route","web-experience-app/utils/routing","@ember/service","@ember/utils","@ember/object","web-experience-app/utils/errors","@apple/babel-plugin-feature-remover","@apple/client-detect"],(function(e,t,r,n,o,i,a,l,u){var c,s,p,f,d,b,m,y,h,v,g
function w(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function O(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=k(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=E(e)
if(t){var o=E(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return A(this,r)}}function A(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var M=(c=(0,n.inject)("location-fitness"),s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)})(k,e)
var t,n,l,u,c,s=T(k)
function k(){var e
P(this,k)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return O(S(e=s.call.apply(s,[this].concat(r))),"translation",p,S(e)),O(S(e),"globalElements",f,S(e)),O(S(e),"locale",d,S(e)),O(S(e),"fastboot",b,S(e)),O(S(e),"appViewState",m,S(e)),O(S(e),"i18n",y,S(e)),O(S(e),"perfkit",h,S(e)),O(S(e),"metrics",v,S(e)),O(S(e),"location",g,S(e)),e}return t=k,(n=[{key:"fitnessAppShallowRedirect",value:function(){window&&(window.location="fitnessapp://")}},{key:"fitnessAppDeeplink",value:function(){if(window){var e=window.location.href.replace(/^https?:\/\//,"fitnessapp://")
e=e.replace(window.location.host,"fitness.apple.com"),window.location.replace(e)}}},{key:"beforeModel",value:(u=regeneratorRuntime.mark((function e(t){var n,a,l,u,c,s,p=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.perfkit.enable(),this.metrics.enable(),e.next=4,j(E(k.prototype),"beforeModel",this).apply(this,p)
case 4:if((0,o.isEmpty)(this.globalElements.storefront)&&(a=(0,r.extractCountryCodeFromTransition)(t),(0,i.set)(this,"globalElements.storefront",a)),!this.translation.hasLoaded){e.next=7
break}return e.abrupt("return")
case 7:return l=(null==t||null===(n=t.to)||void 0===n?void 0:n.queryParams)||{},u=l.cc,c=l.l,s=c&&"he"===c.toLowerCase()?"iw":c,this.translation.requestedLanguage=s||u,e.abrupt("return",this.translation.load())
case 11:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments
return new Promise((function(r,n){var o=u.apply(e,t)
function i(e){w(o,r,n,i,a,"next",e)}function a(e){w(o,r,n,i,a,"throw",e)}i(void 0)}))},function(e){return c.apply(this,arguments)})},{key:"error",value:function(e,t){return this._handleError(e,t)}},{key:"_handleError",value:function(e,t){if(this._isRedirectError(e))return!1
"NOT_FOUND"===(null==e?void 0:e.errorCode)&&(e.number=404)
var r=e.number||e.status,n=r&&-1!==[404,410].indexOf(r)||e instanceof a.NotFoundError,o=[n?"not-found":"application_error",e],l=this.fastboot
if(l.isFastBoot){var u=n?404:500
if((0,i.set)(l,"response.statusCode",u),this.intermediateTransitionTo.apply(this,o),n)return!1
throw e}if((0,i.set)(e,"visitedURL",window.location.href),t){this._handleRedirect(t,e)
var c=t.to.queryParams
c&&c.app&&(0,i.set)(this,"appViewState.requestedApp",c.app)}return!0}},{key:"_handleRedirect",value:function(e,t){var n=this.appViewState.currentState,o=e.intent.url,a=(0,r.getNotFoundRedirect)(o,n)
a&&(0,i.set)(t,"visitedURL",a.target)}},{key:"_isRedirectError",value:function(e){return e.isAdapterError&&e.errors&&e.errors.length&&e.errors[0].status&&0===e.errors[0].status.toString().indexOf(3)}}])&&_(t.prototype,n),l&&_(t,l),Object.defineProperty(t,"prototype",{writable:!1}),k}(t.default),p=R(s.prototype,"translation",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=R(s.prototype,"globalElements",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=R(s.prototype,"locale",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=R(s.prototype,"fastboot",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=R(s.prototype,"appViewState",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=R(s.prototype,"i18n",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=R(s.prototype,"perfkit",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=R(s.prototype,"metrics",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=R(s.prototype,"location",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R(s.prototype,"error",[i.action],Object.getOwnPropertyDescriptor(s.prototype,"error"),s.prototype),s)
e.default=M})),define("web-experience-app/routes/base",["exports","@ember/routing/route","@ember/service","rsvp","web-experience-app/utils/routing","@amp/foundation/-internals/storage","web-experience-app/config","web-experience-app/config/environment","web-experience-app/config/domain-modifiers","@ember/object/computed","@amp/affiliate-util","web-experience-app/utils/launch-client","web-experience-app/utils/seo","@apple/babel-plugin-feature-remover","@ember/debug","@amp/ember-ui-media-artwork/utils/srcset","web-experience-app/utils/images","web-experience-app/utils/i18n","@ember/application"],(function(e,t,r,n,o,i,a,l,u,c,s,p,f,d,b,m,y,h,v){var g,w,O,P,_,j,k,x,T,A,S,E,R,M,z,C,L
function I(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return D(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function B(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?B(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function U(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){F(i,n,o,a,l,"next",e)}function l(e){F(i,n,o,a,l,"throw",e)}a(void 0)}))}}function W(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(){return(H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=G(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function G(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=X(e)
if(t){var o=X(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return Y(this,r)}}function Y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return $(e)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var ee=1200,te=(g=(0,r.inject)("-document"),w=(0,r.inject)("location-wea"),O=(0,c.reads)("router.currentRouteName"),P=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)})(O,e)
var t,r,c,d,b,g,w=Q(O)
function O(){var e
V(this,O)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return W($(e=w.call.apply(w,[this].concat(r))),"appViewState",_,$(e)),W($(e),"document",j,$(e)),W($(e),"fastboot",k,$(e)),W($(e),"globalElements",x,$(e)),W($(e),"i18n",T,$(e)),W($(e),"location",A,$(e)),W($(e),"platform",S,$(e)),W($(e),"metrics",E,$(e)),W($(e),"router",R,$(e)),W($(e),"history",M,$(e)),W($(e),"localNav",z,$(e)),W($(e),"locale",C,$(e)),W($(e),"currentRouteName",L,$(e)),J($(e),"facebookAppLinkAppStoreID",a.default.meta.appleStore.id.appleTV),J($(e),"defaultTwitterCropCode","bf"),J($(e),"preventAutoLaunch",!1),J($(e),"hasAutoLaunched",!1),J($(e),"metricsData",null),J($(e),"pageType",""),e}return t=O,(r=[{key:"beforeModel",value:(g=U(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._localNavLinks=this.localNav.getLinks()
case 1:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"redirect",value:(b=U(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._handleCampaignAndAffiliateUrls()
case 2:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"afterModel",value:function(e,t){var r=this
return(0,n.all)([H(X(O.prototype),"afterModel",this).apply(this,arguments),this._localNavLinks]).then((function(){if(e){var n=(0,o.getProductModel)(e,t)
return r._determineInitialAppState(n,t),r.updateMetricsBase(n,t),r._checkLaunchNative(n,t),r.globalElements.load()}}))}},{key:"setupController",value:function(e,t,r){H(X(O.prototype),"setupController",this).apply(this,arguments),this.appViewState.updateMetricsContext()
var n=(0,o.getProductModel)(t,r)
e.headTagsData=this.getHeadTags(n)}},{key:"getHeadTags",value:function(e){var t=this.getCanonicalUrl(e),r=this.getOGDescription(e,N(N({},this.locData),{},{_disableSafeString:!0}))
return{title:this.getTitle(e),canonicalURL:t,keywords:this.getKeywordsTag(e),description:this.getDescription(e,N(N({},this.locData),{},{_disableSafeString:!0})),openGraphTags:this.getOpenGraphTags(e,r,t),appleContentID:this.getAppleContentID(e),mobileSmartBannerTag:this.getMobileSmartBannerTag(t),searchEngineIndexing:!0,webManifest:null,facebookAppLinkTags:this.getFacebookAppLinkTags(e),schemaTags:this.getSchemaTags(e),twitterTags:this.getTwitterTags(e,r),videoTags:[]}}},{key:"getCanonicalUrl",value:function(e){return e.url}},{key:"getKeywordsTag",value:function(e){var t=this.getKeywords(e)
return this.i18n.t(t,N(N({},this.locData),{},{_disableSafeString:!0}))}},{key:"getTitle",value:function(){var e=this.titleData||this.locData||{}
return e._disableSafeString=!0,this.i18n.t(this.titleKey,e)}},{key:"getSchemaTags",value:function(){return[]}},{key:"getKeywords",value:function(){return"WEA.Error.Generic.Meta.PageKeywords"}},{key:"getAppleContentID",value:function(e){return e.id}},{key:"getMobileSmartBannerTag",value:function(e){var t,r=a.default.meta.appleStore.id
return this.appViewState.isAppStoreView&&(t=r.appStore),t?"app-id=".concat(t).concat(e?", app-argument=".concat(e):""):null}},{key:"getFacebookAppLinkTags",value:function(e){var t,r=e.url
r&&(t=this.platform.schemeForURL(r,{isAndroid:!1,isMobile:!0}))
var n=[]
t&&n.push({name:"al:ios:url",content:t})
var o=this.facebookAppLinkAppStoreID
o&&n.push({name:"al:ios:app_store_id",content:o})
var i=this.getFacebookAppLinkTagAppName()
return i&&n.push({name:"al:ios:app_name",content:i}),n}},{key:"getFacebookAppLinkTagAppName",value:function(){var e=this.appViewState.updateKeyForAppState("WEA.LocalNav.Store")
return this.i18n.t(e,{_disableSafeString:!0})}},{key:"getTwitterTags",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[{name:"twitter:title",content:this.getTwitterTitle(e)},{name:"twitter:description",content:t},{name:"twitter:site",content:this.getTwitterSite(e)},{name:"twitter:card",content:this.getTwitterCard(e)}],n=this.getTwitterImage(e)
return n&&(r.push({name:"twitter:image",content:n}),r.push({name:"twitter:image:alt",content:this.getTwitterImageAlt(e)})),r.filter((function(e){return!!e.content}))}},{key:"getOpenGraphTags",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
return[{name:"og:title",content:this.getOGTitle(e)},{name:"og:description",content:t},{name:"og:site_name",content:this.getOGSiteName(e)},{name:"og:url",content:r}].concat(I(this.getOGImageTags(e)),[{name:"og:type",content:this.getOGType(e)},{name:"og:locale",content:this.getOGLocale()}]).filter((function(e){return!!e.content}))}},{key:"getOGImageTags",value:function(e){var t=this.getOGImageURL(e,"png")
if(!t)return[]
var r=[{name:"og:image",content:t},{name:"og:image:alt",content:this.i18n.t(this.titleKey,N(N({},this.locData),{},{_disableSafeString:!0}))},{name:"og:image:type",content:(0,m.mimeTypeForFormat)("png")},{name:"og:image:width",content:ee},{name:"og:image:height",content:630}],n=/^https:/.test(t)?t:void 0
return n&&r.push({name:"og:image:secure_url",content:n}),r}},{key:"getOGImageURL",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"png",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ee,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:630,o=this.getOGCropCode(e),i=this.getArtwork(e)
if(i)return(0,m.buildSrc)(i.url,{width:r,height:n,crop:o,fileType:t})}},{key:"getOGCropCode",value:function(){return"wf"}},{key:"getArtwork",value:function(e){return e.artwork}},{key:"getOGTitle",value:function(){return this.tagContentFor("title")}},{key:"getOGSiteName",value:function(){var e=(0,h.ogKeyFor)("siteName",this.routeName)
return this.i18n.t(e,{_disableSafeString:!0})}},{key:"getOGType",value:function(){return""}},{key:"getOGLocale",value:function(){var e=this.locale.locale
if(e){var t=e.split("-")
return 1===t.length?e:"".concat(t[0],"_").concat(t[1].toUpperCase())}}},{key:"getTwitterTitle",value:function(e){return this.titleKey?this.i18n.t(this.titleKey,N(N({},this.locData),{},{_disableSafeString:!0})):e.name}},{key:"getTwitterSite",value:function(){var e="WEA.Common.Meta.Twitter.site.iTunes",t=l.default.APP.buildVariant,r=void 0===t?"default":t
switch("default"===r?this.appViewState.currentState:r){case"apps":e="WEA.Common.Meta.Twitter.site.Apps"
break
case"books":e="WEA.Common.Meta.Twitter.site.Books"
break
case"music":e="WEA.Common.Meta.Twitter.site.AM"
break
case"podcasts":e="WEA.PodcastPages.Twitter.site.show"
break
case"fitness":e="WFA.Common.Meta.Twitter.site"}return this.i18n.t(e,{_disableSafeString:!0})}},{key:"getTwitterImageWidth",value:function(e){return(0,y.isSquare)(e)?600:1200}},{key:"getTwitterImageHeight",value:function(){return 600}},{key:"twitterCropCode",get:function(){return""}},{key:"getTwitterCropCode",value:function(){return this.twitterCropCode}},{key:"getTwitterImage",value:function(e){var t=this.getArtwork(e)
return t?(0,m.buildSrc)(t.url,{width:this.getTwitterImageWidth(t),height:this.getTwitterImageHeight(t),crop:this.getTwitterCropCode(e)||this.defaultTwitterCropCode,fileType:"png"}):""}},{key:"getTwitterImageAlt",value:function(e){return this.titleKey?this.i18n.t(this.titleKey,N(N({},this.locData),{},{_disableSafeString:!0})):e.name}},{key:"getTwitterCard",value:function(e){return this.getArtwork(e)?"summary_large_image":"summary"}},{key:"tagContentFor",value:function(e){var t=this["".concat(e,"Content")]
if(t)return t
var r=this.i18n,n=this["".concat(e,"Key")],o=this["".concat(e,"Data")]||this.locData||{}
if(o._disableSafeString=!0,n)return this.i18n.t(n,o)
var i=this["".concat(e,"Keys")]||[]
return i.constructor!==Array&&(i=[i]),i.map((function(e){return r.t(e,o)})).join(" ")}},{key:"_determineInitialAppState",value:function(e,t){this.appViewState.updateModel(e,this._getRequestedApp(t))}},{key:"_getRequestedApp",value:function(e){var t,r
return null===(t=e.to)||void 0===t||null===(r=t.queryParams)||void 0===r?void 0:r.app}},{key:"_shouldHandleCampaignRedirects",value:function(){return!this.fastboot.isFastBoot}},{key:"_handleCampaignAndAffiliateUrls",value:(d=U(regeneratorRuntime.mark((function e(){var t,r,n,i,a,l,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._shouldHandleCampaignRedirects()){e.next=2
break}return e.abrupt("return")
case 2:return e.prev=2,e.next=5,(0,s.handleCampaignAndAffiliateUrls)(this.location.href)
case 5:t=e.sent,e.next=10
break
case 8:e.prev=8,e.t0=e.catch(2)
case 10:if(t){e.next=12
break}return e.abrupt("return")
case 12:return this.preventAutoLaunch=!0,r=new URL(t),n="".concat(r.pathname).concat(r.search),i=(0,v.getOwner)(this),a=i.lookup("router:main"),l=a._routerMicrolib,u=(0,o.normalizeURL)(n,l,i),e.abrupt("return",this.router.transitionTo(u))
case 19:case"end":return e.stop()}}),e,this,[[2,8]])}))),function(){return d.apply(this,arguments)})},{key:"_checkLaunchNative",value:function(e,t){if(!this.fastboot.isFastBoot&&this._shouldLaunchNativeClient(e,t)){var r=this.getQueryParamsForNativeClientURL.apply(this,arguments),n=this.getNativeClientLaunchURL(e)
this.platform.launch(n,r),this.hasAutoLaunched=!0,(0,i.removeCookie)("ls")}}},{key:"getQueryParamsForNativeClientURL",value:function(e,t){var r={},n=this._getRequestedApp(t)
n&&(r={app:n}),this.appViewState.isMacAppStoreView&&(r=N(N({},r),{},{extRefUrl2:encodeURI(window.document.referrer)}))
var o=this.paramsFor("application")
return(0,p.addLaunchQueryParams)(r,o),r}},{key:"getNativeClientLaunchURL",value:function(e){return this._getModelUrl(e)}},{key:"_getModelUrl",value:function(e){return e.url}},{key:"getDescription",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.description&&e.description.standard
if(n)return(0,f.truncateSEODescription)(n)
var o=this.descriptionKeys||(this.descriptionKey?[this.descriptionKey]:["WEA.Error.Generic.Meta.PageTitle"])
return o.map((function(e){return t.i18n.t(e,r)})).join(" ")}},{key:"getOGDescription",value:function(e,t){return this.getDescription(e,t)}},{key:"_shouldLaunchNativeClient",value:function(e,t){if(!e.url)return!1
if(this._shouldPreventNativeClientLaunch(t))return!1
var r=t.to.queryParams
if(this.platform.isPreiOS122){var n=this.location.hostname
if(u.default[n])return!0}var o=["1","true"],a=r.ls,l=(0,i.getCookie)("ls")
return!(!o.includes(a)&&!o.includes(l)||["story"].includes(this.routeName))}},{key:"_shouldPreventNativeClientLaunch",value:function(e){var t,r
return"0"===(null==e||null===(t=e.to)||void 0===t||null===(r=t.queryParams)||void 0===r?void 0:r.ls)||this.preventAutoLaunch}},{key:"getMetricsData",value:function(){return this.metricsData}},{key:"updateMetricsBase",value:function(e,t){if(!this.fastboot.isFastBoot){var r=this.getPageDataFromModel(e,t),n=(0,o.getPageURL)(t,this.location)
if(this.metricsData=N(N({},r),{},{pageUrl:n}),window.navigator){var i=window.navigator,a=i.language,l=i.languages
this.metrics.addBaseData({osLanguage:a,osLanguages:l})}}}},{key:"getMetricsPageDetails",value:function(e){return{pageDetails:e.title,pageId:e.id}}},{key:"getPageDataFromModel",value:function(e,t){var r={},n=this.pageType
if(e.metricsBase){var o=e.metricsBase.pageType;(r=e.metricsBase).pageType="string"==typeof o&&""!==o?o:n}else{var i=this.getMetricsPageDetails(e,t),a=i.pageDetails,l=i.pageId
r={pageId:l,pageType:n,pageDetails:a,page:"".concat(n,"_").concat(l)}}return r}}])&&K(t.prototype,r),c&&K(t,c),Object.defineProperty(t,"prototype",{writable:!1}),O}(t.default),_=Z(P.prototype,"appViewState",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=Z(P.prototype,"document",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=Z(P.prototype,"fastboot",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=Z(P.prototype,"globalElements",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=Z(P.prototype,"i18n",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=Z(P.prototype,"location",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=Z(P.prototype,"platform",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=Z(P.prototype,"metrics",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=Z(P.prototype,"router",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=Z(P.prototype,"history",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=Z(P.prototype,"localNav",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=Z(P.prototype,"locale",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=Z(P.prototype,"currentRouteName",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P)
e.default=te})),define("web-experience-app/routes/channel",["exports","web-experience-app/routes/product-with-see-all","web-experience-app/utils/query-params","@ember/service","web-experience-app/utils/seo","web-experience-app/config"],(function(e,t,r,n,o,i){var a,l,u,c,s
function p(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=y(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=O(e)
if(t){var o=O(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return g(this,r)}}function g(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(a=(0,n.inject)("media-api/podcasts"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)})(_,e)
var t,n,a,l,y,g=v(_)
function _(){var e
d(this,_)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return f(w(e=g.call.apply(g,[this].concat(r))),"fastboot",u,w(e)),f(w(e),"router",c,w(e)),f(w(e),"podcastsApi",s,w(e)),P(w(e),"titleKey","WEA.PodcastChannelPages.Meta.Title"),P(w(e),"pageType","Channel"),P(w(e),"facebookAppLinkAppStoreID",i.default.meta.appleStore.id.podcasts),e}return t=_,(n=[{key:"model",value:(l=regeneratorRuntime.mark((function e(t){var n,o,i,a,l,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.adamId,o=this.modelFor("storefront"),i=this.handleProductId(n),a={},(l=(0,r.getLanguageParam)(this.router.location.getURL(),!0))&&(a.l=l),e.next=8,this.podcastsApi.getChannel(o,i,a)
case 8:return u=e.sent,e.abrupt("return",{storefront:o,viewModel:u})
case 10:case"end":return e.stop()}}),e,this)})),y=function(){var e=this,t=arguments
return new Promise((function(r,n){var o=l.apply(e,t)
function i(e){p(o,r,n,i,a,"next",e)}function a(e){p(o,r,n,i,a,"throw",e)}i(void 0)}))},function(e){return y.apply(this,arguments)})},{key:"getMetricsPageDetails",value:function(e){return{pageDetails:e.name,pageId:e.id}}},{key:"getHeadTags",value:function(e){var t=e.viewModel,r=m(O(_.prototype),"getHeadTags",this).apply(this,arguments)
return(!t.product.showCount||t.product.showCount<2)&&(r.searchEngineIndexing=!1),r}},{key:"getKeywordsTag",value:function(e){var t=e.viewModel
return this.i18n.t("WEA.PodcastChannelPages.Meta.Keywords",{podcastChannelName:t.product.name})}},{key:"getTitle",value:function(e){var t=e.viewModel
return this.i18n.t(this.titleKey,{podcastChannelName:t.product.name,_disableSafeString:!0})}},{key:"getDescription",value:function(e){var t,r=e.viewModel
return(0,o.truncateSEODescription)(null===(t=r.product.description)||void 0===t?void 0:t.standard)}},{key:"getOGSiteName",value:function(){return this.i18n.t("WEA.PodcastChannelPages.FB.siteName.podcast-channel",{_disableSafeString:!0})}},{key:"getFacebookAppLinkTagAppName",value:function(){return this.i18n.t("WEA.LocalNav.Store.Podcasts",{_disableSafeString:!0})}}])&&b(t.prototype,n),a&&b(t,a),Object.defineProperty(t,"prototype",{writable:!1}),_}(t.default),u=_(l.prototype,"fastboot",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=_(l.prototype,"router",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=_(l.prototype,"podcastsApi",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=j})),define("web-experience-app/routes/error-fitness",["exports","@ember/routing/route","@ember/service"],(function(e,t,r){var n,o,i
function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=s(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return d(this,r)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)})(d,e)
var t,r,n,s=f(d)
function d(){var e
l(this,d)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a(b(e=s.call.apply(s,[this].concat(r))),"fastboot",o,b(e)),a(b(e),"i18n",i,b(e)),y(b(e),"templateName","error-fitness"),y(b(e),"controllerName","error-fitness"),e}return t=d,(r=[{key:"getMetricsData",value:function(){return{pageType:"Error"}}},{key:"setupController",value:function(e,t){if(this.i18n.exists("WFA.Error.TryAgain")||this.i18n.addTranslations(this.i18n.locale,{"WFA.Error.TryAgain":"Try again","WFA.Error.AnErrorOccurred":"An error occurred","WFA.LearnMore.AppleFitness":"Learn more about Apple Fitness+"}),t){var r=t.errorCode&&["NETWORK_ERROR","REQUEST_ERROR","CONTENT_UNAVAILABLE"].includes(t.errorCode)||t.status&&[400,404,410].includes(t.status)
if(r)return this.intermediateTransitionTo("not-found-fitness",404)
if(this.fastboot.isFastBoot)throw t}c(m(d.prototype),"setupController",this).apply(this,arguments)}}])&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),d}(t.default),o=h(n.prototype,"fastboot",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=h(n.prototype,"i18n",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)
e.default=v})),define("web-experience-app/routes/not-found",["exports","web-experience-app/routes/base","@ember/service","@ember/object","web-experience-app/config","web-experience-app/utils/routing","web-experience-app/services/app-view-state"],(function(e,t,r,n,o,i,a){var l,u,c,s,p,f,d,b,m
function y(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=w(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=k(e)
if(t){var o=k(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return _(this,r)}}function _(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var A=(l=(0,r.inject)("location-wea"),u=(0,n.computed)("appViewState.currentState"),c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)})(c,e)
var t,r,l,u=P(c)
function c(){var e
h(this,c)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return y(j(e=u.call.apply(u,[this].concat(r))),"appViewState",s,j(e)),y(j(e),"fastboot",p,j(e)),y(j(e),"globalElements",f,j(e)),y(j(e),"locale",d,j(e)),y(j(e),"location",b,j(e)),y(j(e),"platform",m,j(e)),x(j(e),"preventConnectingLaunch",!1),x(j(e),"descriptionKeys",["WEA.Error.Generic.Meta.PageTitle"]),e}return t=c,(r=[{key:"titleKey",get:function(){switch(this.appViewState.currentState){case a.VIEW_STATES.APP:return"WEA.Error.Generic.Title.Apps"
case a.VIEW_STATES.PODCASTS:return"WEA.Error.Generic.Title.Podcasts"
case a.VIEW_STATES.BOOK:return"WEA.Error.Generic.Title.AppleBooks"
case a.VIEW_STATES.ITUNES:return"WEA.Error.Generic.Title.iTunes"
default:return"WEA.Error.Generic.Meta.PageTitle"}}},{key:"setupController",value:function(e){if(g(k(c.prototype),"setupController",this).apply(this,arguments),e.set("preventConnectingLaunch",this.preventAutoLaunch||this.hasAutoLaunched),!this.globalElements.isLoaded)return(0,n.setProperties)(this.globalElements,{languageCode:this.locale.defaultLocale,priceCurrency:o.default.defaultPriceCurrency,storefront:o.default.defaultStorefront}),this.globalElements.load()}},{key:"model",value:function(){return this.fastboot.isFastBoot?{}:{url:window.location.href}}},{key:"afterModel",value:function(e,t){var r=t.intent.url
return this._handleRedirect(e,r),g(k(c.prototype),"afterModel",this).apply(this,arguments)}},{key:"_processStorefrontedUrl",value:function(e){var t=this.globalElements.storefront||o.default.defaultStorefront
return e.replace("{sf}","/".concat(t.toLowerCase()))}},{key:"_processNativeLaunchUrl",value:function(e){var t=this,r=e.target
return e.platformTargets&&e.platformTargets.forEach((function(e){var n=e.platform,o=e.target
t.platform.get(n)&&(r=o)})),this._processStorefrontedUrl(r)}},{key:"_handleRedirect",value:function(e,t){var r=this.appViewState.currentState,n=(0,i.getNotFoundRedirect)(t,r)
if(r!==a.VIEW_STATES.BOOK||n||(n={target:e.url}),n&&!this.fastboot.isFastBoot){var l=!1,u=n.nativeLaunch,c=n.fallbackUrl
switch(r){case a.VIEW_STATES.APP:l=u?this.platform[u]:this.platform.couldHaveMacAppStore,c||(c="mas"===n.platform?o.default.macAppStoreUrl:o.default.iosAppStoreUrl)
break
case a.VIEW_STATES.BOOK:l=this.platform.couldHaveBookStore,c=o.default.appleBooksUrl
break
case a.VIEW_STATES.PODCASTS:l=this.platform.browser.isAtLeastMojavePlusOne,c=o.default.podcastsAppPageURL}l?e.url=this._processNativeLaunchUrl(n):c&&(this.preventAutoLaunch=!0,this.location.replace(this._processStorefrontedUrl(c)))}}},{key:"getHeadTags",value:function(){var e=g(k(c.prototype),"getHeadTags",this).apply(this,arguments)
return e.searchEngineIndexing=!1,e}}])&&v(t.prototype,r),l&&v(t,l),Object.defineProperty(t,"prototype",{writable:!1}),c}(t.default),s=T(c.prototype,"appViewState",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=T(c.prototype,"fastboot",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=T(c.prototype,"globalElements",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=T(c.prototype,"locale",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=T(c.prototype,"location",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=T(c.prototype,"platform",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T(c.prototype,"titleKey",[u],Object.getOwnPropertyDescriptor(c.prototype,"titleKey"),c.prototype),c)
e.default=A})),define("web-experience-app/routes/podcast-episode",["exports","web-experience-app/routes/product-with-see-all","web-experience-app/utils/query-params","@ember/service","web-experience-app/utils/ssr","ember","web-experience-app/config","web-experience-app/utils/duration","web-experience-app/utils/date-time","web-experience-app/utils/seo"],(function(e,t,r,n,o,i,a,l,u,c){var s,p,f,d,b,m
function y(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?y(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function g(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){v(i,n,o,a,l,"next",e)}function l(e){v(i,n,o,a,l,"throw",e)}a(void 0)}))}}function w(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=j(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=S(e)
if(t){var o=S(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return T(this,r)}}function T(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var M=i.default.DEFAULT_VALUE
function z(e){return e.length<13}function C(e){return(parseInt(e,"10")+1e12).toString()}var L={moreByArtist:"WEA.PodcastPages.MoreBy",topPodcasts:"WEA.PodcastPages.TopInCategory.Title"},I=(s=(0,n.inject)("media-api/podcasts"),p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)})(v,e)
var t,n,i,s,p,y=x(v)
function v(){var e
O(this,v)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return w(A(e=y.call.apply(y,[this].concat(r))),"audioPlayer",f,A(e)),w(A(e),"musickit",d,A(e)),w(A(e),"router",b,A(e)),w(A(e),"podcastsApi",m,A(e)),E(A(e),"queryParams",{i:{},temp:{},seeAll:{refreshModel:!0}}),E(A(e),"pageType","PodcastEpisode"),E(A(e),"facebookAppLinkAppStoreID",a.default.meta.appleStore.id.podcasts),E(A(e),"twitterCropCode","wp"),e}return t=v,(n=[{key:"beforeModel",value:(p=g(regeneratorRuntime.mark((function e(t){var r,n,i,a
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,o.isSSR)()){e.next=4
break}return e.next=3,this.musickit.load()
case 3:this.audioPlayer.load()
case 4:(r=t.to.queryParams).i&&z(r.i)&&(n=C(r.i),i=n,a=h(h({},r),{},{i:n}),this.router.replaceWith("podcast-episode",i,{queryParams:a}))
case 6:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"handleProductId",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.i||t.adamId}},{key:"getViewModel",value:(s=g(regeneratorRuntime.mark((function e(t,n,o,i){var a,l,u,c
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},(l=(0,r.getLanguageParam)(this.router.location.getURL(),!0))&&(a.l=l),e.prev=3,e.next=6,this.podcastsApi.getPodcastEpisode(t,n,a)
case 6:return u=e.sent,e.abrupt("return",u)
case 10:e.prev=10,e.t0=e.catch(3),c=i.to.queryParams.temp,this.router.transitionTo("podcast",o.name,c,{queryParams:{seeAll:M}})
case 14:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(e,t,r,n){return s.apply(this,arguments)})},{key:"handleCanonicalRedirects",value:function(){}},{key:"sectionTypeForComponent",value:function(e){return{reviews:"reviews",topPodcasts:"topPodcasts"}[e]||"lockup"}},{key:"typeFor",value:function(e){var t={moreByArtist:"moreByArtist.podcasts",topPodcasts:"chart.podcasts"}
return t[e]||_(S(v.prototype),"typeFor",this).apply(this,arguments)}},{key:"getHeadTags",value:function(e){var t=e.viewModel,r=_(S(v.prototype),"getHeadTags",this).apply(this,arguments),n=this._getCurrentQueryParams(),o=D(t.product.url,n)
return r.canonicalURL=o,r}},{key:"getFacebookAppLinkTags",value:function(e){var t=e.viewModel,r=_(S(v.prototype),"getFacebookAppLinkTags",this).apply(this,arguments),n=this._getCurrentQueryParams(),o=D(t.product.url,n),i=this.platform.schemeForURL(o,{isAndroid:!1,isMobile:!0}),a=r.find((function(e){return"al:ios:url"===e.name}))
return a?a.content=i:r.push({name:"al:ios:url",content:i}),r}},{key:"getOpenGraphTags",value:function(e){var t=e.viewModel,r=_(S(v.prototype),"getOpenGraphTags",this).apply(this,arguments),n=this._getCurrentQueryParams(),o=D(t.product.url,n),i=r.find((function(e){return"og:url"===e.name}))
return i?i.content=o:r.push({name:"og:url",content:o}),r}},{key:"generateSeeAllHeader",value:function(e,t){var r,n,o=t.podcast.name,i=null===(r=t.mainArtist)||void 0===r?void 0:r.name,a=null===(n=t.primaryGenre)||void 0===n?void 0:n.name
return{parts:{sectionTitle:this.i18n.t(L[e],{podcastArtist:i,categoryName:a}),productName:o}}}},{key:"getDescription",value:function(e){var t=e.viewModel.product,r=(void 0===t?{}:t).description,n=void 0===r?{}:r,o=n.standard||n.short
return(0,c.truncateSEODescription)(o)}},{key:"getFacebookAppLinkTagAppName",value:function(){return this.i18n.t("WEA.LocalNav.Store.Podcasts",{_disableSafeString:!0})}},{key:"getTitle",value:function(e){var t=e.viewModel
return this.paramsFor("podcast-episode").seeAll?_(S(v.prototype),"getTitle",this).apply(this,arguments):this.i18n.t("WEA.PodcastEpisodePages.Meta.Title",{podcastShowName:t.podcast.name,episodeName:t.product.name,_disableSafeString:!0})}},{key:"getOGDescription",value:function(e){var t,r=e.viewModel,n=(0,u.formatDate)(r.product.releaseDateTime,this.i18n.locale),o=r.product.name,i=null===(t=r.podcast)||void 0===t?void 0:t.name
return this.i18n.t("WEA.PodcastEpisodePages.Meta.Description",{podcastShowName:i,episodeName:o,publishedDate:n,_disableSafeString:!0})}},{key:"getKeywordsTag",value:function(e){var t,r=e.viewModel
return this.i18n.t("WEA.PodcastEpisodePages.PageKeywords",{episodeName:r.product.name,podcastShowName:null===(t=r.podcast)||void 0===t?void 0:t.name,_disableSafeString:!0})}},{key:"getOGSiteName",value:function(){return this.i18n.t("WEA.PodcastEpisodePages.FB.siteName.podcast-episode",{_disableSafeString:!0})}},{key:"getOGType",value:function(){return a.default.meta.og.type.podcast.episode}},{key:"getOGCropCode",value:function(){return"wp"}},{key:"getSchemaTags",value:function(e){var t,r=e.viewModel,n=r.product,o=r.podcast,i=(0,u.formatDate)(n.releaseDateTime,this.i18n.locale),a={"@context":"http://schema.org","@type":"AudioObject",name:n.name,creator:n.artistName,description:this.getDescription.apply(this,arguments),datePublished:i,duration:(0,l.isoDuration)((null!==(t=n.durationInMilliseconds)&&void 0!==t?t:0)/1e3),isPartOf:o.name,offers:[{"@type":"Offer",price:"Free"}]}
return[{name:"schema:podcast-episode",content:JSON.stringify(a)}]}},{key:"_getCurrentQueryParams",value:function(){return(0,o.isSSR)()?this.fastboot.request.queryParams:(0,r.getClientSideQueryParams)()}}])&&P(t.prototype,n),i&&P(t,i),Object.defineProperty(t,"prototype",{writable:!1}),v}(t.default),f=R(p.prototype,"audioPlayer",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=R(p.prototype,"musickit",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=R(p.prototype,"router",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=R(p.prototype,"podcastsApi",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p)
function D(e,t){var n
if(t.i&&!(0,r.hasQP)(e,"i")&&(n="i=".concat(t.i)),n){var o=e.includes("?")?"&":"?"
return"".concat(e).concat(o).concat(n)}return e}e.default=I})),define("web-experience-app/routes/podcast",["exports","web-experience-app/routes/product-with-see-all","web-experience-app/utils/query-params","@ember/service","@ember/string","web-experience-app/config","web-experience-app/utils/date-time","web-experience-app/utils/duration","web-experience-app/utils/seo"],(function(e,t,r,n,o,i,a,l,u){var c,s,p,f,d,b,m
function y(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function h(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){y(i,n,o,a,l,"next",e)}function l(e){y(i,n,o,a,l,"throw",e)}a(void 0)}))}}function v(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=P(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=T(e)
if(t){var o=T(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return k(this,r)}}function k(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var E=(c=(0,n.inject)("media-api/podcasts"),s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)})(y,e)
var t,n,o,l,c,s=j(y)
function y(){var e
g(this,y)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return v(x(e=s.call.apply(s,[this].concat(r))),"audioPlayer",p,x(e)),v(x(e),"fastboot",f,x(e)),v(x(e),"musickit",d,x(e)),v(x(e),"router",b,x(e)),v(x(e),"podcastsApi",m,x(e)),A(x(e),"pageType","Podcast"),A(x(e),"titleKey","WEA.PodcastPages.Meta.Title"),A(x(e),"facebookAppLinkAppStoreID",i.default.meta.appleStore.id.podcasts),A(x(e),"twitterCropCode","wp"),e}return t=y,(n=[{key:"beforeModel",value:(c=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.fastboot.isFastBoot){e.next=4
break}return e.next=3,this.musickit.load()
case 3:this.audioPlayer.load()
case 4:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"getViewModel",value:(l=h(regeneratorRuntime.mark((function e(t,n){var o,i
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},(i=(0,r.getLanguageParam)(this.router.location.getURL(),!0))&&(o.l=i),e.abrupt("return",this.podcastsApi.getPodcast(t,n,o))
case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return l.apply(this,arguments)})},{key:"getTitle",value:function(e){var t=e.viewModel
return this.paramsFor("podcast").seeAll?O(T(y.prototype),"getTitle",this).apply(this,arguments):this.i18n.t(this.titleKey,{podcastShowName:t.product.name,_disableSafeString:!0})}},{key:"getDescription",value:function(e){var t=e.viewModel.product.description,r=void 0===t?{}:t,n=r.standard||r.short
return(0,u.truncateSEODescription)(n)}},{key:"getFacebookAppLinkTagAppName",value:function(){return this.i18n.t("WEA.LocalNav.Store.Podcasts",{_disableSafeString:!0})}},{key:"getOGDescription",value:function(e){var t=e.viewModel,r=t.product,n=t.primaryGenre,o=(0,a.formatDate)(r.releaseDateTime,this.i18n.locale,a.FORMATS.YEAR)
return this.i18n.t("WEA.Common.DotSeparator",{string1:null==n?void 0:n.name,string2:o,_disableSafeString:!0})}},{key:"getKeywordsTag",value:function(e){var t,r=e.viewModel
return this.i18n.t("WEA.PodcastPages.PageKeywords",{podcastShowName:r.product.name,artistName:null===(t=r.mainArtist)||void 0===t?void 0:t.name})}},{key:"getOGSiteName",value:function(){return this.i18n.t("WEA.PodcastPages.FB.siteName.show",{_disableSafeString:!0})}},{key:"getOGType",value:function(){return i.default.meta.og.type.podcast.show}},{key:"getOGCropCode",value:function(){return"wp"}},{key:"twitter:descriptionContent",get:function(){return this["og:descriptionContent"]}},{key:"getSchemaTags",value:function(e){var t,r=e.viewModel,n=r.product,o=n.reviews,i=void 0===o?[]:o,l=n.episodes,u=void 0===l?[]:l,c=n.releaseDateTime,s=this.i18n.locale,p={"@context":"http://schema.org","@type":"CreativeWork",name:n.name,author:n.artistName,description:this.getDescription.apply(this,arguments),datePublished:(0,a.formatDate)(c,s),offers:[{"@type":"Offer",price:"Free"}],review:i.map((function(e){return M(e,s)})),workExample:u.map((function(e){return R(e,s)}))}
return(null===(t=n.userRating)||void 0===t?void 0:t.ratingCount)>0&&(p.aggregateRating={"@type":"AggregateRating",ratingValue:n.userRating.value,reviewCount:n.userRating.ratingCount}),[{name:"schema:podcast-show",content:JSON.stringify(p)}]}},{key:"generateSeeAllHeader",value:function(e,t){var r,n,o,i
switch(e){case"reviews":i=this.i18n.t("WEA.PodcastPages.CustomerReviews.Title")
break
case"topPodcasts":i=this.i18n.t("WEA.PodcastPages.TopInCategory.Title",{categoryName:null===(r=t.primaryGenre)||void 0===r?void 0:r.name})
break
case"moreByArtist":i=this.i18n.t("WEA.PodcastPages.MoreBy",{podcastArtist:null===(n=t.product.artists)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.name})
break
case"listenersAlsoSubscribed":i=this.i18n.t("WEA.PodcastPages.ListenersAlsoSubscribed")}return{parts:{sectionTitle:i,productName:t.product.name}}}},{key:"typeFor",value:function(e){var t={listenersAlsoSubscribed:"podcast",moreByArtist:"moreByArtist.podcasts",topPodcasts:"chart.podcasts"}
return t[e]||O(T(y.prototype),"typeFor",this).apply(this,arguments)}},{key:"sectionTypeForComponent",value:function(e){return{reviews:"reviews",topPodcasts:"topPodcasts"}[e]||"lockup"}}])&&w(t.prototype,n),o&&w(t,o),Object.defineProperty(t,"prototype",{writable:!1}),y}(t.default),p=S(s.prototype,"audioPlayer",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=S(s.prototype,"fastboot",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=S(s.prototype,"musickit",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=S(s.prototype,"router",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=S(s.prototype,"podcastsApi",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)
function R(e,t){var r=e.durationInMilliseconds,n=void 0===r?0:r,i=e.mediaKind,u=e.name,c=e.releaseDateTime,s=e.description,p=void 0===s?{}:s
return void 0===u?{}:{"@type":"".concat((0,o.capitalize)(i),"Object"),name:u,datePublished:(0,a.formatDate)(c,t),description:p.standard||p.short,duration:(0,l.isoDuration)(n),requiresSubscription:"no"}}function M(e,t){var r=e.body,n=e.date,o=e.rating,i=e.title,l=e.userName
if(i&&l)return{"@type":"Review",author:l,datePublished:(0,a.formatDate)(n,t),name:i,reviewBody:r,reviewRating:{"@type":"Rating",ratingValue:o}}}e.default=E})),define("web-experience-app/routes/product-with-see-all",["exports","web-experience-app/routes/base","@ember/service","web-experience-app/utils/seo","@ember/string","ember-inflector","@ember/debug"],(function(e,t,r,n,o,i,a){var l,u,c,s,p,f,d
function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return m(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function y(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function h(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){y(i,n,o,a,l,"next",e)}function l(e){y(i,n,o,a,l,"throw",e)}a(void 0)}))}}function v(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=P(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=T(e)
if(t){var o=T(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return k(this,r)}}function k(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var E=(l=(0,r.inject)("location-wea"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)})(y,e)
var t,r,a,l,u,m=j(y)
function y(){var e
g(this,y)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return v(x(e=m.call.apply(m,[this].concat(r))),"fastboot",c,x(e)),v(x(e),"location",s,x(e)),v(x(e),"appViewState",p,x(e)),v(x(e),"routerState",f,x(e)),v(x(e),"localNav",d,x(e)),A(x(e),"queryParams",{seeAll:{refreshModel:!0}}),A(x(e),"metricsData",null),A(x(e),"pageType",""),e}return t=y,(r=[{key:"beforeModel",value:function(e){this.routerState.setupLoadingState(e),this._localNavLinks=this.localNav.getLinks()}},{key:"model",value:(u=h(regeneratorRuntime.mark((function e(t,r){var n,o,i,a,l,u,c,s,p,f,d
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.seeAll,i=t.adamId,a=null===(n=this.modelFor("storefront"))||void 0===n?void 0:n.toLowerCase(),l=this.handleProductId(i,t),e.next=5,this.getViewModel(a,l,t,r)
case 5:if(u=e.sent,o){e.next=8
break}return e.abrupt("return",{viewModel:u,storefront:a})
case 8:return c=this.normalizeItemsType(o),s=this.typeFor(c,u),p=this.sectionTypeForComponent(c),f=this.generateSeeAllHeader(c,u),d=u[c]||[],e.abrupt("return",{viewModel:u,storefront:a,seeAllData:{header:f,items:d,seeAllModelType:s,sectionType:c,seeAll:o,seeAllSectionType:p}})
case 14:case"end":return e.stop()}}),e,this)}))),function(e,t){return u.apply(this,arguments)})},{key:"afterModel",value:(l=h(regeneratorRuntime.mark((function e(t,r){var n,o,i
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._localNavLinks
case 2:return this.routerState.clearLoadingState(),this.updateMetricsBase(t,r),this.appViewState.set("currentModel",t),i=(null===(n=r.to)||void 0===n||null===(o=n.queryParams)||void 0===o?void 0:o.app)||this.appViewState.requestedApp,this.appViewState.set("requestedApp",i),this._checkLaunchNative(t,r),e.next=10,this.globalElements.load()
case 10:return e.abrupt("return",this.handleCanonicalRedirects(t,r))
case 11:case"end":return e.stop()}}),e,this)}))),function(e,t){return l.apply(this,arguments)})},{key:"updateMetricsBase",value:function(e,t){return O(T(y.prototype),"updateMetricsBase",this).call(this,e.viewModel.product,t)}},{key:"handleCanonicalRedirects",value:function(e,t){var r=e.viewModel
if(!t.to||!t.from)return r.product&&r.product.url?(0,n.handleCanonicalRedirects)(this,r.product.url):void 0}},{key:"_shouldLaunchNativeClient",value:function(e,t){return O(T(y.prototype),"_shouldLaunchNativeClient",this).call(this,e.viewModel.product,t)}},{key:"getNativeClientLaunchURL",value:function(e){return O(T(y.prototype),"getNativeClientLaunchURL",this).call(this,e.viewModel.product)}},{key:"getAppleContentID",value:function(e){return e.viewModel.product.id}},{key:"getOGDescription",value:function(){return this.getDescription.apply(this,arguments)}},{key:"getOGImageTags",value:function(){var e=O(T(y.prototype),"getOGImageTags",this).apply(this,arguments),t=e.find((function(e){return"og:image"===e.name}))
if(!t)return e
var r=e.find((function(e){return"og:image:alt"===e.name})),n=this.getTitle.apply(this,arguments)
return r?r.content=n:e.push({name:"og:image:alt",content:n}),e}},{key:"getTitle",value:function(e){if(!this.paramsFor(this.routeName).seeAll)return this.i18n.t(this.titleKey)
var t=e.seeAllData.header
return t.full?t.full:t.parts?this.i18n.t("WEA.Common.SeeAll.Title.Generic",{parentName:t.parts.productName,sectionTitle:t.parts.sectionTitle,_disableSafeString:!0}):void 0}},{key:"getOGTitle",value:function(){return this.getTitle.apply(this,arguments)}},{key:"getCanonicalUrl",value:function(e){return e.viewModel.product.url}},{key:"getOpenGraphTags",value:function(e){var t,r=e.viewModel,n=Array.prototype.slice.call(arguments)
n.pop(),n.push(r.product.url)
var o=(t=O(T(y.prototype),"getOpenGraphTags",this)).call.apply(t,[this].concat(b(n)))
return o}},{key:"getArtwork",value:function(e){var t=e.viewModel
return O(T(y.prototype),"getArtwork",this).call(this,t.product)}},{key:"getTwitterTitle",value:function(){return this.getTitle.apply(this,arguments)}},{key:"getTwitterImageAlt",value:function(e){var t=e.viewModel,r=this.getTitle.apply(this,arguments)
return r||t.product.name}},{key:"getFacebookAppLinkTags",value:function(e){var t=e.viewModel
return O(T(y.prototype),"getFacebookAppLinkTags",this).call(this,t.product)}},{key:"handleProductId",value:function(e){return e.replace(/^id/,"")}},{key:"generateSeeAllHeader",value:function(){throw new Error("You must implement generateSeeAllHeader to determine the header for the display.")}},{key:"getViewModel",value:function(){throw new Error("Implement this method in subclass")}},{key:"typeFor",value:function(e){var t=e.split("top"),r=t[t.length-1]
return r=(0,i.singularize)(r),(0,o.dasherize)(r)}},{key:"normalizeItemsType",value:function(e){return(0,o.camelize)(e)}}])&&w(t.prototype,r),a&&w(t,a),Object.defineProperty(t,"prototype",{writable:!1}),y}(t.default),c=S(u.prototype,"fastboot",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=S(u.prototype,"location",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=S(u.prototype,"appViewState",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=S(u.prototype,"routerState",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=S(u.prototype,"localNav",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=E})),define("web-experience-app/routes/product",["exports","@ember/routing/route","rsvp","@ember/service","web-experience-app/utils/seo","@ember/application","@ember/debug"],(function(e,t,r,n,o,i,a){var l,u,c,s,p,f
function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return b(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function m(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function y(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=w(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=k(e)
if(t){var o=k(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return _(this,r)}}function _(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var T=(l=(0,n.inject)("location-wea"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)})(w,e)
var t,n,a,l,u,b=P(w)
function w(){var e
return h(this,w),y(j(e=b.apply(this,arguments)),"fastboot",c,j(e)),y(j(e),"appViewState",s,j(e)),y(j(e),"routerState",p,j(e)),y(j(e),"location",f,j(e)),e}return t=w,(n=[{key:"beforeModel",value:function(e){this.routerState.setupLoadingState(e)}},{key:"afterModel",value:function(){return this.routerState.clearLoadingState(),g(k(w.prototype),"afterModel",this).apply(this,arguments),this.handleCanonicalRedirects.apply(this,arguments)}},{key:"handleCanonicalRedirects",value:function(e){if(e&&e.model)return(0,o.handleCanonicalRedirects)(this,e.model.url)}},{key:"setAppViewStateForNonUTSId",value:function(){this.appViewState.reset()}},{key:"handleProductId",value:function(e){return this.setAppViewStateForNonUTSId(),e.replace(/^id/,"")}},{key:"getModelType",value:function(e){return"product/".concat(e)}},{key:"getRecord",value:function(e,t,r){return(0,i.getOwner)(this).lookup("service:store").findRecord(e,t,r)}},{key:"model",value:(l=regeneratorRuntime.mark((function e(t,n){var o,i,a,l,u,c,s,p,f=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.adamId,e.next=3,g(k(w.prototype),"model",this).apply(this,f)
case 3:return i=n.targetName.split("."),a=d(i,1),l=a[0],u=this.modelFor("storefront"),c=this.handleProductId(o),s=this.getModelType(l,o),e.next=9,this.getRecord(s,c,{adapterOptions:{transition:n}})
case 9:return p=e.sent,e.abrupt("return",(0,r.hash)({storefront:u,model:p}))
case 11:case"end":return e.stop()}}),e,this)})),u=function(){var e=this,t=arguments
return new Promise((function(r,n){var o=l.apply(e,t)
function i(e){m(o,r,n,i,a,"next",e)}function a(e){m(o,r,n,i,a,"throw",e)}i(void 0)}))},function(e,t){return u.apply(this,arguments)})},{key:"setupController",value:function(e,t){g(k(w.prototype),"setupController",this).apply(this,arguments),e.setProperties(t)}}])&&v(t.prototype,n),a&&v(t,a),Object.defineProperty(t,"prototype",{writable:!1}),w}(t.default),c=x(u.prototype,"fastboot",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=x(u.prototype,"appViewState",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=x(u.prototype,"routerState",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=x(u.prototype,"location",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=T})),define("web-experience-app/routes/see-all-error",["exports","@ember/routing/route"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var o=c(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)})(s,e)
var t,n,u,c=l(s)
function s(){return o(this,s),c.apply(this,arguments)}return t=s,(n=[{key:"activate",value:function(){var e=r(this.fullRouteName.split(/\.\w+$/),1)[0]
this.router.transitionTo(e,this.modelFor(e))}}])&&i(t.prototype,n),u&&i(t,u),Object.defineProperty(t,"prototype",{writable:!1}),s}(t.default)
e.default=s})),define("web-experience-app/routes/storefront",["exports","@ember/routing/route","web-experience-app/utils/routing","@ember/service","rsvp"],(function(e,t,r,n,o){var i,a
function l(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=p(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h,v,g,w,O,P,_=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(b,e)
var t,n,i,p=d(b)
function b(){var e
u(this,b)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return l(m(e=p.call.apply(p,[this].concat(r))),"metrics",a,m(e)),e}return t=b,(n=[{key:"model",value:function(e){var t=e.storefrontId
return-1!==[r.ABSENT_SIGIL,r.EMPTY_SIGIL].indexOf(t)?"us":t}},{key:"afterModel",value:function(e){var t=this
return(0,o.resolve)(s(y(b.prototype),"afterModel",this).apply(this,arguments)).then((function(){t.metrics.addBaseData({storeFront:e})}))}}])&&c(t.prototype,n),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),b}(t.default),h=i.prototype,v="metrics",g=[n.inject],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},P={},Object.keys(w).forEach((function(e){P[e]=w[e]})),P.enumerable=!!P.enumerable,P.configurable=!!P.configurable,("value"in P||P.initializer)&&(P.writable=!0),P=g.slice().reverse().reduce((function(e,t){return t(h,v,e)||e}),P),O&&void 0!==P.initializer&&(P.value=P.initializer?P.initializer.call(O):void 0,P.initializer=void 0),void 0===P.initializer&&(Object.defineProperty(h,v,P),P=null),a=P,i)
e.default=_})),define("web-experience-app/services/app-view-state",["exports","@ember/service","@ember/object","@ember/utils","web-experience-app/config/routing","@apple/babel-plugin-feature-remover"],(function(e,t,r,n,o,i){var a,l,u,c,s,p,f,d,b,m,y,h,v,g
function w(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=T(e)
if(t){var o=T(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return k(this,r)}}function k(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.VIEW_STATES=e.METRICS_CONTEXT=e.LOGO_FOR_STATE=void 0
var E={APP:"apps",APPLE_MUSIC:"music",BOOK:"books",DESKTOP:"mac",ITUNES:"itunes",PODCASTS:"podcasts",FITNESS:"fitness"}
e.VIEW_STATES=E
var R={[E.APP]:"apps",[E.BOOK]:"books",[E.ITUNES]:"music-note",[E.PODCASTS]:"podcasts"}
e.LOGO_FOR_STATE=R
var M={[E.APP]:"AppStore",[E.DESKTOP]:"MacStore",[E.ITUNES]:"iTunes",[E.PODCASTS]:"Podcasts",[E.BOOK]:"Books"}
e.METRICS_CONTEXT=M
var z=(a=(0,t.inject)("location-wea"),l=(0,r.computed)("_staticAppState","requestedApp","location.pathname"),u=(0,r.computed)("currentState"),c=(0,r.computed)("currentState"),s=(0,r.computed)("currentState"),p=(0,r.computed)("currentState"),f=(0,r.computed)("currentState"),d=(0,r.computed)("isiTunesView","currentModel.hasBuyPreview"),b=(0,r.computed)("isiTunesView","currentState","currentModel.buyPreviewUrl"),m=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)})(a,e)
var t,n,o,i=j(a)
function a(){var e
O(this,a)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return w(x(e=i.call.apply(i,[this].concat(r))),"platform",y,x(e)),w(x(e),"metrics",h,x(e)),w(x(e),"location",v,x(e)),w(x(e),"localNav",g,x(e)),A(x(e),"requestedApp",null),A(x(e),"currentModel",null),A(x(e),"_staticAppState",null),e}return t=a,(n=[{key:"currentState",get:function(){if(null!==this._staticAppState)return this._staticAppState
var e=this.location.pathname
return"itms"===(this.platform.schemeObjectForURL(e)||{}).scheme?E.ITUNES:E.PODCASTS}},{key:"isiTunesView",get:function(){return this.currentState===E.ITUNES}},{key:"isBookView",get:function(){return this.currentState===E.BOOK}},{key:"isAppStoreView",get:function(){return this.currentState===E.APP}},{key:"isMacAppStoreView",get:function(){return this.currentState===E.DESKTOP}},{key:"isPodcastsView",get:function(){return this.currentState===E.PODCASTS}},{key:"setiTunesOverride",value:function(){(0,r.set)(this,"_staticAppState",E.ITUNES)}},{key:"setAppStoreOverride",value:function(){(0,r.set)(this,"_staticAppState",E.APP)}},{key:"setMacAppStoreOverride",value:function(){(0,r.set)(this,"_staticAppState",E.DESKTOP)}},{key:"setBookOverride",value:function(){(0,r.set)(this,"_staticAppState",E.BOOK)}},{key:"isAvailableOnAppleMusic",get:function(){return this.currentModel.isAvailableOnAppleMusic}},{key:"isAvailableOniTunes",get:function(){return this.currentModel.isAvailableOniTunes}},{key:"hasPreview",get:function(){return this.isiTunesView&&this.currentModel.hasBuyPreview}},{key:"previewUrl",get:function(){return this.isiTunesView?this.currentModel.buyPreviewUrl:""}},{key:"reset",value:function(){(0,r.setProperties)(this,{requestedApp:null,currentModel:null,_staticAppState:null})}},{key:"updateModel",value:function(e,t){(0,r.setProperties)(this,{currentModel:e,requestedApp:t})}},{key:"updateMetricsContext",value:function(){this.metrics.addBaseData({pageContext:M[this.currentState]})}},{key:"updateKeyForAppState",value:function(e){return this.isBookView?"".concat(e,".Books"):this.isiTunesView?"".concat(e,".iTunes"):this.isAppStoreView||this.isMacAppStoreView?"".concat(e,".AppStore"):this.isPodcastsView?"".concat(e,".Podcasts"):"".concat(e,".AM")}}])&&P(t.prototype,n),o&&P(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(t.default),y=S(m.prototype,"platform",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=S(m.prototype,"metrics",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=S(m.prototype,"location",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=S(m.prototype,"localNav",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S(m.prototype,"currentState",[l],Object.getOwnPropertyDescriptor(m.prototype,"currentState"),m.prototype),S(m.prototype,"isiTunesView",[u],Object.getOwnPropertyDescriptor(m.prototype,"isiTunesView"),m.prototype),S(m.prototype,"isBookView",[c],Object.getOwnPropertyDescriptor(m.prototype,"isBookView"),m.prototype),S(m.prototype,"isAppStoreView",[s],Object.getOwnPropertyDescriptor(m.prototype,"isAppStoreView"),m.prototype),S(m.prototype,"isMacAppStoreView",[p],Object.getOwnPropertyDescriptor(m.prototype,"isMacAppStoreView"),m.prototype),S(m.prototype,"isPodcastsView",[f],Object.getOwnPropertyDescriptor(m.prototype,"isPodcastsView"),m.prototype),S(m.prototype,"hasPreview",[d],Object.getOwnPropertyDescriptor(m.prototype,"hasPreview"),m.prototype),S(m.prototype,"previewUrl",[b],Object.getOwnPropertyDescriptor(m.prototype,"previewUrl"),m.prototype),m)
e.default=z})),define("web-experience-app/services/audio-player",["exports","@ember/service","@ember/debug","rsvp","@glimmer/tracking","@ember/object"],(function(e,t,r,n,o,i){var a,l,u,c,s,p,f,d,b,m,y,h,v,g,w
function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return P(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function _(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=A(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=z(e)
if(t){var o=z(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return R(this,r)}}function R(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var I=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)})(P,e)
var t,o,i,a=E(P)
function P(){var e
k(this,P)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return j(M(e=a.call.apply(a,[this].concat(r))),"fastboot",l,M(e)),j(M(e),"globalElements",u,M(e)),j(M(e),"musickit",c,M(e)),j(M(e),"appViewState",s,M(e)),j(M(e),"router",p,M(e)),j(M(e),"isPlaying",f,M(e)),j(M(e),"isPaused",d,M(e)),j(M(e),"isStopped",b,M(e)),j(M(e),"_isWaiting",m,M(e)),j(M(e),"isSeeking",y,M(e)),j(M(e),"_isLoading",h,M(e)),j(M(e),"nowPlayingItem",v,M(e)),j(M(e),"playbackTime",g,M(e)),j(M(e),"playbackTimeRemaining",w,M(e)),C(M(e),"_isLoaded",!1),e}return t=P,(o=[{key:"isLoading",get:function(){return this._isLoading||this._isWaiting}},{key:"_musickitInstance",get:function(){return this.musickit.api}},{key:"player",get:function(){return this._musickitInstance}},{key:"load",value:function(){if(!this.fastboot.isFastBoot&&!this._isLoaded){var e=this._musickitInstance,t=void 0===e?{}:e,r=this.musickit.Events
t.addEventListener(r.mediaItemStateDidChange,this._onMediaItemStateDidChange),t.addEventListener(r.playbackStateDidChange,this._onPlaybackStateChange),t.addEventListener(r.playbackTimeDidChange,this._onPlaybackProgressChange),t.previewOnly=!this.appViewState.isPodcastsView,this._isLoaded=!0}}},{key:"willDestroy",value:function(){if(T(z(P.prototype),"willDestroy",this).apply(this,arguments),!this.fastboot.isFastBoot){var e=this._musickitInstance,t=void 0===e?{}:e,r=this.musickit.Events
t&&this._isLoaded&&(t.removeEventListener(r.mediaItemStateDidChange,this._onMediaItemStateDidChange),t.removeEventListener(r.playbackStateDidChange,this._onPlaybackStateChange),t.removeEventListener(r.playbackTimeDidChange,this._onPlaybackProgressChange))}}},{key:"prepareTransition",value:function(){this.isStopped||((0,r.debug)("[media-player] Stopping audio playback due to page transition"),this.stop(),this.nowPlayingItem=null)}},{key:"seekBackward",value:function(){return this._handlePlayerAction(this.player.seekBackward())}},{key:"seekForward",value:function(){return this._handlePlayerAction(this.player.seekForward())}},{key:"seekToTime",value:function(e){return this._handlePlayerAction(this.player.seekToTime(e))}},{key:"stop",value:function(){if(this.isPlaying||this.isPaused)return this._handlePlayerAction(this.player.stop())}},{key:"buildAudioBookQueue",value:function(e){return this._buildQueue(e.id,"audioBook")}},{key:"buildPodcastQueue",value:function(e){return this._buildQueue(e.id,"podcast")}},{key:"buildPodcastEpisodesQueue",value:function(e){return this._buildQueue(e,"items")}},{key:"buildSongsQueue",value:function(e){var t=e.map((function(e){return e.id}))
return this._buildQueue(t,"songs")}},{key:"isPlayingCollection",value:function(e){return this.player.queue===e}},{key:"togglePlaybackCollection",value:function(e){var t=function(e,t){for(var r=0;r<e.length;r++)if(t(e[r],r,e))return e[r]}(e.items,(function(e){return e.isPlayable}))
if(t)return this.togglePlayback(e,t,!0)}},{key:"togglePlayback",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this.player,o=this.isPlayingCollection(e),i=n.nowPlayingItem&&t&&n.nowPlayingItem.id===t.id,a=o&&(!t||i)
return n.continuous=r,this.isPlaying&&a?this._handlePlayerAction(n.pause()):this.isPaused&&a?this._handlePlayerAction(n.play()):(o||(n.queue=e),t?this._handlePlayerAction(n.changeToMediaItem(t.id)):this._handlePlayerAction(n.play()))}},{key:"_onMediaItemStateDidChange",value:function(e){if(!this.nowPlayingItem||this.nowPlayingItem.id!==e.id){this.isPlaying=!1,this.playbackTimeRemaining=0,this.playbackTime=0
var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?_(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)
this.nowPlayingItem=t}}},{key:"_onPlaybackStateChange",value:function(){var e={isPlaying:!1,isPaused:!1,isSeeking:!1,isStopped:!1,_isWaiting:!1,_isLoading:!1},t=this.musickit.PlaybackStates
switch(this.player.playbackState){case t.playing:e.isPlaying=!0
break
case t.paused:e.isPaused=!0
break
case t.seeking:e.isSeeking=!0
break
case t.stopped:e.isStopped=!0
break
case t.waiting:e._isWaiting=!0
break
case t.loading:e._isLoading=!0}for(var r=0,n=Object.entries(e);r<n.length;r++){var o=O(n[r],2),i=o[0],a=o[1]
this[i]=a}}},{key:"_onPlaybackProgressChange",value:function(){this.playbackTimeRemaining=this.player.currentPlaybackTimeRemaining,this.playbackTime=this.player.currentPlaybackTime}},{key:"_onError",value:function(e){e&&e.description&&this._generateError(e.description)}},{key:"_buildQueue",value:function(e,t){return this.fastboot.isFastBoot?(0,n.resolve)([]):(0,n.resolve)(this.musickit.setQueue(e,t))}},{key:"_handlePlayerAction",value:function(e){return e&&e.catch&&e.catch(this._onError),e}},{key:"_generateError",value:function(e){this.fastboot.isFastBoot||window.alert(e)}}])&&x(t.prototype,o),i&&x(t,i),Object.defineProperty(t,"prototype",{writable:!1}),P}(t.default),l=L(a.prototype,"fastboot",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=L(a.prototype,"globalElements",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=L(a.prototype,"musickit",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=L(a.prototype,"appViewState",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=L(a.prototype,"router",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=L(a.prototype,"isPlaying",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=L(a.prototype,"isPaused",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=L(a.prototype,"isStopped",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=L(a.prototype,"_isWaiting",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),y=L(a.prototype,"isSeeking",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=L(a.prototype,"_isLoading",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v=L(a.prototype,"nowPlayingItem",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=L(a.prototype,"playbackTime",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),w=L(a.prototype,"playbackTimeRemaining",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),L(a.prototype,"_onMediaItemStateDidChange",[i.action],Object.getOwnPropertyDescriptor(a.prototype,"_onMediaItemStateDidChange"),a.prototype),L(a.prototype,"_onPlaybackStateChange",[i.action],Object.getOwnPropertyDescriptor(a.prototype,"_onPlaybackStateChange"),a.prototype),L(a.prototype,"_onPlaybackProgressChange",[i.action],Object.getOwnPropertyDescriptor(a.prototype,"_onPlaybackProgressChange"),a.prototype),L(a.prototype,"_onError",[i.action],Object.getOwnPropertyDescriptor(a.prototype,"_onError"),a.prototype),a)
e.default=I})),define("web-experience-app/services/charts/base",["exports","@ember/service","web-experience-app/utils/charts","web-experience-app/services/app-view-state","web-experience-app/config/charts","web-experience-app/config/environment","web-experience-app/utils/urls","web-experience-app/utils/query-params"],(function(e,t,r,n,o,i,a,l){var u,c,s,p,f,d,b,m
function y(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function h(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){y(i,n,o,a,l,"next",e)}function l(e){y(i,n,o,a,l,"throw",e)}a(void 0)}))}}function v(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=k(e)
if(t){var o=k(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return _(this,r)}}function _(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function T(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=r}}(e,S(e,t,"set"),r),r}function A(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,S(e,t,"get"))}function S(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}function E(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var R="has_paid_charts",M=(u=(0,t.inject)("location-wea"),m=new WeakMap,c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)})(z,e)
var t,u,c,y,_,k,S,E,M=P(z)
function z(){var e
g(this,z)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return v(j(e=M.call.apply(M,[this].concat(r))),"router",s,j(e)),v(j(e),"location",p,j(e)),v(j(e),"fastboot",f,j(e)),v(j(e),"i18n",d,j(e)),v(j(e),"mediaApi",b,j(e)),x(j(e),m,{writable:!0,value:!1}),e}return t=z,(u=[{key:"fetchData",value:(E=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw Error("Should not be called on the Base Service, call from Books or Apps Charts Services")
case 1:case"end":return e.stop()}}),e)}))),function(){return E.apply(this,arguments)})},{key:"getConfig",value:function(e){var t=this.getCurrentState()
return e&&(t=r.VIEW_STATE_AUDIOBOOK),o.default[o.VIEW_STATE_CHART_CONFIG[t]]}},{key:"generateSchemaTagContent",value:function(e,t){var r=e.chart,n=this._schemaForChart(e,r)
if(!n)return null
var o=this.getCurrentUrl()
return{"@context":"http://schema.org","@type":"ItemList",name:this._generateTitleForSchemaData(e.name,r,t),url:o,itemListOrder:"http://schema.org/ItemListOrderAscending",numberOfItems:n.length,mainEntityOfPage:o,itemListElement:n}}},{key:"getViewStateChartsLocKey",value:function(e){var t=this.getCurrentState()
if(t!==n.VIEW_STATES.BOOK&&t!==n.VIEW_STATES.APP)throw new Error("top charts view exist only for Books, Audiobooks & Apps")
var r=e?"AudioBooks":"Books"
return t===n.VIEW_STATES.BOOK?r:"Apps"}},{key:"getCurrentState",value:function(){var e=n.VIEW_STATES.BOOK
return"apps"===i.default.APP.buildVariant&&(e=n.VIEW_STATES.APP),e}},{key:"getCurrentUrl",value:function(){var e=this.location.href,t=this.location.hostname
return this.fastboot.isFastBoot&&(e="https://".concat(t).concat(this.fastboot.request.path)),e}},{key:"getCanonicalUrl",value:function(e){var t=e
return(t=(0,l.removeQPs)(t)).endsWith("/")&&(t=t.slice(0,t.length-1)),t}},{key:"hasPaidCharts",value:(S=h(regeneratorRuntime.mark((function e(t){var n,o,i,a,l
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A(this,m)){e.next=2
break}return e.abrupt("return",A(this,m))
case 2:if(n=this.getCurrentState(),!(o=this._getFromCache(R))||"boolean"!=typeof o){e.next=7
break}return T(this,m,o),e.abrupt("return",o)
case 7:return e.next=9,(0,r.getTopChartsApiCallInfo)(n,t,{limit:1})
case 9:return i=e.sent,e.next=12,this.getAPIResponses([i])
case 12:return a=e.sent,l=(0,r.getChartsListNormalized)(a[0],"books","epubBook"),o=l.some((function(e){return/paid/i.test(e.chart)})),this._putInCache(R,o),T(this,m,o),e.abrupt("return",o)
case 18:case"end":return e.stop()}}),e,this)}))),function(e){return S.apply(this,arguments)})},{key:"fetchNextPageTopCharts",value:(k=h(regeneratorRuntime.mark((function e(t){var n,o,i,a,l,u,c,s=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]&&s[1],o=this.getCurrentState(),i=(0,r.getChartsAndKind)(o,n),a=i.chartType,l=i.kind,e.next=5,this.getAPIResponses([{endpoint:t,apiParams:{}}])
case 5:return u=e.sent,c=(0,r.getChartsListNormalized)(u[0],a,l),e.abrupt("return",c&&1===c.length?c[0]:{})
case 8:case"end":return e.stop()}}),e,this)}))),function(e){return k.apply(this,arguments)})},{key:"_schemaForChart",value:function(e){var t=this
return 0===e.data.length?null:e.data.map((function(e,r){var n=t._schemaForAuthors(e.artistName)
return{position:r+1,"@type":"Book",name:e.name,url:e.url,author:1===n.length?n[0]:n}}))}},{key:"_schemaForAuthors",value:function(e){return e&&"string"==typeof e?e.split("&").map((function(e){return{"@type":"Person",name:e.trim()}})):[]}},{key:"_generateCacheKey",value:function(e,t){return Object.keys(t).reduce((function(e,r){return e+"-".concat(r,"-").concat(t[r])}),e)}},{key:"_getFromCache",value:function(e){return this.fastboot.shoebox.retrieve(e)}},{key:"_putInCache",value:function(e,t){var r=this.fastboot
r.isFastBoot&&r.shoebox.put(e,t)}},{key:"_generateTitleForSchemaData",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.i18n,o=r.genreTitle,i=r.isAudiobook,a=o?"".concat(o," - "):""
switch(a+=n.t("WEA.Charts.".concat(i?"AudioBooks":"Books",".Title")),t){case"top-free":a="".concat(a," (").concat(n.t("WEA.Common.Free"),")")
break
case"top-paid":a="".concat(a," (").concat(n.t("WEA.Common.Paid"),")")
break
default:a=i?"".concat(a," (").concat(n.t("WEA.Common.Paid"),")"):"".concat(a," (").concat(e,")")}return a}},{key:"getAPIResponses",value:(_=h(regeneratorRuntime.mark((function e(t,r){var n,o,i=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAPI(r)
case 2:return n=e.sent,o=t.map((function(e){var t=e.apiParams,r=e.endpoint,o=(0,a.generateMediaAPIUrl)(r,t,i.router.location.getURL(),n.language)
return n.request(o,t)})),e.prev=4,e.next=7,Promise.all(o)
case 7:return e.abrupt("return",e.sent)
case 10:return e.prev=10,e.t0=e.catch(4),console.error("Error retrieving chart data ".concat(e.t0.message)),e.abrupt("return",[])
case 14:case"end":return e.stop()}}),e,this,[[4,10]])}))),function(e,t){return _.apply(this,arguments)})},{key:"getAPI",value:(y=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw Error("Should not be called on the Base Service, call from Books or Apps Charts Services")
case 1:case"end":return e.stop()}}),e)}))),function(){return y.apply(this,arguments)})}])&&w(t.prototype,u),c&&w(t,c),Object.defineProperty(t,"prototype",{writable:!1}),z}(t.default),s=E(c.prototype,"router",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=E(c.prototype,"location",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=E(c.prototype,"fastboot",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=E(c.prototype,"i18n",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=E(c.prototype,"mediaApi",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)
e.default=M})),define("web-experience-app/services/charts/books",["exports","web-experience-app/services/charts/base","web-experience-app/utils/charts","web-experience-app/utils/errors","web-experience-app/utils/genres","web-experience-app/utils/routing","web-experience-app/services/app-view-state","@amp/media-api-legacy"],(function(e,t,r,n,o,i,a,l){function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function s(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function b(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){d(i,n,o,a,l,"next",e)}function l(e){d(i,n,o,a,l,"throw",e)}a(void 0)}))}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=v(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=P(e)
if(t){var o=P(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return O(this,r)}}function O(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CHARTS_LIST_SORT_ORDER=void 0
var _=["top-paid","top-paid-non-manga","top-paid-manga","top-free","top-free-non-manga","top-free-manga","nyt-fiction","nyt-non-fiction"]
e.CHARTS_LIST_SORT_ORDER=_
var j=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)})(O,e)
var t,c,s,f,d,v=w(O)
function O(){return m(this,O),v.apply(this,arguments)}return t=O,(c=[{key:"fetchData",value:(d=b(regeneratorRuntime.mark((function e(t){var r,o,a,l,u,c,s=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=s.length>1&&void 0!==s[1]?s[1]:{}).isAudiobook){e.next=7
break}return e.next=4,this.hasPaidCharts(t)
case 4:if(e.sent){e.next=7
break}throw new n.NotFoundError(t)
case 7:if(o.genreId&&o.genreId===i.ABSENT_SIGIL&&(o.genreId=null),a=this._generateCacheKey(t,o),l=this._getFromCache(a)){e.next=16
break}return u=this._getAPICalls(t,o),e.next=14,this.getAPIResponses(u)
case 14:c=e.sent,l=this._massageResponse(c,t,o)
case 16:return this._putInCache(a,l),e.abrupt("return",p({url:this.getCanonicalUrl((null===(r=l)||void 0===r?void 0:r.chartUrl)||this.getCurrentUrl(),o)},l))
case 18:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"_massageResponse",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.genreId,l=n.chartName,u=n.isAudiobook,c=(0,r.getChartsAndKind)(a.VIEW_STATES.BOOK,u),s=c.chartType,f=c.kind,d=(0,r.getChartsListNormalized)(e[0],s,f)
d.sort((function(e,t){return _.indexOf(e.chart)-_.indexOf(t.chart)}))
var b=(0,o.parseGenresModel)([e[1]]),m=b.genres,y=b.popularGenres,h=b.extraGenres;(u||l)&&(d=d[0]||[])
var v={chartsList:d,genres:m,popularGenres:y,extraGenres:h,storefront:t}
return p(p({},v),(0,r.findCurrentGenreDetails)(v,i))}},{key:"_getAPICalls",value:function(e,t){var n=t.isAudiobook,i=(0,r.getChartsAndKind)(a.VIEW_STATES.BOOK,n).chartType,l=n?[o.AUDIOBOOKS_GENRE_ID_STATIC]:[o.BOOKS_GENRE_ID_STATIC]
return[(0,r.getTopChartsApiCallInfo)(i,e,p(p({},t),{},{baseGenreIds:l}))].concat(u((0,o.getAllGenresApiCallInfo)(e,p(p({},t),{},{baseGenreIds:l}))))}},{key:"getCanonicalUrl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.chartName,n=t.genreId,i=["nyt-fiction","nyt-non-fiction"],a=h(P(O.prototype),"getCanonicalUrl",this).call(this,e)
return i.includes(r)||n===o.BOOKS_GENRE_ID_STATIC&&"top-free"===r?a:a.replace("/".concat(r),"")}},{key:"getAPI",value:(f=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.mediaApi.getRealm(l.Realm.AMPBooks))
case 1:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})}])&&y(t.prototype,c),s&&y(t,s),Object.defineProperty(t,"prototype",{writable:!1}),O}(t.default)
e.default=j})),define("web-experience-app/services/fastboot",["exports","ember-cli-fastboot/services/fastboot"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/global-elements",["exports","@amp/ember-ui-global-elements/services/global-elements"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/history",["exports","@ember/service","@glimmer/tracking"],(function(e,t,r){var n,o,i,a,l,u
function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=y(e)
if(t){var o=y(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return b(this,r)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(n=(0,t.inject)("location-wea"),o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)})(b,e)
var t,r,n,o=d(b)
function b(){var e
s(this,b)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return c(m(e=o.call.apply(o,[this].concat(r))),"location",i,m(e)),c(m(e),"currentPageHeadline",a,m(e)),c(m(e),"lastPageHeadline",l,m(e)),c(m(e),"lastPageUrl",u,m(e)),e}return t=b,(r=[{key:"routeWillChange",value:function(){this.lastPageHeadline=this.currentPageHeadline,this.lastPageUrl=this.location.href,this.currentPageHeadline=null}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),b}(t.default),i=h(o.prototype,"location",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=h(o.prototype,"currentPageHeadline",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=h(o.prototype,"lastPageHeadline",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=h(o.prototype,"lastPageUrl",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o)
e.default=v})),define("web-experience-app/services/i18n",["exports","@amp/ember-localizer/services/i18n","@ember/object"],(function(e,t,r){var n,o,i
function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=c(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.SERVICE_SIGIL=void 0
var m="I18N_SERVICE_".concat(Date.now())
e.SERVICE_SIGIL=m
var y=function(e){return e&&"object"==typeof e?e:{}},h=(n=(0,r.computed)("locale"),o=(0,r.computed)("locale"),b((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)})(c,e)
var t,n,o,i=p(c)
function c(){return a(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"languageCode",get:function(){return this.locale&&this.locale.split("-")[0]}},{key:"countryCode",get:function(){return this.locale&&this.locale.split("-")[1]||""}},{key:"t",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=y(t)
return(0,r.set)(n,m,this),u(d(c.prototype),"t",this).call(this,e,n)}}])&&l(t.prototype,n),o&&l(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(t.default)).prototype,"languageCode",[n],Object.getOwnPropertyDescriptor(i.prototype,"languageCode"),i.prototype),b(i.prototype,"countryCode",[o],Object.getOwnPropertyDescriptor(i.prototype,"countryCode"),i.prototype),i)
e.default=h})),define("web-experience-app/services/in-viewport",["exports","ember-in-viewport/services/in-viewport"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/local-nav",["exports","@ember/service","@ember/object","web-experience-app/config","@apple/babel-plugin-feature-remover"],(function(e,t,r,n,o){var i,a,l,u,c,s
function p(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function f(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=g(e)
if(t){var o=g(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return h(this,r)}}function h(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var P=(i=(0,t.inject)("charts/base"),a=(0,t.inject)("charts/books"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)})(h,e)
var t,n,o,i,a,l=y(h)
function h(){var e
d(this,h)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return f(v(e=l.call.apply(l,[this].concat(r))),"charts",u,v(e)),f(v(e),"booksCharts",c,v(e)),f(v(e),"globalElements",s,v(e)),w(v(e),"links",[]),e}return t=h,(n=[{key:"getLinks",value:(i=regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],!this.isDestroyed&&!this.isDestroying){e.next=3
break}return e.abrupt("return")
case 3:(0,r.set)(this,"links",t)
case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,t=arguments
return new Promise((function(r,n){var o=i.apply(e,t)
function a(e){p(o,r,n,a,l,"next",e)}function l(e){p(o,r,n,a,l,"throw",e)}a(void 0)}))},function(){return a.apply(this,arguments)})}])&&b(t.prototype,n),o&&b(t,o),Object.defineProperty(t,"prototype",{writable:!1}),h}(t.default),u=O(l.prototype,"charts",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=O(l.prototype,"booksCharts",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=O(l.prototype,"globalElements",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=P})),define("web-experience-app/services/locale",["exports","@ember/debug","@ember/object","@ember/service","web-experience-app/config/environment","web-experience-app/utils/get-font-url","@glimmer/tracking","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a,l){var u,c,s,p,f,d,b
function m(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=P(e)
if(t){var o=P(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return w(this,r)}}function w(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=r}}(e,T(e,t,"set"),r),r}function x(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,T(e,t,"get"))}function T(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}function A(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var S=(u=(0,n.inject)("-document"),b=new WeakMap,c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)})(w,e)
var n,a,u,c=g(w)
function w(){var e
return y(this,w),m(O(e=c.apply(this,arguments)),"documentService",s,O(e)),m(O(e),"globalElements",p,O(e)),m(O(e),"platform",f,O(e)),m(O(e),"_locale",d,O(e)),_(O(e),b,{writable:!0,value:void 0}),j(O(e),"defaultLocale",o.default.i18n.defaultLocale),e.setLocale(e.defaultLocale),e}return n=w,(a=[{key:"locale",get:function(){return this._locale||this.defaultValue}},{key:"findOrCreateFontElement",value:function(){return x(this,b)||((0,l.isSSR)()||k(this,b,this.documentService.querySelector('[name="fonts"]')),x(this,b)||k(this,b,function(e){var t=e.head,r=e.head.firstChild,n=e.createElement("link")
return n.setAttribute("rel","stylesheet"),n.setAttribute("name","fonts"),t.insertBefore(n,r),n}(this.documentService))),x(this,b)}},{key:"setLocale",value:function(e){this._locale!==e&&(this._locale=e,(0,t.debug)("[locale] Setting locale: ".concat(e)),(0,r.set)(this,"globalElements.languageCode",e),this.setFontHref())}},{key:"setFontHref",value:function(){var e=(0,i.getFontURL)(this.locale)
if(e){var t=this.findOrCreateFontElement()
t.setAttribute("href",e)
var r=this.platform
r.browser.isEdge&&r.browser.isEdgeHTML||(t.setAttribute("as","style"),t.setAttribute("rel","stylesheet preload"))}}}])&&h(n.prototype,a),u&&h(n,u),Object.defineProperty(n,"prototype",{writable:!1}),w}(n.default),s=A(c.prototype,"documentService",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=A(c.prototype,"globalElements",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=A(c.prototype,"platform",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=A(c.prototype,"_locale",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)
e.default=S})),define("web-experience-app/services/location-fitness",["exports","web-experience-app/services/location","web-experience-app/utils/fitness/stick-marketing-params-to-redirect-url"],(function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)})(s,e)
var t,l,u,c=a(s)
function s(){return n(this,s),c.apply(this,arguments)}return t=s,(l=[{key:"replace",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:302
if(this.fastboot.isFastBoot){var n=this.fastboot,o=n.response,i=n.request,a=(0,r.default)(i.queryParams,e)
o.statusCode=t,o.headers.set("Location",a)}else{var l=(0,r.default)(this.window.location.search,e)
this.window.location.replace(l)}}}])&&o(t.prototype,l),u&&o(t,u),Object.defineProperty(t,"prototype",{writable:!1}),s}(t.default)
e.default=c}))
define("web-experience-app/services/location-wea",["exports","web-experience-app/services/location"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)})(c,e)
var t,a,l,u=i(c)
function c(){return r(this,c),u.apply(this,arguments)}return t=c,(a=[{key:"replace",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:302
if(this.fastboot.isFastBoot){var r=this.fastboot.response
r.statusCode=t,r.headers.set("Location",e)}else this.window.location.replace(e)}}])&&n(t.prototype,a),l&&n(t,l),Object.defineProperty(t,"prototype",{writable:!1}),c}(t.default)
e.default=u})),define("web-experience-app/services/location",["exports","@ember/object","@ember/service"],(function(e,t,r){var n,o,i,a,l,u
function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function p(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return y(this,r)}}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(n=(0,t.computed)("fastboot.{isFastBoot,request.host}","window.location.hostname"),o=(0,t.computed)("fastboot.{isFastBoot,request.host}","window.location.host"),i=(0,t.computed)("fastboot.isFastBoot","window.location.origin"),a=(0,t.computed)("fastboot.isFastBoot","window.location.search"),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)})(i,e)
var t,r,n,o=m(i)
function i(){var e
f(this,i)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return p(h(e=o.call.apply(o,[this].concat(r))),"fastboot",u,h(e)),g(h(e),"window",window||null),e}return t=i,(r=[{key:"hostname",get:function(){return this.fastboot.isFastBoot?c(this.fastboot.request.host.split(":"),1)[0]:this.window.location.hostname}},{key:"host",get:function(){return this.fastboot.isFastBoot?this.fastboot.request.host:this.window.location.host}},{key:"href",get:function(){if(!this.fastboot.isFastBoot)return this.window.location.href}},{key:"origin",get:function(){if(!this.fastboot.isFastBoot)return this.window.location.origin}},{key:"pathname",get:function(){return this.fastboot.isFastBoot?this.fastboot.request.path:this.window.location.pathname}},{key:"search",get:function(){if(!this.fastboot.isFastBoot)return this.window.location.search}},{key:"replace",value:function(){throw new Error("Please override replace() in subclass extending this location service.")}}])&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.default),u=w(l.prototype,"fastboot",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w(l.prototype,"hostname",[n],Object.getOwnPropertyDescriptor(l.prototype,"hostname"),l.prototype),w(l.prototype,"host",[o],Object.getOwnPropertyDescriptor(l.prototype,"host"),l.prototype),w(l.prototype,"origin",[i],Object.getOwnPropertyDescriptor(l.prototype,"origin"),l.prototype),w(l.prototype,"search",[a],Object.getOwnPropertyDescriptor(l.prototype,"search"),l.prototype),l)
e.default=O})),define("web-experience-app/services/media-api",["exports","@ember/service","@amp/media-api-legacy","@amp/media-api-config-apps-realm","@amp/media-api-config-amp-books-realm","@amp/media-api-config-amp-podcasts-realm","fetch","web-experience-app/config/environment","web-experience-app/services/app-view-state","web-experience-app/utils/ssr","web-experience-app/utils/host","@ember/object"],(function(e,t,r,n,o,i,a,l,u,c,s,p){var f,d,b,m
function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=j(e)
if(t){var o=j(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return P(this,r)}}function P(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function T(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=S(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,o=function(){}
return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function A(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return E(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function R(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function M(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){R(i,n,o,a,l,"next",e)}function l(e){R(i,n,o,a,l,"throw",e)}a(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.VIEW_STATE_TO_REALM=void 0,e.createProxyWithMetaObject=W,e.default=void 0,e.filterProxyObjectRecords=function(e,t){var r,n=W([],e.meta),o=T(e)
try{for(o.s();!(r=o.n()).done;){var i=r.value
i.id!==t&&n.push(i)}}catch(a){o.e(a)}finally{o.f()}return n}
var z=[r.Realm.AMPBooks,r.Realm.AMPPodcasts,r.Realm.Apps,"app-events"]
var C={[u.VIEW_STATES.BOOK]:r.Realm.AMPBooks,[u.VIEW_STATES.PODCASTS]:r.Realm.AMPPodcasts,[u.VIEW_STATES.APP]:r.Realm.Apps}
e.VIEW_STATE_TO_REALM=C
var L=(f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)})(T,e)
var t,u,f,P,j,x=O(T)
function T(){var e
return v(this,T),h(_(e=x.apply(this,arguments)),"appViewState",d,_(e)),h(_(e),"globalElements",b,_(e)),h(_(e),"fastboot",m,_(e)),k(_(e),"_instances",null),(0,p.set)(_(e),"_instances",{}),e}return t=T,(u=[{key:"getCurrentRealm",value:function(){var e=this.appViewState.currentState,t=C[e]
if(!t)throw new Error("unsupported view state: ".concat(e))
return this.getRealm(t)}},{key:"getRealm",value:(j=M(regeneratorRuntime.mark((function e(t){var a,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z.includes(t)){e.next=2
break}throw new Error("unsupported realm: ".concat(t))
case 2:if(a={[r.Realm.AMPBooks]:o.default,[r.Realm.AMPPodcasts]:i.default,[r.Realm.Apps]:n.default}[t]||o.default,t in this._instances){e.next=9
break}return e.next=6,(0,r.configure)({realm:a,storefrontId:this.globalElements.storefront.toLowerCase(),language:this.globalElements.languageCode,developerToken:(0,c.getFastbootJwt)()||l.default.MEDIA_API.token,baseURL:this._getBaseUrl(t),features:{"api-data-store":!0},sessionOptions:{underlyingStorage:this._getCache(t),fetch:this._fetch.bind(this),fetchOptions:{headers:this._getHeaders(),mode:"cors"}}})
case 6:u=e.sent,t!==r.Realm.AMPBooks&&t!==r.Realm.AMPPodcasts&&t!==r.Realm.Apps||U(u._store._store),this._instances[t]=u
case 9:if(t!==r.Realm.AMPBooks){e.next=11
break}return e.abrupt("return",I(this._instances[t]))
case 11:return e.abrupt("return",this._instances[t])
case 12:case"end":return e.stop()}}),e,this)}))),function(e){return j.apply(this,arguments)})},{key:"_fetch",value:(P=M(regeneratorRuntime.mark((function e(){var t=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.default.apply(void 0,t))
case 1:case"end":return e.stop()}}),e)}))),function(){return P.apply(this,arguments)})},{key:"_getBaseUrl",value:function(e){switch(e){case"amp-books":return(0,s.getBooksHost)()
case"amp-podcasts":return(0,s.getPodcastHost)()
case"apps":return(0,s.getAppsHost)()
case"app-events":return(0,s.getAppEventHost)()
default:throw new Error("unsupported realm: ".concat(e))}}},{key:"_getCache",value:function(e){var t=function(e){return"media-api-cache-".concat(e)}(e),r=this.fastboot,n=r.shoebox.retrieve(t)
return r.isFastBoot&&(n={},r.shoebox.put(t,n)),n}},{key:"_getHeaders",value:function(){for(var e=new a.Headers,t=(0,c.getHeadersForFastBoot)(this.fastboot.request),r=0,n=Object.entries(t);r<n.length;r++){var o=y(n[r],2),i=o[0],l=o[1]
e.set(i,l)}return e}}])&&g(t.prototype,u),f&&g(t,f),Object.defineProperty(t,"prototype",{writable:!1}),T}(t.default),d=x(f.prototype,"appViewState",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=x(f.prototype,"globalElements",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=x(f.prototype,"fastboot",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f)
function I(e){return new Proxy(e,{get(t,r){var n=t[r]
return"function"==typeof n&&["grouping","room"].includes(r)?function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o]
var i=n.call.apply(n,[this].concat(r)),a="object"==typeof i,l=a&&"then"in i&&"function"==typeof i.then
return l?i.then((function(t){return Array.isArray(t)&&t.length>0&&N(t[0])?D(t,e):t})):i}:n}})}function D(e,t){return B.apply(this,arguments)}function B(){return(B=M(regeneratorRuntime.mark((function e(t,r){var n,o,i,a,l
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=F(t),o={},i=T(n)
try{for(i.s();!(a=i.n()).done;)(l=a.value).type in o||(o[l.type]=[]),o[l.type].push(l)}catch(u){i.e(u)}finally{i.f()}return e.next=6,Promise.all(Object.entries(o).map((function(e){var t=y(e,2),n=t[0],o=t[1],i={books:"books","audio-books":"audioBooks"}[n]
if(i){var a=o.map((function(e){return e.id}))
return r[i](a)}})))
case 6:return e.abrupt("return",t)
case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return"object"==typeof e&&"_mjs"in e}function F(e){var t,r=Array.isArray(e)?e:[e]
return 0!==e.length&&N(r[0])?(t=[]).concat.apply(t,A(r.map((function(e){var t,r=e._mjs.attributes.length?[]:[e]
return(t=[]).concat.apply(t,[r].concat(A(e._mjs.relationships.map((function(t){return F(e[t])})))))})))):[]}function U(e){var t=e.populateDataRecords
e.populateDataRecords=function(r){var n=t.call.apply(t,[e].concat(Array.prototype.slice.call(arguments))),o=r.href,i=r.next
return W(n,{href:o,next:i})}}function W(e,t){return new Proxy(e,{get(e,r){return"meta"===r?t:Reflect.get.apply(Reflect,arguments)}})}e.default=L})),define("web-experience-app/services/media-api/base",["exports","@ember/service","web-experience-app/utils/ssr","web-experience-app/services/media-api","web-experience-app/utils/urls"],(function(e,t,r,n,o){var i,a,l,u
function c(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return s(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function p(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function f(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){p(i,n,o,a,l,"next",e)}function l(e){p(i,n,o,a,l,"throw",e)}a(void 0)}))}}function d(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=w(e)
if(t){var o=w(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return v(this,r)}}function v(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var _=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)})(_,e)
var t,i,s,p,v,w,P=h(_)
function _(){var e
b(this,_)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(g(e=P.call.apply(P,[this].concat(r))),"fastboot",a,g(e)),d(g(e),"mediaApi",l,g(e)),d(g(e),"router",u,g(e)),O(g(e),"api",void 0),e}return t=_,(i=[{key:"realm",get:function(){throw new Error("Set realm field in sub class")}},{key:"getAPI",value:(w=f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.api){e.next=2
break}return e.abrupt("return",this.api)
case 2:return e.next=4,this.mediaApi.getRealm(this.realm)
case 4:return this.api=e.sent,e.abrupt("return",this.api)
case 6:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)})},{key:"getDataFromNextURL",value:(v=f(regeneratorRuntime.mark((function e(t,r){var o,i,a,l,u,s,p
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getURL(t,{},{useRawResponse:!0})
case 2:return o=e.sent,i=o.href,a=o.next,l=r.map((function(e){return e.id})),u=o.data,s=(s=this._dataRecordsFromPOJO(u)).filter((function(e){return!l.includes(e.id)})),p=[].concat(c(r),c(s)),e.abrupt("return",{mergedRecords:(0,n.createProxyWithMetaObject)(p,s.length?{next:a,href:i}:{href:i}),newRecords:s})
case 10:case"end":return e.stop()}}),e,this)}))),function(e,t){return v.apply(this,arguments)})},{key:"_dataRecordsFromPOJO",value:function(e){var t=this.api._store._store
return e.map((function(e){return t.populateDataRecord(e,{},{})}))}},{key:"getURL",value:(p=f(regeneratorRuntime.mark((function e(t){var n,i,a,l,u=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},i=u.length>2&&void 0!==u[2]?u[2]:{},e.next=4,this.getAPI()
case 4:return a=e.sent,l=(0,o.generateMediaAPIUrl)(t,n,this.router.location.getURL(),a.language),(0,r.log)("[FASTBOOT MEDIA]",l,JSON.stringify(n)),e.abrupt("return",a.request(l,n,i))
case 8:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})}])&&m(t.prototype,i),s&&m(t,s),Object.defineProperty(t,"prototype",{writable:!1}),_}(t.default),a=P(i.prototype,"fastboot",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=P(i.prototype,"mediaApi",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=P(i.prototype,"router",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=_})),define("web-experience-app/services/media-api/podcasts",["exports","@amp/media-api-legacy","web-experience-app/utils/ssr","web-experience-app/services/media-api","web-experience-app/services/media-api/base","rsvp"],(function(e,t,r,n,o,i){function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return c(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function s(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?s(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function d(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){f(i,n,o,a,l,"next",e)}function l(e){f(i,n,o,a,l,"throw",e)}a(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=w(e)
if(t){var o=w(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return v(this,r)}}function v(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var P=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)})(k,e)
var o,u,c,s,f,v,w,P,_,j=h(k)
function k(){var e
b(this,k)
for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o]
return O(g(e=j.call.apply(j,[this].concat(n))),"realm",t.Realm.AMPPodcasts),e}return o=k,(u=[{key:"getChannel",value:(_=d(regeneratorRuntime.mark((function e(t,n,o){var i,a,l,u,c,s
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAPI()
case 2:return i=e.sent,a="v1/catalog/".concat(t,"/podcast-channels/").concat(encodeURIComponent(n)),l=p({extend:"availableShowCount"},o),(0,r.log)("[FASTBOOT MEDIA]",a,JSON.stringify(l)),e.next=8,i.request(a,l)
case 8:return u=e.sent,c=u[0],s={product:p({id:c.id},c.attributes)},e.abrupt("return",s)
case 12:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return _.apply(this,arguments)})},{key:"getPodcast",value:(P=d(regeneratorRuntime.mark((function e(t,n,o){var i,a,u,c,s,f,d,b,m,y,h,v,g
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAPI()
case 2:return a=e.sent,u=p({extend:"userRating,availableEpisodeCount",include:["artists","channel","episodes","genres","listeners-also-subscribed","reviews"],"limit[episodes]":6},o),(0,r.log)("[FASTBOOT MEDIA]",n,JSON.stringify(u)),e.next=7,a.podcast(n,u)
case 7:return c=e.sent,s=c[0],f=s.artists[0],d=s.genres[0],b=[],d&&b.push(this.topPodcastsInGenre(t,d.id,{idtoFilter:n})),f&&b.push(this.podcastsByArtist(f.id,{idtoFilter:n})),e.next=16,Promise.all(b)
case 16:return m=e.sent,y=l(m,2),h=y[0],v=y[1],g={product:s,primaryGenre:d,mainArtist:null===(i=s.artists)||void 0===i?void 0:i[0],listenersAlsoSubscribed:s["listeners-also-subscribed"],episodes:s.episodes,reviews:s.reviews,topPodcasts:h},v&&(g.moreByArtist=v),e.abrupt("return",g)
case 23:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return P.apply(this,arguments)})},{key:"getPodcastEpisode",value:(w=d(regeneratorRuntime.mark((function e(t,n,o){var a,l,u,c,s,f,d,b,m,y,h,v,g
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAPI()
case 2:return a=e.sent,(0,r.log)("[FASTBOOT MEDIA]",n,JSON.stringify(o)),e.next=6,a.podcastEpisode(n,p({include:["artists","genres","podcast"]},o))
case 6:return l=e.sent,u=l[0],c=u.artists[0],s=u.genres[0],f=null==c?void 0:c.id,d=u.podcast[0],b=null==s?void 0:s.id,m={},f&&(m.moreByArtist=this.podcastsByArtist(f,{idToFilter:d.id})),b&&(m.topPodcasts=this.topPodcastsInGenre(t,b,{idToFilter:d.id})),e.next=18,(0,i.hash)(m)
case 18:return y=e.sent,h=y.moreByArtist,v=y.topPodcasts,g={product:u,primaryGenre:s,podcast:d,mainArtist:c},h&&(g.moreByArtist=h),v&&(g.topPodcasts=v),e.abrupt("return",g)
case 25:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return w.apply(this,arguments)})},{key:"podcastsByArtist",value:(v=d(regeneratorRuntime.mark((function e(t){var r,o,i,a,u,c=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,this.getAPI()
case 3:return o=e.sent,e.next=6,o.artist(t,{include:["podcasts"]})
case 6:if(i=e.sent,a=l(i,1),u=a[0],!r.idtoFilter){e.next=11
break}return e.abrupt("return",(0,n.filterProxyObjectRecords)(u.podcasts,r.idtoFilter))
case 11:return e.abrupt("return",u.podcasts)
case 12:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"topPodcastsInGenre",value:(f=d(regeneratorRuntime.mark((function e(t,r){var o,i,a,l,u,c=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>2&&void 0!==c[2]?c[2]:{},e.next=3,this.getAPI()
case 3:return i=e.sent,e.next=6,i.request("v1/catalog/".concat(t,"/charts"),{types:"podcasts",genre:r})
case 6:return a=e.sent,l=a.podcasts[0].data,o.idtoFilter&&(l=l.filter((function(e){return e.id!==o.idtoFilter}))),u=this._dataRecordsFromPOJO(l),e.abrupt("return",(0,n.createProxyWithMetaObject)(u,{href:a.podcasts[0].href,next:a.podcasts[0].next}))
case 11:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"getDataFromNextURLFromChartsAPI",value:(s=d(regeneratorRuntime.mark((function e(t,r){var o,i,l,u,c,s,p
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getURL(t,{},{useRawResponse:!0})
case 2:return o=e.sent,i=o.results.podcasts[0],l=i.data,u=i.href,c=i.next,s=this._dataRecordsFromPOJO(l),p=[].concat(a(r),a(s)),e.abrupt("return",(0,n.createProxyWithMetaObject)(p,{next:c,href:u}))
case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})}])&&m(o.prototype,u),c&&m(o,c),Object.defineProperty(o,"prototype",{writable:!1}),k}(o.default)
e.default=P})),define("web-experience-app/services/media-player",["exports","@ember/service","@ember/object","@ember/debug","@ember/application","web-experience-app/utils/ember-data/build-attributes","@glimmer/tracking","@ember/runloop","web-experience-app/config","web-experience-app/config/timeouts","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a,l,u,c,s){var p,f,d,b,m,y,h
function v(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function g(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){v(i,n,o,a,l,"next",e)}function l(e){v(i,n,o,a,l,"throw",e)}a(void 0)}))}}function w(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=T(e)
if(t){var o=T(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return k(this,r)}}function k(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function S(e){return e&&!u.default.hideGlobalElements.includes(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var E=(p=(0,t.inject)("audioPlayer"),f=(0,t.inject)("videoPlayer"),d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)})(v,e)
var t,r,a,u,p,f,d=j(v)
function v(){var e
return O(this,v),w(x(e=d.apply(this,arguments)),"_audioPlayer",b,x(e)),w(x(e),"_videoPlayer",m,x(e)),w(x(e),"router",y,x(e)),w(x(e),"_activePlayer",h,x(e)),(0,s.isSSR)()?k(e):(e.router.on("routeWillChange",(function(){S(e.router.currentRouteName)&&(e._audioPlayer.prepareTransition(),e._videoPlayer.prepareTransition())})),e)}return t=v,(r=[{key:"debouncedInitVideos",value:function(){S(this.router.currentRouteName)&&(0,l.debounce)(this,this._initVideos,c.VIDEO_INIT_TIMEOUT)}},{key:"_initVideos",value:(f=g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isDestroyed&&!this.isDestroying){e.next=2
break}return e.abrupt("return")
case 2:return e.next=4,this._videoPlayer.initializeVideos()
case 4:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"isPlaying",get:function(){var e,t
return(null===(e=this._videoPlayer)||void 0===e?void 0:e.isPlaying)||(null===(t=this._audioPlayer)||void 0===t?void 0:t.isPlaying)}},{key:"isPaused",get:function(){var e,t
return(null===(e=this._videoPlayer)||void 0===e?void 0:e.isPaused)||(null===(t=this._audioPlayer)||void 0===t?void 0:t.isPaused)}},{key:"isSeeking",get:function(){var e
return null===(e=this._audioPlayer)||void 0===e?void 0:e.isSeeking}},{key:"isStopped",get:function(){var e
return null===(e=this._audioPlayer)||void 0===e?void 0:e.isStopped}},{key:"isLoading",get:function(){var e,t
return(null===(e=this._videoPlayer)||void 0===e?void 0:e.isLoading)||(null===(t=this._audioPlayer)||void 0===t?void 0:t.isLoading)}},{key:"movieIsLoading",get:function(){var e
return null===(e=this._videoPlayer)||void 0===e?void 0:e.isLoading}},{key:"movieIsPlaying",get:function(){var e
return null===(e=this._videoPlayer)||void 0===e?void 0:e.isPlaying}},{key:"musicIsPlaying",get:function(){var e
return null===(e=this._audioPlayer)||void 0===e?void 0:e.isPlaying}},{key:"musicIsPaused",get:function(){var e
return null===(e=this._audioPlayer)||void 0===e?void 0:e.isPaused}},{key:"musicIsLoading",get:function(){var e
return null===(e=this._audioPlayer)||void 0===e?void 0:e.isLoading}},{key:"isVideoMode",get:function(){return this._activePlayer===this._videoPlayer}},{key:"isAudioMode",get:function(){return this._activePlayer===this._audioPlayer}},{key:"nowPlayingItem",get:function(){var e
return null===(e=this._activePlayer)||void 0===e?void 0:e.nowPlayingItem}},{key:"playbackTime",get:function(){var e
return null===(e=this._activePlayer)||void 0===e?void 0:e.playbackTime}},{key:"playbackTimeRemaining",get:function(){var e
return null===(e=this._activePlayer)||void 0===e?void 0:e.playbackTimeRemaining}},{key:"togglePlaybackCollection",value:(p=g(regeneratorRuntime.mark((function e(t){var r,n=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]&&n[1],e.prev=1,e.next=4,t
case 4:t=e.sent,e.next=10
break
case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",null)
case 10:r?(this.musicIsPlaying&&this._audioPlayer.stop(),this._activePlayer=this._videoPlayer):(this.movieIsPlaying&&this._videoPlayer.stop(),this._activePlayer=this._audioPlayer),this._activePlayer.togglePlaybackCollection(t)
case 12:case"end":return e.stop()}}),e,this,[[1,7]])}))),function(e){return p.apply(this,arguments)})},{key:"togglePlayback",value:(u=g(regeneratorRuntime.mark((function e(t,r){var o,i,a,l=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=l.length>2&&void 0!==l[2]&&l[2],e.prev=1,e.next=4,t
case 4:t=e.sent,e.next=10
break
case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",null)
case 10:r?(0,n.debug)("[media-player] Toggling playback of item in queue: ".concat(JSON.stringify(r))):t&&t.length?(0,n.debug)("[media-player] Toggling playback of ".concat(t.length," tracks")):(0,n.debug)("[media-player] Toggling playback: ".concat(JSON.stringify(t))),i=this._audioPlayer,a=this._videoPlayer,this.movieIsPlaying&&a.stop(),i.togglePlayback(t,r,o),this._activePlayer=i
case 15:case"end":return e.stop()}}),e,this,[[1,7]])}))),function(e,t){return u.apply(this,arguments)})},{key:"buildAudioBookQueue",value:function(e){return this._audioPlayer.buildAudioBookQueue(e)}},{key:"buildPodcastQueue",value:function(e){return this._audioPlayer.buildPodcastQueue(e)}},{key:"buildPodcastEpisodesQueue",value:function(e){return this._audioPlayer.buildPodcastEpisodesQueue(e)}},{key:"buildSongsQueue",value:function(e){return this._audioPlayer.buildSongsQueue(e)}},{key:"isPlayingCollection",value:function(e){return!!this._activePlayer&&this._activePlayer.isPlayingCollection(e)}},{key:"toMediaMeta",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base",r=(0,o.getOwner)(this)
return r.factoryFor("presenter:media-meta/".concat(t)).create({model:e})}},{key:"toMediaResource",value:function(e,t){if(e&&t)return{id:e.id,type:t,href:e.assetUrl,attributes:(0,i.default)(e)}}},{key:"toMediaResourceFromDataRecord",value:function(e,t){if(e&&t)return{id:e.id,type:t,href:e.assetUrl,attributes:{artistName:e.artistName,assetUrl:e.assetUrl,contentRating:e.contentRating,description:e.description,durationInMilliseconds:e.durationInMilliseconds,kind:e.kind,mediaKind:e.mediaKind,name:e.name,offers:e.offers,releaseDateTime:e.releaseDateTime,url:e.url,websiteUrl:e.websiteUrl,genreNames:e.genreNames}}}},{key:"_movieLoadingHandler",value:function(){if(this.movieIsLoading){var e=this._audioPlayer,t=this._videoPlayer
this.musicIsPlaying&&e.stop(),this._activePlayer=t}}}])&&P(t.prototype,r),a&&P(t,a),Object.defineProperty(t,"prototype",{writable:!1}),v}(t.default),b=A(d.prototype,"_audioPlayer",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=A(d.prototype,"_videoPlayer",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=A(d.prototype,"router",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A(d.prototype,"debouncedInitVideos",[r.action],Object.getOwnPropertyDescriptor(d.prototype,"debouncedInitVideos"),d.prototype),h=A(d.prototype,"_activePlayer",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A(d.prototype,"togglePlayback",[r.action],Object.getOwnPropertyDescriptor(d.prototype,"togglePlayback"),d.prototype),d)
e.default=E})),define("web-experience-app/services/media-shelf/scroll-positions",["exports","@amp/ember-ui-media-shelf/services/media-shelf/scroll-positions"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/media-shelf/viewport",["exports","@amp/ember-ui-media-shelf/services/media-shelf/viewport"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/metrics",["exports","@amp/ember-metrics/services/metrics"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/musickit",["exports","@ember/service","web-experience-app/utils/musickit","web-experience-app/config/environment","@ember/object","web-experience-app/helpers/app-version","web-experience-app/config"],(function(e,t,r,n,o,i,a){var l,u,c,s
function p(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function f(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){p(i,n,o,a,l,"next",e)}function l(e){p(i,n,o,a,l,"throw",e)}a(void 0)}))}}function d(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=h(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=P(e)
if(t){var o=P(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return w(this,r)}}function w(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var k=n.default.MEDIA_API.token,x=(0,r.default)(),T=x.generateEmbedCode,A=void 0===T?function(){}:T,S=x.configure,E=void 0===S?function(){}:S,R=x.Events,M=void 0===R?{}:R,z=x.PlaybackStates,C=void 0===z?{}:z,L=(l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)})(j,e)
var t,r,l,p,h,w=g(j)
function j(){var e
b(this,j)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(O(e=w.call.apply(w,[this].concat(r))),"globalElements",u,O(e)),d(O(e),"fastboot",c,O(e)),d(O(e),"metrics",s,O(e)),_(O(e),"Events",null),_(O(e),"PlaybackStates",null),_(O(e),"api",null),_(O(e),"_isLoaded",!1),e}return t=j,(r=[{key:"isAuthenticated",get:function(){var e
return null===(e=this.api)||void 0===e?void 0:e.isAuthorized}},{key:"load",value:(h=f(regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._isLoaded){e.next=2
break}return e.abrupt("return")
case 2:if(!this.fastboot.isFastBoot){e.next=4
break}return e.abrupt("return")
case 4:return e.next=6,this._configure()
case 6:t=e.sent,(0,o.set)(this,"api",t),(0,o.set)(this,"Events",M),(0,o.set)(this,"PlaybackStates",C),this._boundChangeHandler=this._authorizationStatusChangeHandler.bind(this),t.addEventListener(this.Events.authorizationStatusDidChange,this._boundChangeHandler),this._updateConsumerId(),this._isLoaded=!0
case 14:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"generateMusickitEmbedCode",value:function(e){return A(e)}},{key:"setQueue",value:function(e,t){return this.api.setQueue({[t]:e})}},{key:"willDestroy",value:function(){this.fastboot.isFastBoot||(this.api.removeEventListener(this.Events.authorizationStatusDidChange,this._boundChangeHandler),y(P(j.prototype),"willDestroy",this).apply(this,arguments))}},{key:"_configure",value:(p=f(regeneratorRuntime.mark((function e(){var t,r,o
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(this.globalElements.storefront||a.default.defaultStorefront).toLowerCase(),e.next=3,E({developerToken:k,storefrontId:t,app:{name:"WEA Preview",build:(0,i.appVersion)(),version:"1.0"},declarativeMarkup:!0,debug:"production"!==n.default.environment,persist:"cookie",prefix:"preview",sourceType:8})
case 3:return r=e.sent,(o=r.api).books.url=o.books.url.replace("https://api.books.apple.com/","https://amp-api.books.apple.com/"),e.abrupt("return",r)
case 7:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"_authorizationStatusChangeHandler",value:function(){this._updateConsumerId()}},{key:"_updateConsumerId",value:function(){this.metrics.addBaseData({consumerId:this.api.cid,isSignedIn:this.isAuthenticated,userType:this.isAuthenticated?"signedIn":"signedOut"})}}])&&m(t.prototype,r),l&&m(t,l),Object.defineProperty(t,"prototype",{writable:!1}),j}(t.default),u=j(l.prototype,"globalElements",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=j(l.prototype,"fastboot",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=j(l.prototype,"metrics",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=L})),define("web-experience-app/services/obc-api",["exports","@ember/service","@ember/object","@ember/debug","rsvp","@amp/media-api-legacy","web-experience-app/utils/books/editorial","web-experience-app/utils/host","@amp/foundation/-internals/network","fetch"],(function(e,t,r,n,o,i,a,l,u,c){var s,p,f,d,b,m
function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return h(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function v(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function g(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){v(i,n,o,a,l,"next",e)}function l(e){v(i,n,o,a,l,"throw",e)}a(void 0)}))}}function w(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t,r){return t&&P(e.prototype,t),r&&P(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}function x(e){var t=R()
return function(){var r,n=z(e)
if(t){var o=z(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return T(this,r)}}function T(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function S(e){var t="function"==typeof Map?new Map:void 0
return(S=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e
var r
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==t){if(t.has(e))return t.get(e)
t.set(e,n)}function n(){return E(e,arguments,z(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),M(n,e)})(e)}function E(e,t,r){return(E=R()?Reflect.construct:function(e,t,r){var n=[null]
n.push.apply(n,t)
var o=new(Function.bind.apply(e,n))
return r&&M(o,r.prototype),o}).apply(null,arguments)}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.MissingGroupingError=void 0
var C=function(e){k(r,e)
var t=x(r)
function r(e){var n
return j(this,r),(n=t.call(this,"missing OBC grouping for ".concat(e))).name="MissingGroupingError",n.storefront=e,n}return _(r)}(S(Error))
e.MissingGroupingError=C
var L="obc-api-cache",I=(s=(0,r.computed)("_cache"),p=(0,r.computed)("fastboot.shoebox.".concat(L)),f=function(e){k(f,e)
var t,n,s,p=x(f)
function f(){var e
j(this,f)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return w(A(e=p.call.apply(p,[this].concat(r))),"mediaApi",d,A(e)),w(A(e),"globalElements",b,A(e)),w(A(e),"fastboot",m,A(e)),e}return _(f,[{key:"_urlSession",get:function(){var e=(0,l.getOBCHost)()
return new u.URLSession(e,{underlyingStorage:this._cache,fetch:c.default,fetchOptions:{headers:new c.Headers,mode:"cors"}})}},{key:"_cache",get:function(){var e=this.fastboot,t=e.shoebox.retrieve(L)
return e.isFastBoot&&(t={},e.shoebox.put(L,t)),t}},{key:"getGrouping",value:(s=g(regeneratorRuntime.mark((function e(){var t,r,n,a,l,u,c,s
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.hash)({books:this.mediaApi.getRealm(i.Realm.AMPBooks),groupingId:this._getGroupingIdForStorefront()})
case 2:return t=e.sent,r=t.books,n=t.groupingId,e.next=7,(0,o.hash)({groupings:r.grouping(n,{platform:"ipad",tabs:"ios",include:"authors"}),metadata:this._getMetadata(n)})
case 7:return a=e.sent,l=a.groupings,u=a.metadata,c=y(l,1),s=c[0],this._mergeMetadata(s,u),e.abrupt("return",s)
case 14:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"_getGroupingIdForStorefront",value:(n=g(regeneratorRuntime.mark((function e(){var t,r,n
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._urlSession.request("sunny-grouping-mapping.json")
case 2:if(t=e.sent,r=this.globalElements.storefront,n=(t.books||{})[r.toLowerCase()]){e.next=8
break}throw new C(r.toLowerCase())
case 8:return e.abrupt("return",n)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"_getMetadata",value:(t=g(regeneratorRuntime.mark((function e(t){var r,n,o
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=encodeURIComponent(this.globalElements.languageCode.toLowerCase()),n=encodeURIComponent(t),o="metadata/groupings/".concat(r,"/").concat(n,".json"),e.abrupt("return",this._urlSession.request(o))
case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_mergeMetadata",value:function(e,t){(0,r.set)(e,"header",{editorialArtwork:t.editorialArtwork,description:t.webDescription||t.description,link:{native:{url:"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewFeature?id=1476734846&mt=11"},web:t.webLink}})
var n=y(e.tabs,1)[0];(0,r.set)(n,"children",n.children.filter((function(e){return e.editorialElementKind!==a.BOOK_ELEMENT.KIND_HERO_LIST})).map((function(e){if(e.editorialElementKind===a.BOOK_ELEMENT.KIND_SINGLE_BOOK){var n=y(e.contents,1)[0],o=t.contentMetadata[n.id]
o&&Object.entries(o).forEach((function(t){var n=y(t,2),o=n[0],i=n[1]
return(0,r.set)(e,o,i)}))}return e.editorialElementKind===a.BOOK_ELEMENT.KIND_COLLAGE_SWOOSH&&(0,r.set)(e,"editorialElementKind",a.BOOK_ELEMENT.KIND_SWOOSH),e})))}}]),f}(t.default),d=O(f.prototype,"mediaApi",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=O(f.prototype,"globalElements",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=O(f.prototype,"fastboot",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O(f.prototype,"_urlSession",[s],Object.getOwnPropertyDescriptor(f.prototype,"_urlSession"),f.prototype),O(f.prototype,"_cache",[p],Object.getOwnPropertyDescriptor(f.prototype,"_cache"),f.prototype),f)
e.default=I})),define("web-experience-app/services/perfkit",["exports","@amp/ember-metrics/services/perfkit"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/pixel-ratio",["exports","@amp/ember-ui-media-artwork/services/pixel-ratio"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/platform",["exports","@ember/debug","@ember/service","@ember/object","@ember/utils","web-experience-app/utils/launch-client","web-experience-app/utils/ssr","@apple/client-detect","@ember/application","@glimmer/tracking"],(function(e,t,r,n,o,i,a,l,u,c){var s,p,f,d,b,m,y,h,v,g,w,O,P,_
function j(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?j(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return T(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function A(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=L(e)
if(t){var o=L(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return z(this,r)}}function z(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var B=/OS (\d+)[_.](\d+)[_.]?(\d+)?/,N=(s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)})(j,e)
var r,n,c,s=M(j)
function j(){var e
return S(this,j),A(C(e=s.apply(this,arguments)),"nativeLaunchFailed",p,C(e)),A(C(e),"browser",f,C(e)),I(C(e),"clientDetect",{}),A(C(e),"couldHaveAppStore",d,C(e)),A(C(e),"couldHaveMacAppStore",b,C(e)),A(C(e),"couldHaveiTunes",m,C(e)),A(C(e),"couldHaveiTunesU",y,C(e)),A(C(e),"couldHaveMessages",h,C(e)),A(C(e),"couldHaveMusic",v,C(e)),A(C(e),"couldHavePodcasts",g,C(e)),A(C(e),"couldHaveBookStore",w,C(e)),A(C(e),"couldHaveTV",O,C(e)),A(C(e),"couldHaveWatch",P,C(e)),A(C(e),"userAgent",_,C(e)),(0,a.isSSR)()?z(e):(e.userAgent=window.navigator.userAgent,e.clientDetect=l.ClientDetect,e.browser=e.clientDetect.browser(e.userAgent),e.couldHaveAppStore=e.clientDetect.couldHaveAppStore(),e.couldHaveMacAppStore=e.clientDetect.couldHaveMacAppStore(),e.couldHaveiTunes=e.clientDetect.couldHaveiTunes(),e.couldHaveiTunesU=e.clientDetect.couldHaveiTunesU(),e.couldHaveMessages=e.clientDetect.couldHaveMessages(),e.couldHaveMusic=e.clientDetect.couldHaveMusic(),e.couldHavePodcasts=e.clientDetect.couldHavePodcasts(),e.couldHaveBookStore=e.clientDetect.couldHaveBookStore(),e.couldHaveTV=e.clientDetect.couldHaveTV(),e.couldHaveWatch=e.clientDetect.couldHaveWatch(),e)}return r=j,(n=[{key:"schemeForURL",value:function(){var e=this.schemeObjectForURL.apply(this,arguments),t=e.href
return t}},{key:"schemeObjectForURL",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.browser
return(0,a.isSSR)()?{}:l.ClientDetect.schemeForURL(e,t)}},{key:"canOpenAppleMusic",get:function(){return!(0,a.isSSR)()&&(this.browser.isMobile||this.browser.isAndroid?this.couldHaveMusic:this.couldHaveiTunes)}},{key:"isPreiOS12",get:function(){if((0,a.isSSR)())return!1
if(!this.browser.isiOS)return!1
var e=this.userAgent.match(B)
return!!e&&x(e,2)[1]<12}},{key:"isiOS12Plus",get:function(){return this.browser.isiOS&&!this.isPreiOS12}},{key:"isPreiOS122",get:function(){if((0,a.isSSR)())return!1
if(!this.browser.isiOS)return!1
var e=this.userAgent.match(B)
if(!e)return!1
var t=x(e,3),r=t[1],n=t[2]
return r<12||12==r&&n<2}},{key:"launchFromCta",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={};(0,o.isEmpty)(e)||(n={app:e})
var a=(0,u.getOwner)(this).lookup("controller:application")
return(0,i.addLaunchQueryParams)(n,a),n=k(k({},n),r),this.launch(t,n)}},{key:"launch",value:function(e,r,n){var o=this,a=(0,i.processQueryParams)(e,r);(0,t.debug)("[launch-client] Handing off to Native App: ".concat(a)),this.launchClient(a,(function(e){(0,t.debug)("[launch-client] ClientDetect.launchClient: callback(supported): ".concat(e))
var r=0===e
if(!o.isDestroyed&&!o.isDestroying&&("function"==typeof n?n(!r):o.nativeLaunchFailed=r,r)){var i=document.body
i&&i.scrollIntoView()}}))}},{key:"launchClient",value:function(e,t){this.clientDetect.launchClient(e,t)}}])&&E(r.prototype,n),c&&E(r,c),Object.defineProperty(r,"prototype",{writable:!1}),j}(r.default),p=D(s.prototype,"nativeLaunchFailed",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=D(s.prototype,"browser",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),d=D(s.prototype,"couldHaveAppStore",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=D(s.prototype,"couldHaveMacAppStore",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=D(s.prototype,"couldHaveiTunes",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),y=D(s.prototype,"couldHaveiTunesU",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=D(s.prototype,"couldHaveMessages",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v=D(s.prototype,"couldHaveMusic",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=D(s.prototype,"couldHavePodcasts",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w=D(s.prototype,"couldHaveBookStore",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),O=D(s.prototype,"couldHaveTV",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P=D(s.prototype,"couldHaveWatch",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),_=D(s.prototype,"userAgent",[c.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),D(s.prototype,"launchFromCta",[n.action],Object.getOwnPropertyDescriptor(s.prototype,"launchFromCta"),s.prototype),s)
e.default=N})),define("web-experience-app/services/record-headers-cache",["exports","@ember/service"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var o=c(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return u(this,r)}}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=/max-age=(\d+)/,p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)})(p,e)
var t,n,u,c=l(p)
function p(){var e
return o(this,p),(e=c.apply(this,arguments))._data={},e}return t=p,(n=[{key:"add",value:function(e,t,n){var o=e.modelName,i={}
if(n.Expires)i.Expires=new Date(n.Expires)
else if(n["cache-control"]){var a=r(n["cache-control"].match(s),2)[1]
a&&(i.Expires=new Date(Date.now()+1e3*parseInt(a,10)))}this._data[o+t]=i}},{key:"headersFor",value:function(e,t){var r=e.modelName
return this._data[r+t]}}])&&i(t.prototype,n),u&&i(t,u),Object.defineProperty(t,"prototype",{writable:!1}),p}(t.default)
e.default=p})),define("web-experience-app/services/records-visited",["exports","@ember/service","web-experience-app/utils/ember-data/json-api"],(function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var o=c(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)})(f,e)
var t,l,c,p=a(f)
function f(){var e
return n(this,f),s(u(e=p.apply(this,arguments)),"resourceRegister",null),e.resourceRegister=new r.ResourceRegister,e}return t=f,(l=[{key:"register",value:function(e){this.resourceRegister.register(e)}},{key:"has",value:function(e){return this.resourceRegister.get(e)}}])&&o(t.prototype,l),c&&o(t,c),Object.defineProperty(t,"prototype",{writable:!1}),f}(t.default)
e.default=p})),define("web-experience-app/services/responsive",["exports","@ember/object/evented","@ember/service","@glimmer/tracking","web-experience-app/config","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i){var a,l
function u(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=f(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g,w,O,P,_,j,k=(a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)})(f,e)
var t,r,n,a=b(f)
function f(){var e
return c(this,f),v(y(e=a.apply(this,arguments)),"viewports",o.default.viewports),v(y(e),"_mqls",null),u(y(e),"viewport",l,y(e)),(0,i.isSSR)()||e._installHandlers(),e}return t=f,(r=[{key:"_didChangeHandler",value:function(e,t){if(e&&e.matches){var r=this.viewports.find((function(e){return e.mediaQueryStrict===t}))
this.viewport=r.name,this.trigger("didChange",e)}}},{key:"_installHandlers",value:function(){var e=this
this._mqls=this.viewports.map((function(t){var r=t.mediaQueryStrict,n=window.matchMedia(r),o=function(t){e._didChangeHandler(t,r)}
return n.addEventListener?n.addEventListener("change",o):n.addListener(o),e._didChangeHandler(n,r),{mql:n,listener:o}}))}},{key:"_uninstallHandlers",value:function(){this._mqls&&this._mqls.forEach((function(e){var t=e.mql,r=e.listener
t.removeEventListener?t.removeEventListener("change",r):t.removeListener(r)}))}},{key:"willDestroy",value:function(){p(h(f.prototype),"willDestroy",this).apply(this,arguments),(0,i.isSSR)()||this._uninstallHandlers()}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.default.extend(t.default)),g=a.prototype,w="viewport",O=[n.tracked],P={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}},j={},Object.keys(P).forEach((function(e){j[e]=P[e]})),j.enumerable=!!j.enumerable,j.configurable=!!j.configurable,("value"in j||j.initializer)&&(j.writable=!0),j=O.slice().reverse().reduce((function(e,t){return t(g,w,e)||e}),j),_&&void 0!==j.initializer&&(j.value=j.initializer?j.initializer.call(_):void 0,j.initializer=void 0),void 0===j.initializer&&(Object.defineProperty(g,w,j),j=null),l=j,a)
e.default=k})),define("web-experience-app/services/router-scroll",["exports","ember-router-scroll/services/router-scroll"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/router-state",["exports","@ember/service","web-experience-app/config/environment","@ember/runloop","@glimmer/tracking","@ember/object","web-experience-app/utils/routing","web-experience-app/utils/ssr","@ember/application"],(function(e,t,r,n,o,i,a,l,u){var c,s,p,f,d
function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return m(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function y(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=_(e)
if(t){var o=_(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return O(this,r)}}function O(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var x=r.default.APP.PROGRESS_BAR_DELAY,T=(c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)})(m,e)
var t,r,o,c=w(m)
function m(){var e
h(this,m)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return y(P(e=c.call.apply(c,[this].concat(r))),"platform",s,P(e)),y(P(e),"router",p,P(e)),y(P(e),"isTransitioning",f,P(e)),y(P(e),"timer",d,P(e)),j(P(e),"_requestId",null),j(P(e),"_measureProgressTimer",void 0),e}return t=m,(r=[{key:"measureProgress",value:function(){if(!this.isDestroyed&&!this.isDestroying){var e=this.timer
if(e+=e>90?1/12:e>75?1/8:e>50?.2:1/3,this.timer=e,!this.isTransitioning||e>=100)window.cancelAnimationFrame(this._requestId)
else{var t=window.requestAnimationFrame(this.measureProgress)
this._requestId=t}}}},{key:"clearProgress",value:function(){this.isDestroyed||this.isDestroying||(this.timer=100,(0,n.later)(this,this.resetTimer,50))}},{key:"resetTimer",value:function(){this.isDestroyed||this.isDestroying||(this.timer=0)}},{key:"setupLoadingState",value:function(e){if(!(0,l.isSSR)()&&!this.platform.browser.isIE){var t=b(e.targetName.split("."),1)[0],r=e.intent.url?(0,a.findIdInSegments)(e.intent.url.split("/")):null
"story"!==t&&(t="product/".concat(t))
var o=!1
if(r){var i,c=(0,u.getOwner)(this).lookup("service:store")
o=c&&(null===(i=c.hasRecordForId)||void 0===i?void 0:i.call(c,t,r))}o||this.router._router.isFirstRoute||(this.isTransitioning=!0,this._measureProgressTimer=(0,n.later)(this,this.measureProgress,x))}}},{key:"clearLoadingState",value:function(){(0,l.isSSR)()||this.platform.browser.isIE||this.isTransitioning&&((0,n.scheduleOnce)("afterRender",this,this.afterRender),(0,n.cancel)(this._measureProgressTimer),(0,i.set)(this,"_measureProgressTimer",null))}},{key:"afterRender",value:function(){var e=this
this.clearProgress(),(0,n.later)(this,(function(){e.isTransitioning=!1}),100)}}])&&v(t.prototype,r),o&&v(t,o),Object.defineProperty(t,"prototype",{writable:!1}),m}(t.default),s=k(c.prototype,"platform",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=k(c.prototype,"router",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=k(c.prototype,"isTransitioning",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=k(c.prototype,"timer",[o.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),k(c.prototype,"measureProgress",[i.action],Object.getOwnPropertyDescriptor(c.prototype,"measureProgress"),c.prototype),k(c.prototype,"afterRender",[i.action],Object.getOwnPropertyDescriptor(c.prototype,"afterRender"),c.prototype),c)
e.default=T})),define("web-experience-app/services/short-number",["exports","ember-short-number/services/short-number"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/starkit",["exports","@amp/ember-metrics/services/starkit"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/services/translation",["exports","@amp/ember-localizer/services/translation","@ember/service","web-experience-app/config/environment","web-experience-app/config","@glimmer/tracking","@amp/ember-localizer/utils/page-dir","@apple/babel-plugin-feature-remover","web-experience-app/utils/ssr"],(function(e,t,r,n,o,i,a,l,u){var c,s,p,f,d,b,m
function y(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function h(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){y(i,n,o,a,l,"next",e)}function l(e){y(i,n,o,a,l,"throw",e)}a(void 0)}))}}function v(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=P(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=T(e)
if(t){var o=T(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return k(this,r)}}function k(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function E(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return R(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var M=(c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)})(y,e)
var t,r,i,l,u,c=j(y)
function y(){var e
g(this,y)
for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o]
return A(x(e=c.call.apply(c,[this].concat(r))),"ENV",n.default),v(x(e),"fastboot",s,x(e)),v(x(e),"globalElements",p,x(e)),v(x(e),"locale",f,x(e)),v(x(e),"hasLoaded",d,x(e)),v(x(e),"requestedLanguage",b,x(e)),v(x(e),"storedLanguage",m,x(e)),e}return t=y,(r=[{key:"getBestLanguage",value:(u=h(regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.fastboot.isFastBoot){e.next=7
break}return e.next=3,this.globalElements.getAllowedLanguage(this.requestedLanguage)
case 3:(t=e.sent)&&this.fastboot.shoebox.put(o.default.shoeboxNames.languageCode,t),e.next=16
break
case 7:if(e.t1=this.fastboot.shoebox.retrieve(o.default.shoeboxNames.languageCode),e.t1){e.next=12
break}return e.next=11,this.globalElements.getAllowedLanguage(this.requestedLanguage)
case 11:e.t1=e.sent
case 12:if(e.t0=e.t1,e.t0){e.next=15
break}e.t0=O(T(y.prototype),"getBestLanguage",this).call(this)
case 15:t=e.t0
case 16:return this.storedLanguage=t,e.abrupt("return",t)
case 18:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"getPageDir",value:function(){return a.RTL_LANG_CODES_OVERRIDE.includes(this.requestedLanguage)?"rtl":O(T(y.prototype),"getPageDir",this).apply(this,arguments)}},{key:"load",value:(l=h(regeneratorRuntime.mark((function e(){var t=arguments
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(T(y.prototype),"load",this).apply(this,t)
case 2:this.hasLoaded=!0,this.locale.setLocale(this.storedLanguage),z(this.storedLanguage)
case 5:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})}])&&w(t.prototype,r),i&&w(t,i),Object.defineProperty(t,"prototype",{writable:!1}),y}(t.default),s=S(c.prototype,"fastboot",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=S(c.prototype,"globalElements",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=S(c.prototype,"locale",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=S(c.prototype,"hasLoaded",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=S(c.prototype,"requestedLanguage",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),m=S(c.prototype,"storedLanguage",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c)
function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
if(!(0,u.isSSR)()&&a.RTL_LANG_CODES.includes(e.substring(0,2).toLowerCase())){var t=E(document.getElementsByTagName("link")),r=t.find((function(e){return e.dataset.rtl}))
r&&r.dataset.rtl&&(r.href=r.dataset.rtl)}}e.default=M})),define("web-experience-app/services/video-player",["exports","@ember/service","@ember/debug","@ember/array","web-experience-app/config","@glimmer/tracking","@ember/object","web-experience-app/utils/ssr","@ember/utils"],(function(e,t,r,n,o,i,a,l,u){var c,s,p,f,d,b
function m(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function y(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){m(i,n,o,a,l,"next",e)}function l(e){m(i,n,o,a,l,"throw",e)}a(void 0)}))}}function h(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=O(e,t)
if(n){var o=Object.getOwnPropertyDescriptor(n,t)
return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=x(e)
if(t){var o=x(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return j(this,r)}}function j(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.states=e.default=void 0
var S={NONE:0,LOADING:1,PLAYING:2,PAUSED:3}
e.states=S
var E=(c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)})(j,e)
var t,i,a,c,m,O=_(j)
function j(){var e
v(this,j)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return h(k(e=O.call.apply(O,[this].concat(r))),"mediaPlayer",s,k(e)),h(k(e),"platform",p,k(e)),h(k(e),"responsive",f,k(e)),T(k(e),"_videos",null),h(k(e),"_playbackState",d,k(e)),T(k(e),"_currentQueue",null),T(k(e),"_currentQueueIndex",null),h(k(e),"nowPlayingItem",b,k(e)),T(k(e),"_player",null),T(k(e),"_modal",null),T(k(e),"_pendingMedia",null),e}return t=j,(i=[{key:"isPlaying",get:function(){return this._playbackState===S.PLAYING}},{key:"isPaused",get:function(){return this._playbackState===S.PAUSED}},{key:"isLoading",get:function(){return this._playbackState===S.LOADING}},{key:"willDestroy",value:function(){var e
if(w(x(j.prototype),"willDestroy",this).apply(this,arguments),!(0,l.isSSR)()){var t=this.responsive
null!==(e=t.has)&&void 0!==e&&e.call(t,"didChange")&&t.off("didChange",this._resizeHandler)}}},{key:"prepareTransition",value:function(){(0,r.debug)("[media-player] Stopping video playback due to page transition"),this._removeListeners()
var e=this._getVideoElements()
Array.isArray(e)&&e.length>0&&(this.stop(),this._acFilmsDestroy()),this._unsetVideos()}},{key:"registerVideo",value:function(e,t){if(t&&e.url){var r=this._videos||(0,n.A)()
t.addEventListener("click",this._setPendingMediaElement)
var o=e.id,i=e.meta,a=e.url
r.some((function(e){return e.id===o}))||(r.push({id:o,url:a,meta:i,element:t}),this._videos=r)}}},{key:"loadPlayer",value:(m=y(regeneratorRuntime.mark((function e(){var t,r
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,emberAutoImportDynamic("@marcom/ac-films")
case 2:return t=e.sent,r=t.default,e.abrupt("return",r)
case 5:case"end":return e.stop()}}),e)}))),function(){return m.apply(this,arguments)})},{key:"initializeVideos",value:(c=y(regeneratorRuntime.mark((function e(){var t,r,n,i,a,u,c,s,p,f
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,l.isSSR)()){e.next=2
break}return e.abrupt("return")
case 2:if(t=this._getVideoElements(),Array.isArray(t)&&0!==t.length){e.next=5
break}return e.abrupt("return")
case 5:return(r=this._player)&&r.controls&&this._acFilmsDestroy(),e.next=9,this.loadPlayer()
case 9:n=e.sent,i=n.create(t,{modal:!0,poster:o.default.videoLoadingPoster,closeOnEnd:!1,crossorigin:null,localizationBasePath:o.default.videoLocalizationPath,sharing:{}}),a=i.player,u=i.modalVideo,c=i.destroy,a.on("play",this._onPlay),a.on("pause",this._onPause),a.on("ended",this._onEnded),u&&u.on("close",this._onClosed),this.responsive.on("didChange",this._resizeHandler),this._player=a,this._acFilmsDestroy=c,this._modal=u,this.platform.browser.isSafari&&(s=a.getMediaElement(),p=s.webkitSetPresentationMode,a.on("pictureinpicture:change",this._onPipModeChanged),f=this,s.webkitSetPresentationMode=function(e){if(!f.isPlayingCollection(f._currentQueue)||!f._isPiP()||"inline"!==e)return p.apply(this,arguments)})
case 20:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"_acFilmsDestroy",value:function(){}},{key:"togglePlaybackCollection",value:function(e){var t=this._player
if(this.isPlayingCollection(e))return this.isPlaying?t.pause():t.play()
this._currentQueue=e,this._currentQueueIndex=-1,this._playNextInQueue()}},{key:"updateCurrentQueue",value:function(e,t){this._currentQueue=e,this._currentQueueIndex=t}},{key:"isPlayingCollection",value:function(e){var t=this._currentQueue
if((0,u.isEmpty)(e)||(0,u.isEmpty)(t))return!1
if(t.length!==e.length)return!1
var r=e.map((function(e){return e.id}))
return t.every((function(e){return-1!==r.indexOf(e.id)}))}},{key:"togglePlayback",value:function(e){if(e.url){this._closePlayer()
var t=this._findVideoByUrl(e.url)
t&&t.element.click()}}},{key:"stop",value:function(){var e=this._player,t=this._modal
this.nowPlayingItem=null,e&&e.pause(),t&&t.close()}},{key:"findVideoById",value:function(e){return this._videos.findBy("id",e)}},{key:"_resizeHandler",value:function(){var e=this._player
e&&e.refreshSize()}},{key:"_isPiP",value:function(){return this.platform.browser.isSafari&&this._player.isPictureInPicture()}},{key:"_onPlay",value:function(){this.isDestroyed||this.isDestroying||(this.nowPlayingItem=this._pendingMedia,this._playbackState=S.PLAYING,this.pendingMedia=null)}},{key:"_onPipModeChanged",value:function(){!this._isPiP()&&this.isPaused&&this._closePlayer(!0),this._isPiP()&&this.isPlaying&&this._modal.modalElement.classList.add("ac-modal-video-pip")}},{key:"_onPause",value:function(){this.isDestroyed||this.isDestroying||this.isPlaying&&(this._playbackState=S.PAUSED)}},{key:"_onEnded",value:function(){var e=(0,u.isEmpty)(this._currentQueue)?this._closePlayer:this._playNextInQueue
this._onFinish(e)}},{key:"_onClosed",value:function(){this._onFinish(this._closePlayer)}},{key:"_onFinish",value:function(e){this.isDestroyed||this.isDestroying||("function"!=typeof e?(this._playbackState=S.NONE,this.nowPlayingItem=null):e.call(this))}},{key:"_getVideoElements",value:function(){var e=this._videos
return e?e.mapBy("element"):[]}},{key:"_findVideoByUrl",value:function(e){return this._videos.findBy("url",e)}},{key:"_setPendingMediaElement",value:function(e){var t=e.currentTarget.href||e.currentTarget.getAttribute("data-ac-films-href"),r=this._findVideoByUrl(t)
r&&(this._pendingMedia=r,this.setLoading())}},{key:"setLoading",value:function(){this._playbackState=S.LOADING,this.mediaPlayer._movieLoadingHandler()}},{key:"_removeListeners",value:function(){var e=this
this._getVideoElements().forEach((function(t){t.removeEventListener("click",e._setPendingMediaElement)}))}},{key:"_unsetVideos",value:function(){this._videos=null}},{key:"_playNextInQueue",value:function(){var e=this._currentQueueIndex+1
if(!this._currentQueue||e>=this._currentQueue.length)this._closePlayer(!0)
else{this._isPiP()&&this._modal.close(),this._currentQueueIndex=e
var t=this._currentQueue[e],r=this._findVideoByUrl(t.url)
r?r.element.click():this._playNextInQueue()}}},{key:"_closePlayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
this._isPiP()&&!e||(this._currentQueue=null,this._currentQueueIndex=null,this._playbackState=S.NONE,this.nowPlayingItem=null),this._modal&&this._modal.close()}}])&&g(t.prototype,i),a&&g(t,a),Object.defineProperty(t,"prototype",{writable:!1}),j}(t.default),s=A(c.prototype,"mediaPlayer",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=A(c.prototype,"platform",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=A(c.prototype,"responsive",[t.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=A(c.prototype,"_playbackState",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return S.NONE}}),b=A(c.prototype,"nowPlayingItem",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A(c.prototype,"_onPlay",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"_onPlay"),c.prototype),A(c.prototype,"_onPipModeChanged",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"_onPipModeChanged"),c.prototype),A(c.prototype,"_onPause",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"_onPause"),c.prototype),A(c.prototype,"_onEnded",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"_onEnded"),c.prototype),A(c.prototype,"_onClosed",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"_onClosed"),c.prototype),A(c.prototype,"_setPendingMediaElement",[a.action],Object.getOwnPropertyDescriptor(c.prototype,"_setPendingMediaElement"),c.prototype),c)
e.default=E})),define("web-experience-app/supported-locales",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=["ar-dz","ar-bh","ar-eg","ar-iq","ar-jo","ar-kw","ar-lb","ar-ly","ar-ma","ar-om","ar-qa","ar-sa","ar-sd","ar-sy","ar-tn","ar-ae","ar-ye","he-il","iw-il","ca-es","cs-cz","da-dk","de-ch","de-de","el-gr","en-au","en-ca","en-gb","en-us","es-419","es-es","es-mx","es-xl","et-ee","fi-fi","fr-ca","fr-fr","hi-in","hr-hr","hu-hu","id-id","is-is","it-it","iw-il","ja-jp","ko-kr","lt-lt","lv-lv","ms-my","nl-nl","no-no","no-nb","nb-no","pl-pl","pt-br","pt-pt","ro-ro","ru-ru","sk-sk","sv-se","th-th","tr-tr","uk-ua","vi-vi","vi-vn","zh-cn","zh-hans","zh-hant","zh-hk","zh-tw","ar","ca","cs","da","de","el","en","es","fi","fr","he","hi","hr","hu","id","is","it","ja","ko","lt","lv","ms","nb","nl","no","pl","pt","ro","ru","sk","sv","th","tr","uk","vi","zh"]})),define("web-experience-app/templates/application-error",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"FSeFncdV",block:'[[[8,[39,0],null,[["@data"],[[30,0,["headTagsData"]]]],null],[1,"\\n\\n"],[41,[30,1,["visitedURL"]],[[[1,"  "],[8,[39,2],null,[["@url"],[[30,1,["visitedURL"]]]],null],[1,"\\n"]],[]],[[[1,"  "],[1,[30,1,["message"]]],[1,"\\n"]],[]]]],["@model"],false,["seo-tags","if","we-connecting"]]',moduleName:"web-experience-app/templates/application-error.hbs",isStrictMode:!1})
e.default=r})),define("web-experience-app/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"zlKzZxwB",block:'[[[10,0],[14,0,"ember-view"],[12],[1,"\\n  "],[8,[39,0],null,[["@isDarkTheme"],[false]],null],[1,"\\n\\n  "],[10,"main"],[15,0,[29,["selfclear ",[30,0,["viewStateTheme"]]]]],[12],[1,"\\n    "],[46,[28,[37,2],null,null],null,null,null],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["global-elements","component","-outlet"]]',moduleName:"web-experience-app/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("web-experience-app/templates/channel",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"lpha4h7o",block:'[[[8,[39,0],null,null,null],[1,"\\n\\n"],[8,[39,1],null,[["@data"],[[30,0,["headTagsData"]]]],null],[1,"\\n\\n"],[10,0],[14,0,"l-content-width l-viewport-centered--with-header-footer l-content-width--small-full-width"],[12],[1,"\\n  "],[10,0],[14,0,"podcast-channel"],[12],[1,"\\n    "],[10,0],[14,0,"podcast-channel__logo"],[12],[1,"\\n      "],[8,[39,2],[[24,0,"we-artwork--round podcast-channel__logo-artwork"]],[["@artwork","@profile"],[[30,1,["viewModel","product","artwork"]],"podcast-channel-logo"]],null],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"podcast-channel__body"],[12],[1,"\\n      "],[10,"h1"],[14,0,"podcast-channel__title"],[12],[1,[30,1,["viewModel","product","name"]]],[13],[1,"\\n      "],[10,2],[14,0,"podcast-channel__subheader"],[12],[1,[28,[35,3],["WEA.PodcastChannelPages.SubTitle"],null]],[13],[1,"\\n\\n      "],[10,0],[14,0,"podcast-channel__subheader_2"],[12],[1,[28,[35,4],[[28,[37,3],["WEA.PodcastChannelPages.ShowCount"],[["count"],[[30,1,["viewModel","product","availableShowCount"]]]]]],null]],[41,[30,1,["viewModel","product","releaseFrequency"]],[[[1,"          "],[10,1],[14,"aria-hidden","true"],[12],[1,[28,[35,3],["WEA.PodcastChannelPages.SubHeader.Separator"],null]],[1," "],[13],[1,[28,[35,4],[[28,[37,3],["WEA.PodcastChannelPages.ReleaseFrequency"],[["frequency"],[[30,1,["viewModel","product","releaseFrequency"]]]]]],null]]],[]],null],[1,"      "],[13],[1,"\\n\\n      "],[8,[39,6],null,[["@metricsTarget"],["channelDescription"]],[["default"],[[[[1,"\\n"],[41,[30,2,["isTruncated"]],[[[1,"          "],[8,[39,7],[[24,0,"podcast-channel__description"]],[["@clampProfile","@value","@isInteractive","@onShowMore","@dataMetricsClick"],["podcast-channel-description",[28,[37,8],[[30,1,["viewModel","product","description","standard"]]],null],true,[30,2,["onShowMore"]],[28,[37,9],["expandMore"],null]]],null],[1,"\\n"]],[]],[[[1,"          "],[8,[39,10],null,[["@value"],[[28,[37,8],[[30,1,["viewModel","product","description","standard"]]],null]]],null],[1,"\\n"]],[]]],[1,"      "]],[2]]]]],[1,"\\n\\n      "],[10,0],[14,0,"podcast-channel__cta"],[12],[1,"\\n        "],[8,[39,11],[[16,"aria-label",[28,[37,3],["WEA.PodcastChannelPages.CTA.AX"],null]],[24,0,"podcast-channel__cta__button"]],[["@locKeyActionText","@url"],["WEA.PodcastChannelPages.CTA.Action",[30,1,["viewModel","product","url"]]]],null],[1,"\\n\\n        "],[10,2],[14,0,"podcast-channel__cta__label"],[12],[1,"\\n          "],[1,[28,[35,3],["WEA.PodcastPages.CTA.Podcasts.Free.MinRequirement"],null]],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@model","modal"],false,["we-localnav/apple-podcasts","seo-tags","amp-artwork/wea","t","upper-case","if","we-truncate/modal","we-truncate","html-sanitize","metrics-data","bidi-text","we-web-to-native-cta/apple-podcasts/with-kb"]]',moduleName:"web-experience-app/templates/channel.hbs",isStrictMode:!1})
e.default=r})),define("web-experience-app/templates/not-found",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"j5cIr1I+",block:'[[[8,[39,0],null,[["@data"],[[30,0,["headTagsData"]]]],null],[1,"\\n\\n"],[8,[39,1],null,[["@url","@preventLaunch"],[[30,0,["model","url"]],[30,0,["preventConnectingLaunch"]]]],null],[1,"\\n"]],[],false,["seo-tags","we-connecting"]]',moduleName:"web-experience-app/templates/not-found.hbs",isStrictMode:!1})
e.default=r})),define("web-experience-app/templates/podcast-episode",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"4KEc/STL",block:'[[[8,[39,0],null,[["@data"],[[30,0,["headTagsData"]]]],null],[1,"\\n"],[8,[39,1],null,null,null],[1,"\\n\\n"],[8,[39,2],null,null,[["default"],[[[[1,"\\n"],[41,[30,1,["seeAllData"]],[[[1,"    "],[8,[39,4],null,null,[["default"],[[[[1,"\\n"],[44,[[28,[37,6],[[30,2],[30,1,["seeAllData","seeAllSectionType"]]],null]],[[[1,"        "],[8,[30,3],null,[["@header","@items","@productModel","@seeAllModelType","@sectionType","@metricsConfigKey","@isPodcast"],[[30,1,["seeAllData","header"]],[30,1,["seeAllData","items"]],[30,1,["viewModel","product"]],[30,1,["seeAllData","seeAllModelType"]],[30,1,["seeAllData","sectionType"]],"navigateShelf",true]],null],[1,"\\n"]],[3]]],[1,"    "]],[2]]]]],[1,"\\n"]],[]],[[[1,"    "],[10,0],[14,0,"l-content-width section section--hero product-hero"],[12],[1,"\\n      "],[8,[39,7],null,[["@model","@podcast"],[[30,1,["viewModel","product"]],[30,1,["viewModel","podcast"]]]],null],[1,"\\n\\n      "],[8,[39,8],null,[["@items","@sectionType","@metricsLocation","@profile","@headerText","@isPodcast"],[[30,1,["viewModel","topPodcasts"]],"topPodcasts","shelfTopPodcasts",[28,[37,9],["podcast"],null],[28,[37,10],["WEA.PodcastPages.TopInCategory.Title"],[["categoryName"],[[30,1,["viewModel","primaryGenre","name"]]]]],true]],null],[1,"\\n\\n      "],[8,[39,8],null,[["@items","@sectionType","@metricsLocation","@profile","@headerText","@isPodcast"],[[30,1,["viewModel","moreByArtist"]],"moreByArtist","shelfMoreByArtist",[28,[37,9],["podcast"],null],[28,[37,10],["WEA.PodcastPages.MoreBy"],[["podcastArtist"],[[30,1,["viewModel","mainArtist","name"]]]]],true]],null],[1,"\\n    "],[13],[1,"\\n"]],[]]]],[]]]]],[1,"\\n"]],["@model","map","SeeAllComponent"],false,["seo-tags","we-localnav/apple-podcasts","animation-wrapper","if","see-all/chooser","let","get","pages/podcast-episode","product-page-shelf","shelf-profile","t"]]',moduleName:"web-experience-app/templates/podcast-episode.hbs",isStrictMode:!1})
e.default=r})),define("web-experience-app/templates/podcast",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"gaPyIjCN",block:'[[[1,"\\n"],[8,[39,0],null,[["@data"],[[30,0,["headTagsData"]]]],null],[1,"\\n\\n"],[41,[30,0,["appViewState","isiTunesView"]],[[[1,"  "],[8,[39,2],null,null,null],[1,"\\n"]],[]],[[[1,"  "],[8,[39,3],null,null,null],[1,"\\n"]],[]]],[1,"\\n"],[8,[39,4],null,null,[["default"],[[[[1,"\\n"],[41,[30,1,["seeAllData"]],[[[1,"    "],[8,[39,5],null,null,[["default"],[[[[1,"\\n"],[44,[[28,[37,7],[[30,2],[30,1,["seeAllData","seeAllSectionType"]]],null]],[[[1,"        "],[8,[30,3],null,[["@header","@items","@productModel","@seeAllModelType","@sectionType","@metricsConfigKey","@isPodcast"],[[30,1,["seeAllData","header"]],[30,1,["seeAllData","items"]],[30,1,["viewModel","product"]],[30,1,["seeAllData","seeAllModelType"]],[30,1,["seeAllData","sectionType"]],"navigateShelf",true]],null],[1,"\\n"]],[3]]],[1,"    "]],[2]]]]],[1,"\\n"]],[]],[[[1,"    "],[10,0],[14,0,"l-content-width section section--hero product-hero"],[12],[1,"\\n      "],[8,[39,8],null,[["@model"],[[30,1,["viewModel","product"]]]],null],[1,"\\n\\n      "],[8,[39,9],null,[["@hasUserRating","@reviews","@userRating"],[[28,[37,10],[[30,1,["viewModel","product","userRating","ratingCount"]],0],null],[30,1,["viewModel","reviews"]],[30,1,["viewModel","product","userRating"]]]],null],[1,"\\n\\n      "],[8,[39,11],null,[["@items","@sectionType","@metricsLocation","@profile","@headerText","@isPodcast"],[[30,1,["viewModel","topPodcasts"]],"topPodcasts","shelfTopPodcasts",[28,[37,12],["podcast"],null],[28,[37,13],["WEA.PodcastPages.TopInCategory.Title"],[["categoryName"],[[30,1,["viewModel","primaryGenre","name"]]]]],true]],null],[1,"\\n\\n      "],[8,[39,11],null,[["@items","@sectionType","@metricsLocation","@profile","@headerText","@isPodcast"],[[30,1,["viewModel","listenersAlsoSubscribed"]],"listenersAlsoSubscribed","shelfListenersAlsoSubscribed",[28,[37,12],["podcast"],null],[28,[37,13],["WEA.PodcastPages.ListenersAlsoSubscribed"],null],true]],null],[1,"\\n\\n      "],[8,[39,11],null,[["@items","@sectionType","@metricsLocation","@profile","@headerText","@isPodcast"],[[30,1,["viewModel","moreByArtist"]],"moreByArtist","shelfMoreByArtist",[28,[37,12],["podcast"],null],[28,[37,13],["WEA.PodcastPages.MoreBy"],[["podcastArtist"],[[30,1,["viewModel","mainArtist","name"]]]]],true]],null],[1,"\\n    "],[13],[1,"\\n"]],[]]]],[]]]]],[1,"\\n"]],["@model","map","SeeAllComponent"],false,["seo-tags","if","we-localnav/itunes","we-localnav/apple-podcasts","animation-wrapper","see-all/chooser","let","get","pages/podcast/header","pages/podcast/reviews","gt","product-page-shelf","shelf-profile","t"]]',moduleName:"web-experience-app/templates/podcast.hbs",isStrictMode:!1})
e.default=r}))
define("web-experience-app/templates/storefront",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"oj8Q/rI1",block:'[[[46,[28,[37,1],null,null],null,null,null],[1,"\\n"]],[],false,["component","-outlet"]]',moduleName:"web-experience-app/templates/storefront.hbs",isStrictMode:!1})
e.default=r})),define("web-experience-app/utils/amp-bidi",["exports","ember-ui-bidi-text/utils/amp-bidi"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/utils/apps/app-type",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isMessagesOnly=function(e){var t=e.primaryPlatform||e,r=t.hasMessagesExtension,n=t.isHiddenFromSpringboard
return!!r&&!!n}})),define("web-experience-app/utils/apps/apps",["exports","web-experience-app/config","@ember/utils","web-experience-app/utils/apps/device-support","@ember/object","web-experience-app/services/media-api"],(function(e,t,r,n,o,i){function a(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void r(c)}l.done?t(u):Promise.resolve(u).then(n,o)}function s(e){return function(){var t=this,r=arguments
return new Promise((function(n,o){var i=e.apply(t,r)
function a(e){c(i,n,o,a,l,"next",e)}function l(e){c(i,n,o,a,l,"throw",e)}a(void 0)}))}}function p(){return(p=s(regeneratorRuntime.mark((function e(t,r,n){var a,l,u
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===(a=r[n].map((function(e){return e.id})).sort()).length){e.next=7
break}return e.next=4,t.getApps(a)
case 4:l=e.sent,u=(0,i.createProxyWithMetaObject)(l,r[n].meta),(0,o.set)(r,n,u)
case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
if((0,n.isMacOnly)(e))return"desktopApp"
if((0,n.isAppleTVOnly)(e))return"AppleTVOnlyApp"
var t="iOS"
return(0,n.isAppleTVSupported)(e)&&(t+="tvOS"),(0,n.isMacSupported)(e)&&(t+="macOS"),(0,n.isWatchSupported)(e)&&(t+="watchOS"),"iOS"===t?"iosSoftware":"".concat(t,"App")}Object.defineProperty(e,"__esModule",{value:!0}),e.appLockupModelTransform=function(e){var t,r,n,o,i,a=l(l(l({},e),e.attributes),{},{attributes:null,primaryGenre:{name:null==e||null===(t=e.attributes)||void 0===t?void 0:t.genreDisplayName},kind:f(null===(r=e.attributes)||void 0===r?void 0:r.deviceFamilies)})
if(null!=a&&null!==(n=a.platformAttributes)&&void 0!==n&&n.ios){var u,c,s,p,d,b,m,y
a.isHiddenFromSpringboard=null==a||null===(u=a.platformAttributes)||void 0===u||null===(c=u.ios)||void 0===c?void 0:c.isHiddenFromSpringboard,a.hasMessagesExtension=null==a||null===(s=a.platformAttributes)||void 0===s||null===(p=s.ios)||void 0===p?void 0:p.hasMessagesExtension,a.ovalArtwork=null==a||null===(d=a.platformAttributes)||void 0===d||null===(b=d.ios)||void 0===b?void 0:b.ovalArtwork,a.artwork=null==a||null===(m=a.platformAttributes)||void 0===m||null===(y=m.ios)||void 0===y?void 0:y.artwork}else if(null!=a&&null!==(o=a.platformAttributes)&&void 0!==o&&o.osx){var h,v
a.artwork=null==a||null===(h=a.platformAttributes)||void 0===h||null===(v=h.osx)||void 0===v?void 0:v.artwork}else if(null!=a&&null!==(i=a.platformAttributes)&&void 0!==i&&i.appletvos){var g,w
a.artwork=null==a||null===(g=a.platformAttributes)||void 0===g||null===(w=g.appletvos)||void 0===w?void 0:w.artwork}return a},e.availabilityMessageKey=function(e,t){var r=e.deviceFamilies,o=(0,n.isAppleTVSupported)(r),i=(0,n.isMacSupported)(r),a=(0,n.isWatchSupported)(r)
if((0,n.isMacOnly)(r)||i&&t.browser.ismacOS||e.isIOSBinaryMacOSCompatible)return"WEA.AppPages.Availability.macOS"
if((0,n.isAppleTVOnly)(r))return"WEA.AppPages.Availability.tvOS"
if((0,n.isWatchOnly)(e))return"WEA.AppPages.Availability.watchOS"
if((0,n.isiPadOnly)(r))return"WEA.AppPages.Availability.iOS.iPad"
if((0,n.isiPhoneOnly)(r))return"WEA.AppPages.Availability.iOS.iPhone"
if((0,n.isiOSSupported)(r)&&t.browser.isiOS)return"WEA.AppPages.Availability.iOS.isiOS"
if(o&&a)return i?"WEA.AppPages.Availability.iOStvOSmacOSwatchOS":"WEA.AppPages.Availability.iOStvOSwatchOS"
if(o)return i?"WEA.AppPages.Availability.iOStvOSmacOS":"WEA.AppPages.Availability.iOStvOS"
if(a)return i?"WEA.AppPages.Availability.iOSmacOSwatchOS":(0,n.isiPadSupported)(r)?"WEA.AppPages.Availability.iOSwatchOS":"WEA.AppPages.Availability.iOSwatchOS.NoiPad"
if(i)return"WEA.AppPages.Availability.iOSmacOS"
return"WEA.AppPages.Availability.iOS"},e.filterFeaturedInStories=function(e){var t=e["related-editorial-items"]
t&&(e["related-editorial-items"]=t.filter((function(e){var t,r
return!(null!==(t=e._meta)&&void 0!==t&&null!==(r=t.robots)&&void 0!==r&&r.restrictSearch)})))},e.filterSystemDeletableApps=function(e){if(e){var n=(0,r.typeOf)(e)
if(["array","object"].includes(n)){var o="array"===n?e:Object.values(e)
return o=o.filter((function(e){return function(e){var r=t.default.systemAppsToFilter,n=e.bundleId
if(!r.includes(n))return e}(e)})),"array"===n?o:o.reduce((function(e,t){return e[t.id]=t,e}),{})}}},e.getKind=f,e.updateShelfDataRelationship=function(e,t,r){return p.apply(this,arguments)}})),define("web-experience-app/utils/apps/device-support",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PLATFORMS=void 0,e.isAppleTVOnly=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return r(e)&&1===e.length},e.isAppleTVSupported=r,e.isMacOnly=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return i(e)&&1===e.length},e.isMacSupported=i,e.isWatchOnly=function(e){var t,r=(null===(t=e.platformAttributes)||void 0===t?void 0:t.ios)||e.primaryPlatform
return null==r?void 0:r.isStandaloneForWatchOS},e.isWatchSupported=a,e.isiOSApp=function(e,t){if(!n(e))return!1
return!t},e.isiOSSupported=n,e.isiPadOnly=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return o(e)&&1===e.length},e.isiPadSupported=o,e.isiPhoneOnly=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
if(1===e.length)return e.includes("iphone")||e.includes("ipod")
if(2===e.length)return e.includes("iphone")&&e.includes("ipod")
return!1},e.isiPhoneSupported=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return e.includes("iphone")},e.primaryPlatformSupported=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0
if(0===e.length)return""
if(1===e.length)return t[e[0]]||""
if(n(e)){if(i(e))return r?t.iphone:t.mac
var o=e.includes("iphone"),u=a(e)
return u&&o?l(e):u?t.watch:t.iphone}return t[e[0]]||""},e.whichPlatform=function(e,t){return e.find((function(e){return e.id.includes(t)}))}
var t={iphone:"iosPlatform",ipad:"iosPlatform",ipod:"iosPlatform",tvos:"atvPlatform",mac:"osxPlatform",watch:"watchPlatform"}
function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return e.includes("tvos")}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return e.includes("iphone")||e.includes("ipad")||e.includes("ipod")||e.includes("watch")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return e.includes("ipad")}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return e.includes("mac")}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return e.includes("watch")}function l(e){return e.indexOf("watch")<e.indexOf("iphone")?t.watch:t.iphone}e.PLATFORMS=t})),define("web-experience-app/utils/books/editorial",["exports","@ember/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.componentNameForKind=e.BOOK_ELEMENT=void 0,e.filterRenderable=function(e,t){return e.filter((function(e){var r=e.editorialElementKind
return t[r]}))}
var r,n,o=(n={KIND_ROOT:"441",KIND_TAB_ROOT:"442",KIND_HERO_LIST:"443",KIND_HERO:"444",KIND_HERO_ANIMATED_COVER:"445",KIND_SWOOSH:"446",KIND_COLLAGE_SWOOSH:"447",KIND_DOUBLE_SWOOSH:"448",KIND_PEEK_SWOOSH:"449",KIND_COLLAGE_PEEK_SWOOSH:"450",KIND_DOUBLE_PEEK_SWOOSH:"451",KIND_SWOOSH_SET:"452",KIND_SWOOSH_SET_ROW:"453",KIND_SINGLE_BOOK:"454",KIND_CLICK_THROUGH:"455",KIND_FOR_YOU:"456",KIND_CHART_SET:"457",KIND_BRICK_ROW:"459",KIND_BRICK:"460",KIND_BRICK_COMPOSITING:"461",KIND_BRICK_SINGLE_COVER:"462",KIND_BRICK_CATALOG_COVER:"467",KIND_GENRE_LINK_STACK:"463",KIND_H_LIST_BOX:"464",KIND_LIST_BOX_SECTION:"465",KIND_LIST_BOX_FOR_YOU_SECTION:"468",KIND_LIST_BOX_TOP_CHART_SECTION:"469",KIND_CHART_GENRE_LINK_STACK:"473",KIND_BOX_MARKER:"466"},r="BOOK_ELEMENT",new Proxy(n,{get(e,t,n){if(!e[t])throw new Error("".concat(r,".").concat(t," kind does not exist"))
return Reflect.get(e,t,n)}}))
e.BOOK_ELEMENT=o
var i,a=(i={[o.KIND_SINGLE_BOOK]:"editorial/books/single-book-widget",[o.KIND_SWOOSH]:"editorial/books/swoosh",[o.KIND_BRICK_ROW]:"editorial/books/brick-row",[o.KIND_BRICK_COMPOSITING]:"editorial/books/brick-compositing"},function(e){if(!(e in i))throw new Error("bad editorialElementKind = ".concat(e))
return i[e]})
e.componentNameForKind=a})),define("web-experience-app/utils/breakpoints",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.breakpointToMediaQuery=function(e,t){var r=e.max,n=e.min,o="large"!==t&&r?"(max-width: ".concat(r,"px)"):null
return["small"!==t&&n?"(min-width: ".concat(n,"px)"):null,o].filter((function(e){return!!e})).join(" and ")}})),define("web-experience-app/utils/bytes-to-readable",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.parse=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"b",o=0
for(;e/t>1&&o<r.length;)e/=t,o++
return{bytes:e=Math.round(10*e)/10,label:r[o][n]}}
var t=1e3,r=[{b:"byte",B:"byte"},{b:"KB",B:"KB.AX"},{b:"MB",B:"MB.AX"},{b:"GB",B:"GB.AX"}]})),define("web-experience-app/utils/cache-control",["exports","@amp/foundation/-internals/cache-control"],(function(e,t){function r(e,t,i){return(r=n()?Reflect.construct:function(e,t,r){var n=[null]
n.push.apply(n,t)
var i=new(Function.bind.apply(e,n))
return r&&o(i,r.prototype),i}).apply(null,arguments)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(){function e(n){i(this,e),this._inner=n instanceof t.CacheControl?n:r(t.CacheControl,Array.prototype.slice.call(arguments))}var n,o,l
return n=e,l=[{key:"parse",value:function(){return new e(t.CacheControl.parse.apply(t.CacheControl,arguments))}}],(o=[{key:"mustRevalidate",get:function(){return this._inner.mustRevalidate}},{key:"noCache",get:function(){return this._inner.noCache}},{key:"noStore",get:function(){return this._inner.noStore}},{key:"noTransform",get:function(){return this._inner.noTransform}},{key:"isPublic",get:function(){return this._inner.isPublic}},{key:"isPrivate",get:function(){return this._inner.isPrivate}},{key:"proxyRevalidate",get:function(){return this._inner.proxyRevalidate}},{key:"maxAge",get:function(){return this._inner.maxAge}},{key:"sharedMaxAge",get:function(){return this._inner.sharedMaxAge}},{key:"toString",value:function(){return[this.mustRevalidate?"must-revalidate":null,this.noCache?"no-cache":null,this.noStore?"no-store":null,this.noTransform?"no-transform":null,this.isPublic?"public":null,this.isPrivate?"private":null,this.proxyRevalidate?"proxy-revalidate":null,"number"==typeof this.maxAge?"max-age=".concat(this.maxAge):null,"number"==typeof this.sharedMaxAge?"s-maxage=".concat(this.sharedMaxAge):null].filter(Boolean).join(", ")}},{key:"reconcile",value:function(t){var r=this.isPrivate||t.isPrivate
return new e(this.mustRevalidate||t.mustRevalidate,this.noCache||t.noCache,this.noStore||t.noStore,this.noTransform||t.noTransform,(this.isPublic||t.isPublic)&&!r,r,this.proxyRevalidate||t.proxyRevalidate,u(this.maxAge,t.maxAge),u(this.sharedMaxAge,t.sharedMaxAge))}},{key:"withoutNoTransform",value:function(){return new e(this.mustRevalidate,this.noCache,this.noStore,!1,this.isPublic,this.isPrivate,this.proxyRevalidate,this.maxAge,this.sharedMaxAge)}}])&&a(n.prototype,o),l&&a(n,l),Object.defineProperty(n,"prototype",{writable:!1}),e}()
function u(e,t){return"number"==typeof e&&"number"==typeof t?Math.min(e,t):"number"==typeof e?e:t}e.default=l})),define("web-experience-app/utils/charts",["exports","web-experience-app/utils/genres","web-experience-app/services/app-view-state","web-experience-app/utils/errors"],(function(e,t,r,n){function o(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.VIEW_STATE_AUDIOBOOK=e.VALID_DEVICE_TYPES=void 0,e.findCurrentGenreDetails=function(e,r){if(r&&![t.APPS_GENRE_ID_STATIC,t.GAMES_GENRE_ID_STATIC,t.BOOKS_GENRE_ID_STATIC].includes(r)){var o=(null==e?void 0:e.genres)||[]
null!=e&&e.extraGenres&&(o=null==e?void 0:e.extraGenres.reduce((function(e,t){return e.concat(t)}),o))
var i=o.find((function(e){var t=e.genre
return t&&t.toString()===r.toString()}))
if(!i)throw new n.NotFoundError("Genre not found")
return{genreTitle:i.name,chartUrl:i.chartUrl}}return{}},e.getChartsAndKind=function(e,t){t&&(e=l)
return{chartType:u[e],kind:c[e]}},e.getChartsListNormalized=function(e,t,r){return function(e,t){return e.filter((function(e){return e.data&&e.data.length})).map((function(e){return e.data=e.data.filter((function(e){return e.attributes})),e})).map((function(e){return e.data=e.data.map((function(e){var r,n,o,a=i(i({kind:t},e),e.attributes)
return null!=e&&null!==(r=e.attributes)&&void 0!==r&&null!==(n=r.platformAttributes)&&void 0!==n&&null!==(o=n.ios)&&void 0!==o&&o.artwork&&(a.artwork=e.attributes.platformAttributes.ios.artwork),a})),e}))}(e&&e[t]||[],r)},e.getTopChartsApiCallInfo=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.baseGenreIds,o=r.genreId,i=r.chartName,a=r.limit,l=r.platform,u=r.sparseLimit,c=r.ages,s="/v1/catalog/".concat(t,"/charts"),p={types:e,platform:l}
!o&&n&&(p.genre=r.baseGenreIds[0])
o&&(p.genre=o)
i&&(p.chart=i)
a&&(p.limit=a)
u&&(p.sparseLimit=u)
isNaN(c)||(p.ages=c)
return Object.keys(p).forEach((function(e){void 0===p[e]&&delete p[e]})),{endpoint:s,apiParams:p}},e.pruneTitleForCharts=function(e){return e.replace(" (US)","")}
var l="audiobook"
e.VIEW_STATE_AUDIOBOOK=l
var u={[r.VIEW_STATES.APP]:"apps",[r.VIEW_STATES.BOOK]:"books",[l]:"audio-books"},c={[r.VIEW_STATES.APP]:"app",[r.VIEW_STATES.BOOK]:"epubBook",[l]:"book"}
e.VALID_DEVICE_TYPES=["ipad","iphone"]})),define("web-experience-app/utils/color",["exports","@ember/debug"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){var t=e.substr(e.startsWith("#")?1:0)
if(3===t.length){var n=r(t,3),o=n[0],i=n[1],a=n[2]
t="".concat(o).concat(o).concat(i).concat(i).concat(a).concat(a)}return{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16)}}Object.defineProperty(e,"__esModule",{value:!0}),e.hexToRgb=function(e){var t=o(e),r=t.r,n=t.g,i=t.b
return"rgb(".concat(r,", ").concat(n,", ").concat(i,")")},e.isCssColor=function(e){return/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(String(e).trim())},e.isLight=function(e){var t=o(e),r=t.r,n=t.g,i=t.b
return Math.sqrt(.241*r*r+.691*n*n+.068*i*i)>127},e.rgbToRgba=function(e,t){var r=e.substr(4,e.length-5)
return"rgba(".concat(r,", ").concat(t,")")}})),define("web-experience-app/utils/date-time",["exports","date-fns","@ember/utils","@ember/debug"],(function(e,t,r,n){function o(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.FORMATS=void 0,e.diffInMinutes=function(e,t){e=b(e),t=b(t)
var r=e.getTime()-t.getTime()
return Math.ceil(Math.abs(r/6e4))},e.diffInSeconds=function(e,r){"string"==typeof e&&(e=(0,t.parseISO)(e))
"string"==typeof r&&(r=(0,t.parseISO)(r))
return(0,t.differenceInSeconds)(r,e)},e.formatDate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"DEFAULT"
if(null==e)return""
var n=d(t,r)
if(e=b(e),isNaN(e.getTime()))return""
return n.format(e)},e.formatISOString=function(e){if((0,r.isNone)(e))return
if(!(e instanceof Date)&&(e=new Date(e),isNaN(e.getTime())))return
return e.toISOString()},e.getDateObject=b,e.getFormatter=d
var l={month:"short",day:"numeric",year:"numeric"},u={DEFAULT:"DEFAULT",LONG_DATE:"LONG_DATE",LONG_DATE_ABBREVIATED:"LONG_DATE_ABBREVIATED",SHORT_DATE:"SHORT_DATE",YEAR_MONTH_ABBREVIATED:"YEAR_MONTH_ABBREVIATED",YEAR:"YEAR",MONTH_DAY:"MONTH_DAY",MONTH_ABBREVIATED_DAY:"MONTH_ABBREVIATED_DAY",TIME:"TIME"}
e.FORMATS=u
var c={DEFAULT:l,LONG_DATE:{month:"long",day:"numeric",year:"numeric"},LONG_DATE_ABBREVIATED:l,SHORT_DATE:{month:"2-digit",day:"2-digit",year:"numeric"},YEAR_MONTH_ABBREVIATED:{month:"short",year:"numeric"},YEAR:{year:"numeric"},MONTH_DAY:{month:"long",day:"numeric"},MONTH_ABBREVIATED_DAY:{month:"short",day:"numeric"},TIME:{hour:"numeric",minute:"2-digit"}},s={da:{TIME:{locale:"en-GB"}},fi:{TIME:{locale:"en-GB"}},"fr-CA":{TIME:{locale:"en-GB"}},id:{TIME:{locale:"en-GB"}},el:{TIME:{locale:"en-US"}},"en-AU":{TIME:{locale:"en-US"}},"en-CA":{TIME:{locale:"en-US"}}},p=/^([-+]?[0-9]{4})(-[0-9]{2})?(-[0-9]{2})?$/,f={}
function d(e,t){var r
t in u||(t="DEFAULT")
var n=null===(r=s[e])||void 0===r?void 0:r[t]
n&&(e=n.locale)
var o="".concat(e,"_").concat(t),a=f[o]
if(a)return a
var l=i(i({},c[t]),{},{calendar:"gregory"})
return a=new Intl.DateTimeFormat(e,l),f[o]=a,a}function b(e){e instanceof Date||(e=p.test(e)?(0,t.parseISO)(e):new Date(e))
return e}})),define("web-experience-app/utils/duration",["exports","@ember/debug"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}var o,i
function a(e){var t=Math.floor(e/60/60)
return{hours:t,minutes:Math.floor(e/60)-60*t,seconds:e%60}}Object.defineProperty(e,"__esModule",{value:!0}),e.duration=a,e.formatDuration=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en"
if(void 0===e)return""
o=o||new Intl.NumberFormat(t,{minimumIntegerDigits:1}),i=i||new Intl.NumberFormat(t,{minimumIntegerDigits:2})
var n=(new Date).toLocaleTimeString(t).match(/\b[:.]\b/)||[],l=r(n,1),u=l[0],c=void 0===u?":":u,s=a(e),p=s.hours,f=s.minutes,d=s.seconds,b=p?0:1,m=[p,f,d].map((function(e,t){return e<10&&t>b?i.format(e):o.format(e)})).filter((function(e,t){return 0!==t||!("00"===e||"0"===e)})).join("".concat(c))
return m},e.isoDuration=function(e){return function(e){if(0===e)return"P0D"
var t=a(e),r=t.hours,n=t.minutes,o=t.seconds,i=[r,n,o].map((function(e,t){var r
if(e&&0!==e)return r=0===t?"H":1===t?"M":"S","".concat(e).concat(r)})).filter(Boolean).join("")
return"PT".concat(i)}(e)}})),define("web-experience-app/utils/ember-data/build-attributes",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){var r={}
return e.eachAttribute((function(n){r[n]=t?t[n]:e[n]})),r}})),define("web-experience-app/utils/ember-data/build-json-api-object",["exports","web-experience-app/utils/ember-data/build-attributes"],(function(e,t){function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){return Object.keys(e).reduce((function(t,n){return t.push.apply(t,r(e[n])),t}),[])}Object.defineProperty(e,"__esModule",{value:!0}),e.buildJSONAPIObject=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a={data:{type:e.modelName,id:r.id,attributes:(0,t.default)(e,r),relationships:this.buildRelationships(e,r,i)}}
n&&(i=this.includedLockups(n,i))
return a.included=o(i),a},e.combineIncludedResources=o})),define("web-experience-app/utils/ember-data/json-api",["exports"],(function(e){function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.ResourceRegister=void 0,e.buildJSONAPIObject=function(e,r){return function(e){var r=[],n=[e],l=!1,u=new o,c=function(){var e,o=n.shift()
if("relationships"in o){var c=Object.keys(o.relationships)
c.forEach((function(e){n.push.apply(n,t(function(e){if(Array.isArray(e))return e
return[e]}(o.relationships[e].data)))})),o.relationships=Object.assign.apply(Object,t(c.map((e=o,function(t){var r,n=e.relationships[t],o=n.data,i=n.next
return i&&(r={next:i}),{[t]:{data:Array.isArray(o)?o.map(a):a(o),meta:r}}}))))}l?u.has(o)||r.push(o):l=!0,i(u,o)}
for(;n.length>0;)c()
return{data:e,included:r}}(r?e.data:e.data[0])},e.equalResourceObject=function(e,t){return e.type===t.type&&e.id===t.id},e.mergeResourcesInRegister=i
var o=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.map=new Map}var t,r,o
return t=e,(r=[{key:"register",value:function(e){var t=e.id,r=e.type,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this.map.has(r)||this.map.set(r,new Map),this.map.get(r).set(t,n)}},{key:"has",value:function(e){var t=e.id,r=e.type
return this.map.has(r)&&this.map.get(r).has(t)}},{key:"get",value:function(e){var t=e.id,r=e.type
return this.map.has(r)?this.map.get(r).get(t):null}},{key:"filterCollection",value:function(e){var t=this
return e.filter((function(e){return!t.has(e)&&(t.register(e),!0)}))}}])&&n(t.prototype,r),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()
function i(e,t){if(!e.has(t))return e.register(t,t),t
var r=e.get(t)
"object"==typeof r.attributes?Object.assign(r.attributes,t.attributes):r.attributes=t.attributes}function a(e){return{id:e.id,type:e.type}}e.ResourceRegister=o})),define("web-experience-app/utils/errors",["exports"],(function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function n(e){var t="function"==typeof Map?new Map:void 0
return(n=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e
var r
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==t){if(t.has(e))return t.get(e)
t.set(e,n)}function n(){return o(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)})(e)}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var n=[null]
n.push.apply(n,t)
var o=new(Function.bind.apply(e,n))
return r&&a(o,r.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.NotFoundError=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)})(f,e)
var n,o,u,c,s,p=(n=f,o=i(),function(){var e,t=l(n)
if(o){var i=l(this).constructor
e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments)
return r(this,e)})
function f(e){var t
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,"page not found")).name="NotFoundError",t.extraInfo=e,t}return u=f,c&&t(u.prototype,c),s&&t(u,s),Object.defineProperty(u,"prototype",{writable:!1}),u}(n(Error))
e.NotFoundError=u})),define("web-experience-app/utils/fitness/eoservice-storefronts-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={slugToStorefront:{do:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},ec:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},hn:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},jm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ni:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},py:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},uy:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","es-mx"]},mo:{defaultLanguage:"zh-hk",supportedLanguages:["zh-hk","en-gb","zh-tw"]},eg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","ar-sa"]},kz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},lv:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},lt:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mt:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},li:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},md:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},al:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bj:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},bt:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bf:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},kh:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},cv:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},td:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},cg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},fj:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},gm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},gw:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},kg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},la:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},lr:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mw:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mr:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","ar-sa"]},fm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mn:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},na:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},pw:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ps:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},pg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},st:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},sc:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},sl:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},sb:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},sz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},tj:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},tm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},zw:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},xk:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},us:{defaultLanguage:"en-us",supportedLanguages:["en-us","es-mx","ar-sa","ru-ru","zh-cn","vi-vn","fr-fr","pt-br","ko-kr","zh-tw"]},fr:{defaultLanguage:"fr-fr",supportedLanguages:["fr-fr","en-gb"]},de:{defaultLanguage:"de-de",supportedLanguages:["de-de","en-gb"]},gb:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},at:{defaultLanguage:"de-de",supportedLanguages:["de-de","en-gb"]},be:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","nl-nl"]},fi:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fi-fi"]},gr:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","el-gr"]},ie:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},it:{defaultLanguage:"it-it",supportedLanguages:["it-it","en-gb"]},lu:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","de-de"]},nl:{defaultLanguage:"nl-nl",supportedLanguages:["nl-nl","en-gb"]},pt:{defaultLanguage:"pt-pt",supportedLanguages:["pt-pt","en-gb"]},es:{defaultLanguage:"es-es",supportedLanguages:["es-es","en-gb","ca-es"]},ca:{defaultLanguage:"en-ca",supportedLanguages:["en-ca","fr-ca"]},se:{defaultLanguage:"sv-se",supportedLanguages:["sv-se","en-gb"]},no:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","no-no"]},dk:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","da-dk"]},ch:{defaultLanguage:"de-ch",supportedLanguages:["de-ch","de-de","en-gb","fr-fr","it-it"]},au:{defaultLanguage:"en-au",supportedLanguages:["en-au","en-gb"]},nz:{defaultLanguage:"en-au",supportedLanguages:["en-au","en-gb"]},jp:{defaultLanguage:"ja-jp",supportedLanguages:["ja-jp","en-us"]},ee:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},am:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bw:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ci:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},jo:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},ke:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mk:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},ml:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},mu:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},ne:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},sn:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},tn:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","ar-sa"]},ug:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ai:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bs:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ag:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bb:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},vg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ky:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},dm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},gd:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ms:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},kn:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},lc:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},vc:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},tt:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},tc:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},gy:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},sr:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","nl-nl"]},bz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","es-mx"]},bo:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},cy:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","el-gr","tr-tr"]},is:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},bh:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},bn:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ng:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},om:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},dz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","ar-sa"]},ao:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},by:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},uz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ly:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},az:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},et:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},mm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ye:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},tz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},gh:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},cm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},nr:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ws:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},to:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},vu:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},af:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ad:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ba:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","hr-hr"]},cd:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},ga:{defaultLanguage:"fr-fr",supportedLanguages:["fr-fr","en-gb"]},ge:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},gn:{defaultLanguage:"fr-fr",supportedLanguages:["fr-fr","en-gb"]},iq:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},mc:{defaultLanguage:"fr-fr",supportedLanguages:["fr-fr","en-gb"]},me:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","hr-hr"]},ma:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","ar-sa"]},rw:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr"]},zm:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},cf:{defaultLanguage:"fr-fr",supportedLanguages:["fr-fr","en-gb"]},hk:{defaultLanguage:"zh-hk",supportedLanguages:["zh-hk","en-gb","zh-tw"]},sg:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","zh-cn"]},cn:{defaultLanguage:"zh-cn",supportedLanguages:["zh-cn","en-gb"]},kr:{defaultLanguage:"ko-kr",supportedLanguages:["ko-kr","en-gb"]},in:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","hi-in"]},mx:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},ru:{defaultLanguage:"ru-ru",supportedLanguages:["ru-ru","en-gb","uk-ua"]},tw:{defaultLanguage:"zh-tw",supportedLanguages:["zh-tw","en-gb"]},vn:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","vi-vi"]},za:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},my:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ms-my"]},ph:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},th:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","th-th"]},id:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","id-id"]},pk:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},pl:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","pl-pl"]},sa:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},tr:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","tr-tr"]},ae:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},hu:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","hu-hu"]},cl:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},np:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},pa:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},lk:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},ro:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ro-ro"]},mv:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},cz:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","cs-cz"]},bd:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},il:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","iw-il","he-il"]},ua:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","uk-ua","ru-ru"]},kw:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},hr:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","hr-hr"]},cr:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},sk:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","sk-sk"]},lb:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","fr-fr","ar-sa"]},qa:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","ar-sa"]},si:{defaultLanguage:"en-gb",supportedLanguages:["en-gb"]},rs:{defaultLanguage:"en-gb",supportedLanguages:["en-gb","hr-hr"]},co:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},ve:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},br:{defaultLanguage:"pt-br",supportedLanguages:["pt-br","en-gb"]},gt:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},ar:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},sv:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]},pe:{defaultLanguage:"es-mx",supportedLanguages:["es-mx","en-gb"]}}}})),define("web-experience-app/utils/fitness/eoservice-storefronts",["exports","web-experience-app/utils/fitness/eoservice-storefronts-data","@ember/debug"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.SLUG_TO_STOREFRONT=void 0,e.getDefaultLanguage=function(e){return n[e].defaultLanguage},e.getLanguage=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if("development"===o.environment&&o.i18n.useDevLoc)return(0,r.debug)("[i18n] Using ".concat(i," language")),i
if(!n[t])return
var a=(e||"").toLowerCase(),l="".concat(a.substring(0,2),"-"),u=n[t].supportedLanguages
return u.find((function(e){return e===a}))||u.find((function(e){return e.startsWith(l)}))||n[t].defaultLanguage},e.getLanguagesOrdered=function(e){var t=n[e],r=t.defaultLanguage,o=t.supportedLanguages,i=void 0===o?[]:o
if(r){var a=i.filter((function(e){return e!==r}))
return[r].concat(a)}return i},e.validateStorefront=function(e){if("string"!=typeof e||2!==e.length)return!1
var t=e.toLowerCase()
return t in n&&t}
var n=t.default.slugToStorefront
e.SLUG_TO_STOREFRONT=n
var o=t.default.slugToStorefront,i="dev"
var a=o
e.default=a})),define("web-experience-app/utils/fitness/promise-state-proxy",["exports","@glimmer/tracking"],(function(e,t){var r,n,o,i
function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=(n=c((r=u((function e(t){var r,l,u,c=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),a(this,"isFulfilled",n,this),a(this,"isRejected",o,this),a(this,"content",i,this),u=void 0,(l="promise")in(r=this)?Object.defineProperty(r,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[l]=u,this.promise=t.then((function(e){return c.content=e,c.isFulfilled=!0,e}),(function(){c.isRejected=!0}))}))).prototype,"isFulfilled",[t.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),o=c(r.prototype,"isRejected",[t.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=c(r.prototype,"content",[t.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),r)
e.default=s})),define("web-experience-app/utils/fitness/stick-marketing-params-to-redirect-url",["exports","web-experience-app/utils/url-search-params"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){var o=n.split("?")[1]||"",i=new t.default(o)
return new t.default(e).forEach((function(e,t){r.includes(t.toLowerCase())&&i.set(t,e)})),i.toString()?"".concat(n.split("?")[0],"?").concat(i):n}
var r=["itscg","itsct","mttn3pid","mttnagencyid","mttncc","mttnsiteid","mttnsubad","mttnsubkw","mttnsubplmnt","cid","rid","afid"]})),define("web-experience-app/utils/generate-monogram",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var t=e.split(" ").slice(0,2).map((function(e){return e[0].toUpperCase()})).join("")
return{isVector:!0,url:"data:image/svg+xml,%3Csvg width='640' height='640' viewBox='0 0 640 640' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A5ABB8'/%3E%3Cstop offset='100%25' stop-color='%23848993'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Ctext x='320' y='50%25' dy='0.35em' font-size='250' fill='%23fff' text-anchor='middle' font-family='SF Pro Display,Helvetica,Arial' font-weight='500'%3E".concat(t,"%3C/text%3E%3C/svg%3E"),aspectRatio:1}}})),define("web-experience-app/utils/genres",["exports","web-experience-app/utils/routing"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.POPIDS_FOR_GENRE_SLUGS=e.GAMES_GENRE_ID_STATIC=e.BOOKS_GENRE_ID_STATIC=e.AUDIOBOOKS_GENRE_ID_STATIC=e.APPS_GENRE_ID_STATIC=void 0,e.getAllGenresApiCallInfo=function(e,t){var r
return null===(r=t.baseGenreIds)||void 0===r?void 0:r.map((function(r){return function(e,t){var r=t.genreId,n=t.platform,o=void 0===n?"ipad":n
return{endpoint:"/v1/editorial/".concat(e,"/categories"),apiParams:{genre:r,platform:o,tabs:"ios"}}}(e,{platform:t.platform,genreId:r})}))},e.getGenreIdAndPopId=function(e,o,i){var a=i?r:"38"
return{genreId:e&&e!==t.ABSENT_SIGIL?e:a,popId:n[o]}},e.parseGenresModel=function(e){var t=o(e[0]||[]),r=function(e){return e.slice(0,4)}(t),n=e.slice(1).map((function(e){return o(e)}))
return{genres:t,popularGenres:r,extraGenres:n}}
e.BOOKS_GENRE_ID_STATIC="38"
var r="50000024"
e.AUDIOBOOKS_GENRE_ID_STATIC=r
e.APPS_GENRE_ID_STATIC="36"
e.GAMES_GENRE_ID_STATIC="6014"
var n={"top-paid":43,"top-free":42,"nyt-fiction":49,"nyt-non-fiction":48}
function o(e){var t,r
return((null==e||null===(t=e.categories)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.children)||[]).sort((function(e,t){return e.name.localeCompare(t.name)}))}e.POPIDS_FOR_GENRE_SLUGS=n})),define("web-experience-app/utils/get-font-url",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getFontURL=function(e){if(t.test(e))return o
return i[e]||n}
var t=/^(ar-)/,r="//www.apple.com/wss/fonts",n="".concat(r,"?families=SF+Pro,v2|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),o="".concat(r,"?families=SF+Pro,v2|SF+Pro+Gulf,v1|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),i={"ja-jp":"".concat(r,"?families=SF+Pro,v2|SF+Pro+JP,v1|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),"zh-cn":"".concat(r,"?families=SF+Pro,v2|SF+Pro+SC,v1|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),"zh-hk":"".concat(r,"?families=SF+Pro,v2|SF+Pro+HK,v1|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),"zh-mo":"".concat(r,"?families=SF+Pro,v2|SF+Pro+TC,v1|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),"zh-tw":"".concat(r,"?families=SF+Pro,v2|SF+Pro+TC,v1|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),"th-th":"".concat(r,"?families=SF+Pro,v2|SF+Pro+TH,v2|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1"),"ko-kr":"".concat(r,"?families=SF+Pro,v2|SF+Pro+KR,v2|SF+Pro+Icons,v1|SF+Pro+Rounded,v1|New+York+Small,v1|New+York+Medium,v1")}})),define("web-experience-app/utils/host",["exports","web-experience-app/config/environment","web-experience-app/utils/process-env"],(function(e,t,r){function n(){return t.default.API.FitnessHost}Object.defineProperty(e,"__esModule",{value:!0}),e.getAppEventHost=function(){return r.default.FASTBOOT_API_APP||t.default.API.AppEventHost},e.getAppsHost=function(){return r.default.FASTBOOT_API_APP||t.default.API.AppHost},e.getBooksHost=function(){return r.default.FASTBOOT_API_BOOK||t.default.API.BookHost},e.getFitnessHost=function(){return r.default.FASTBOOT_API_FITNESS||n()},e.getFitnessHostClient=n,e.getOBCHost=function(){return r.default.FASTBOOT_API_OBC||t.default.API.obcMetadataBaseUrl},e.getPodcastHost=function(){return r.default.FASTBOOT_API_PODCAST||t.default.API.PodcastHost}})),define("web-experience-app/utils/i18n/compile-template",["exports","@ember/debug","web-experience-app/utils/string-template","@ember/template","@ember/object"],(function(e,t,r,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return function(t){var i=(0,r.replaceKeys)(e,t,"web-experience-app.i18n.missing-variable-in-loc-key")
return t&&(0,o.get)(t,"_disableSafeString")?i:(0,n.htmlSafe)(i)}}})),define("web-experience-app/utils/i18n/index",["exports","@ember/string"],(function(e,t){function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.ogKeyFor=function(e,i,a){return function(e,i,a,l){var u=(c=a.split("."),s=1,function(e){if(Array.isArray(e))return e}(c)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(c,s)||function(e,t){if(e){if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(c,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())
var c,s
a=u[0]
var p=n[e],f=(0,t.classify)("".concat(a,"Pages"))
return[o,f,p,i,l||a].join(".")}("og",e,i,a)}
var n={og:"FB",twitter:"Twitter"},o="WEA"})),define("web-experience-app/utils/i18n/missing-message",["exports","@amp/ember-localizer/utils/i18n/missing-message"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/utils/id-gen",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wea-genid",t=0
return function(){return"".concat(e,"-").concat(t++)}}
e.default=t})),define("web-experience-app/utils/images",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.constrainImage=function(e,t){var r=e.width,n=e.height,o=t.width,i=t.height
r>o&&(n*=o/r,r=o)
n>i&&(r*=i/n,n=i)
return{width:Math.ceil(r),height:Math.ceil(n)}},e.isPortrait=function(e){return function(e,t){if(e)return t/e
return NaN}(e.height,e.width)<=1},e.isSquare=function(e){var t=e.aspectRatio
return t>=.97&&t<=1.03}}))
define("web-experience-app/utils/launch-client",["exports","@ember/debug","@amp/foundation/-internals/storage","web-experience-app/config"],(function(e,t,r,n){function o(e){var t=(0,r.getCookie)(e)
return t&&(t=decodeURIComponent(t)),t}function i(e){if(e&&"string"==typeof e){var t=e
return n.default.launchQueryParameters.forEach((function(e){t=t.replace(new RegExp(e),n.default.launchNativeParameters[e])})),t}}Object.defineProperty(e,"__esModule",{value:!0}),e.addLaunchQueryParams=function(e,t){n.default.launchQueryParameters.forEach((function(r){var o=t[r]
o&&(e[n.default.launchNativeParameters[r]]=o)}))},e.googlePlayStoreLink=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href
return"https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=".concat(encodeURIComponent(e))},e.processQueryParams=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=-1!==e.indexOf("?")?"&":"?"
if(document){(0,t.debug)("[launch-client] document.cookie: ".concat(document.cookie))
var a=o("xp_ci"),l=o("a"),u=o("itscc"),c=o("itcCt");(0,t.debug)("[launch-client] refClientId: ".concat(a)),a&&(r["ign-refClientId"]=a),(0,t.debug)("[launch-client] affiliateCookie: ".concat(l)),l&&(r.affC=l),(0,t.debug)("[launch-client] figaroCookie: ".concat(u)),u&&(r.itscc=u),(0,t.debug)("[launch-client] crossfireCookie: ".concat(c)),c&&(r.itcCt=c)}var s=Object.keys(r).sort().filter((function(e){return"string"==typeof r[e]})).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(r[e]))})).join("&")
return e=i(e=s.length?"".concat(e).concat(n).concat(s):e)}})),define("web-experience-app/utils/loc-concatenate",["exports"],(function(e){function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"WEA.Common.SeparatorGeneric"
Array.isArray(e)||(e=[e])
if(0===e.length)return""
var o=e,i=t(o,1),a=i[0]
if(e.length>1)for(var l=1;l<e.length;l++)a=r.t(n,{string1:a,string2:e[l],_disableSafeString:!0})
return a}})),define("web-experience-app/utils/musickit",["exports","web-experience-app/utils/ssr"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if((0,t.isSSR)())return{}
return window.MusicKit}})),define("web-experience-app/utils/navigator-languages-polyfill",["exports","@amp/ember-localizer/utils/navigator-languages-polyfill"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-experience-app/utils/parse-partial-date",["exports","@ember/utils","web-experience-app/utils/date-time"],(function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,o){if((0,t.isBlank)(e))return null
var i=(c=e.split("-"),s=3,function(e){if(Array.isArray(e))return e}(c)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(c,s)||function(e,t){if(e){if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(c,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],l=i[1],u=i[2]
var c,s
if(u){var p=new Date(a,parseInt(l,10)-1,u)
return(0,r.formatDate)(p,o)}if(l){var f=new Date(a,parseInt(l,10)-1)
return(0,r.formatDate)(f,o,r.FORMATS.YEAR_MONTH_ABBREVIATED)}return a}})),define("web-experience-app/utils/podcasts/is-valid-url",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){if(!window.URL)return!1
try{return new URL(e),!0}catch(t){return!1}}})),define("web-experience-app/utils/podcasts/podcasts",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hasExternalFreeContent=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Array.isArray(t.offers)&&(null===(e=t.offers)||void 0===e?void 0:e.some((function(e){return"STDQ"===e.type})))},e.hasPaidContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.offers,r=void 0===t?[]:t
return r.some((function(e){return"PSUB"===e.type}))},e.hasSubscriberAudio=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.offers,r=void 0===t?[]:t
return r.some((function(e){return["PSUB","PLUS"].includes(e.type)}))}})),define("web-experience-app/utils/process-env",["exports","web-experience-app/utils/ssr"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.isSSR)()?FastBoot.require("process").env:{}
e.default=r})),define("web-experience-app/utils/product-offers",["exports","@ember/utils","@glimmer/tracking"],(function(e,t,r){var n,o
function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.ProductOffers=void 0,e.durationFromOffers=d,e.mainOfferFilter=b
var a,l,u,c,s,p,f=(n=function(){function e(t){var r,n,i,a,l=t.offers;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),r=this,n="offers",a=this,(i=o)&&Object.defineProperty(r,n,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(a):void 0}),l&&l.length&&(this.offers=l)}var r,n,a
return r=e,(n=[{key:"rentOffers",get:function(){return this.offers.filter((function(e){return"rent"===e.type}))}},{key:"mainRentOffer",get:function(){return b(this.rentOffers)}},{key:"rentActionText",get:function(){var e,t
return null===(e=this.mainRentOffer)||void 0===e||null===(t=e.actionText)||void 0===t?void 0:t.short}},{key:"rentPriceFormatted",get:function(){var e
return null===(e=this.mainRentOffer)||void 0===e?void 0:e.priceFormatted}},{key:"hasRentOffers",get:function(){return this.rentOffers&&this.rentOffers.length>0}},{key:"buyOffers",get:function(){return this.offers.filter((function(e){var r=e.type,n=e.price
return"buy"===r&&(0,t.isPresent)(n)}))}},{key:"mainBuyOffer",get:function(){return b(this.buyOffers)}},{key:"buyActionText",get:function(){var e,t
return null===(e=this.mainBuyOffer)||void 0===e||null===(t=e.actionText)||void 0===t?void 0:t.short}},{key:"buyPrice",get:function(){var e
return null===(e=this.mainBuyOffer)||void 0===e?void 0:e.price}},{key:"buyPriceFormatted",get:function(){var e,t
return this.isAlbumOnlyOffer?null===(e=this.mainAlbumOnlyOffer)||void 0===e||null===(t=e.actionText)||void 0===t?void 0:t.short:this.hasBuyOffers?this.mainBuyOffer.priceFormatted:this.hasFreeOffers?this.mainFreeOffer.priceFormatted:this.preorderPriceFormatted}},{key:"hasBuyOffers",get:function(){return this.buyOffers&&this.buyOffers.length>0}},{key:"freeOffers",get:function(){return this.offers.filter((function(e){var t=e.type,r=e.price
return"get"===t&&!r}))}},{key:"mainFreeOffer",get:function(){return b(this.freeOffers)}},{key:"hasFreeOffers",get:function(){return this.freeOffers&&this.freeOffers.length>0}},{key:"preorderOffers",get:function(){return this.offers.filter((function(e){return"preorder"===e.type}))}},{key:"mainPreorderOffer",get:function(){return b(this.preorderOffers)}},{key:"preorderActionText",get:function(){var e,t
return null===(e=this.mainPreorderOffer)||void 0===e||null===(t=e.actionText)||void 0===t?void 0:t.short}},{key:"preorderPrice",get:function(){var e
return null===(e=this.mainPreorderOffer)||void 0===e?void 0:e.price}},{key:"preorderPriceFormatted",get:function(){var e,t,r
return(null===(e=this.mainPreorderOffer)||void 0===e?void 0:e.priceFormatted)||(null===(t=this.mainPreorderOffer)||void 0===t||null===(r=t.actionText)||void 0===r?void 0:r.short)}},{key:"hasPreorderOffers",get:function(){return this.preorderOffers&&this.preorderOffers.length>0}},{key:"expectedReleaseDate",get:function(){var e
return null===(e=this.mainPreorderOffer)||void 0===e?void 0:e.expectedReleaseDate}},{key:"hdOffers",get:function(){return this.offers.filter((function(e){return"HD"===e.variant}))}},{key:"hasHDOffers",get:function(){return this.hdOffers&&this.hdOffers.length>0}},{key:"currencyCode",get:function(){var e,t
return(null===(e=this.mainBuyOffer)||void 0===e?void 0:e.currencyCode)||(null===(t=this.mainFreeOffer)||void 0===t?void 0:t.currencyCode)}},{key:"isClosedCaptioned",get:function(){var e=this.offers
return"function"==typeof e.toArray&&(e=e.toArray()),e.some((function(e){return(e.assets||[]).some((function(e){return e.isClosedCaptioned}))}))}},{key:"_buyDuration",get:function(){var e,t,r
return null===(e=this.mainBuyOffer)||void 0===e||null===(t=e.assets)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.duration}},{key:"albumOnlyDuration",get:function(){var e,t
return null===(e=this.mainAlbumOnlyOffer)||void 0===e||null===(t=e.assets)||void 0===t?void 0:t[0].duration}},{key:"duration",get:function(){return d(this.offers)}},{key:"isAlbumOnlyOffer",get:function(){return this.albumOnlyOffers&&this.albumOnlyOffers.length>0}},{key:"albumOnlyOffers",get:function(){return this.offers.filter((function(e){var t=e.type,r=e.price
return"buy"===t&&!r}))}},{key:"mainAlbumOnlyOffer",get:function(){return b(this.albumOnlyOffers)}},{key:"preorderDuration",get:function(){var e,t
return null===(e=this.mainPreorderOffer)||void 0===e||null===(t=e.assets)||void 0===t?void 0:t[0].duration}},{key:"buyDuration",get:function(){return this.hasPreorderOffers?this.preorderDuration:this.isAlbumOnlyOffer?this.albumOnlyDuration:this._buyDuration||this.duration}},{key:"buyPreview",get:function(){for(var e=this.offers,r=null,n=0;n<e.length;n++){var o,i=(null===(o=e.objectAt)||void 0===o?void 0:o.call(e,n))||e[n]
if(-1!==["buy","rent"].indexOf(i.type)){var a=i.assets.find((function(e){return e.preview&&!(0,t.isEmpty)(e.preview.url)}))
if(a){r=a.preview
break}}}return r}},{key:"buyPreviewUrl",get:function(){var e
return null===(e=this.buyPreview)||void 0===e?void 0:e.url}},{key:"hasBuyPreview",get:function(){return!!this.buyPreviewUrl}},{key:"hasSubscriptionOffers",get:function(){return this.subscriptionOffers&&this.subscriptionOffers.length>0}},{key:"subscriptionOffers",get:function(){return this.offers.filter((function(e){return"subscription"===e.type}))}},{key:"mainSubscriptionOffer",get:function(){return b(this.subscriptionOffers)}},{key:"subscriptionPreview",get:function(){for(var e=this.offers,r=null,n=0;n<e.length;n++){var o,i=(null===(o=e.objectAt)||void 0===o?void 0:o.call(e,n))||e[n]
if("subscription"===i.type){var a=i.assets.find((function(e){return e.preview&&!(0,t.isEmpty)(e.preview.url)}))
if(a){r=a.preview
break}}}return r}},{key:"subscriptionPreviewUrl",get:function(){var e
return null===(e=this.subscriptionPreview)||void 0===e?void 0:e.url}},{key:"hasSubscriptionPreview",get:function(){return!!this.subscriptionPreviewUrl}},{key:"_subscriptionDuration",get:function(){var e,t,r
return null===(e=this.mainSubscriptionOffer)||void 0===e||null===(t=e.assets)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.duration}},{key:"subscriptionDuration",get:function(){return this._subscriptionDuration||this.duration}}])&&i(r.prototype,n),a&&i(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}(),a=n.prototype,l="offers",u=[r.tracked],c={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}},p={},Object.keys(c).forEach((function(e){p[e]=c[e]})),p.enumerable=!!p.enumerable,p.configurable=!!p.configurable,("value"in p||p.initializer)&&(p.writable=!0),p=u.slice().reverse().reduce((function(e,t){return t(a,l,e)||e}),p),s&&void 0!==p.initializer&&(p.value=p.initializer?p.initializer.call(s):void 0,p.initializer=void 0),void 0===p.initializer&&(Object.defineProperty(a,l,p),p=null),o=p,n)
function d(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=null,n=0;n<e.length;n++){var o,i=(null===(o=e.objectAt)||void 0===o?void 0:o.call(e,n))||e[n],a=i.assets
if(a){var l=a.find((function(e){return!(0,t.isEmpty)(e.duration)}))
if(l){r=l.duration
break}}}return r}function b(e){var t=e.find((function(e){return"HD"===e.variant}))
return t||e[0]}e.ProductOffers=f})),define("web-experience-app/utils/query-params",["exports","web-experience-app/utils/url"],(function(e,t){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null==r)return
var n,o,i=[],a=!0,l=!1
try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){var t=r(e.split("?"),2)[1]
return(void 0===t?"":t).split("&").reduce((function(e,t){var n=r(t.split("="),2),o=n[0],i=n[1]
return o&&(e[o]="true"===i||"false"!==i&&i),e}),{})}Object.defineProperty(e,"__esModule",{value:!0}),e.buildQPObject=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(e&&"?"===e.charAt(0)){var r=e.substr(1).split("&")
return r.reduce((function(e,r){var n,o=r,i=r.indexOf("=")
return i>-1&&(o=r.substring(0,i)),n=t?i>-1?r.slice(i+1):"":r,e[decodeURIComponent(o)]=decodeURIComponent(n),e}),Object.create(null))}return Object.create(null)},e.getClientSideQueryParams=function(){var e=r(window.location.search.split("?"),2)[1]
return(void 0===e?"":e).split("&").reduce((function(e,t){var n=r(t.split("="),2),o=n[0],i=n[1]
return e[o]=i,e}),{})},e.getLanguageParam=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(e){var r=o(e)
if(r){var n=r.l
if(n)return t?n:"l=".concat(n)}}return""},e.hasQP=function(e,t){return new RegExp("(\\?|&)".concat(t,"(=|&|$)"),"i").test(e)},e.queryParamsStringToObject=o,e.removeQPs=function(e){var r=new t.default(e)
return r.search="",r.toString()}})),define("web-experience-app/utils/routing",["exports","@ember/utils","web-experience-app/utils/query-params","web-experience-app/config","web-experience-app/utils/charts","web-experience-app/utils/genres","web-experience-app/services/charts/books"],(function(e,t,r,n,o,i,a){function l(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.EMPTY_SIGIL=e.ABSENT_SIGIL=void 0,e.denormalizeOptionalSegments=R,e.denormalizeURL=function(e,t,r){if(!t)return e
var n=x(e),o={},i=v(t.recognizer.recognize(n.pathname),n,r)
i.length&&(n.search=g(n.search,i),o.search=i.join("&"))
var a=/^(.*)\/(see-all\/.+)$/.exec(n.pathname)
if(a){var l=["/".concat(s),"/".concat(p)].includes(a[1]),c=a[1].match(/^\/[a-z]{2}$/)
l||c||(o.pathname=a[2],n.pathname=n.pathname.replace(/\/see-all\/.+$/,""))}return n.pathname=R(n.pathname),Object.keys(j).forEach((function(e){n.pathname.indexOf("/".concat(e,"/"))>-1&&(n=u(u({},n),j[e](n)))})),A(T(n,{hash:A(o)}))},e.extractCountryCodeFromTransition=function(e){var t=e.intent.url.match(/^\/([a-zA-Z]{2})\//)
if(t)return t[1]
return n.default.defaultStorefront},e.findIdInSegments=w,e.getNotFoundRedirect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=e.split("?"),i=o[0],a=o[1]
i=P(i)
var l=n.default.routing.notFoundRedirects
for(var c in l){var p=l[c],f=i.endsWith(c)||i.endsWith("".concat(c,"/").concat(s)),d=(0,t.isPresent)(p[r])
if(d&&f){var b=u({},p[r])
if(a){var m=b.target
b.target+=m.includes("?")?"&".concat(a):"?".concat(a)}return b}}},e.getPageURL=function(e,t){var r,n=null===(r=e.intent)||void 0===r?void 0:r.url
if(n)return"".concat(t.origin).concat(function(e){if(e)return R(e)}(n))},e.getProductModel=function(e,t){var r
t&&(r=t.targetName.split(".")[0])
return r&&e[r]||e.model||e},e.getQPMoves=v,e.hasSEOSegment=O,e.isNotFoundRedirect=_,e.mergeURLObject=T,e.normalizeOptionalSegments=E,e.normalizeURL=function(e,t,r){if(!t)return e
var n=x(e),o=E(n,t),i=t.recognizer.recognize(o.pathname)
if(!i||"not-found"===i[i.length-1].handler){return _(n.pathname)?"".concat(o.pathname).concat(o.search):e}var a=-1!==o.hash.indexOf("/")||-1!==o.hash.indexOf("?"),l=x(o.hash.replace(/^#/,""))
if(a){o.hash=""
var u=v(i,l,r)
u.length&&(l.search=g(l.search,u),o=T(o,{search:u.join("&")})),t.recognizer.recognize("".concat(o.pathname).concat(l.pathname))&&(o=T(o,{pathname:l.pathname}),l.pathname="")}return A(T(o,{hash:A(l)}))},e.parseURL=x,e.productSegmentIsValid=void 0,e.replaceChanges=g,e.serializeURLObject=A
var s="~ABSENT~".concat(Date.now(),"~")
e.ABSENT_SIGIL=s
var p="~EMPTY~".concat(Date.now(),"~")
e.EMPTY_SIGIL=p
var f=new RegExp("/".concat(s),"g"),d=new RegExp("/".concat(p),"g"),b=/^\/oprah(s-book-club)?/i,m=/^\/[a-z]{2}\/oprah(s-book-club)?/i,y=/\/(?!$|\?)/,h=/\bcc=([a-z][a-z])/i
function v(e,t,n){var o=[],i=(0,r.buildQPObject)(t.search,!1)
if(i)for(var a=0;a<e.length;a++){var l=e[a],u=n.lookup("controller:".concat(l.handler))
u&&u.queryParams&&u.queryParams.forEach((function(e){if("object"==typeof e)for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
"hash"===e[n].type&&n in i&&o.push(i[n])}}))}return o}function g(e,t){var r="?"===e.charAt(0)
if(t.length)for(var n=0;n<t.length;n++)e=e.replace(new RegExp("[&?]".concat(t[n])),"")
return r&&e.length&&"?"!==e.charAt(0)&&(e="?".concat(e.substr(1))),e}function w(e){return e[e.length-1]}function O(e){var t=e.segments
return-1!==[5,7].indexOf(t.length)}function P(e){return e.length>1&&(e=e.replace(/\/$/,"")),e}function _(e){return P(e)in n.default.routing.notFoundRedirects}var j={"app-event"(e){var t=e.pathname,n=e.search
if(!(0,r.hasQP)(n,"tempAppId"))return{}
var o=t.split(y),i=(0,r.buildQPObject)(n)
return o[2]="app",o[3]=i.tempAppId,5===o.length&&(o=o.slice(0,4)),{pathname:o.join("/"),search:n.slice(0,n.indexOf("&tempAppId"))}},charts:e=>({pathname:e.pathname}),"podcast-episode"(e){var t=e.pathname,n=e.search
if((0,r.hasQP)(n,"temp")){var o=t.split(y),i=(0,r.buildQPObject)(n)
return o[2]="podcast",o[4]=i.temp,{pathname:o.join("/"),search:n.slice(0,n.indexOf("&temp"))}}}},k={app(e){var t=e.segments,n=e.search
if((0,r.hasQP)(n,"eventid")){var o=(0,r.buildQPObject)(n),i=t[4]
n+="&tempAppId=".concat(i),t[2]="app-event",t[4]=o.eventid}return{segments:t,search:n}},charts(e){var t=e.segments,r="audiobooks",n=t[t.length-1],l=t.indexOf(r)>-1
return l&&5===t.length&&n!==r?t.splice(4,0,s):(l||n===s)&&t.splice(3,1),a.CHARTS_LIST_SORT_ORDER.indexOf(n)>-1&&t.splice(4,0,i.BOOKS_GENRE_ID_STATIC),o.VALID_DEVICE_TYPES.includes(n)&&t.splice(3,1),{segments:t}},podcast(e){var t=e.segments,n=e.search
if((0,r.hasQP)(n,"i")){var o=(0,r.buildQPObject)(n)
n+="&temp=".concat(t[4]),t[2]="podcast-episode",t[4]=o.i}return{segments:t,search:n}}}
function x(e){var t=e.indexOf("#");-1===t&&(t=e.length)
var r=Math.min(t,e.indexOf("?"))
return-1===r&&(r=e.length),{pathname:e.substring(0,Math.min(r,t)),search:e.substring(r,Math.max(r,t)),hash:e.substring(t,e.length)}}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={pathname:"",search:"",hash:""}
if(e.pathname&&t.pathname){var n=e.pathname.replace(/\/$/,""),o=t.pathname.replace(/^\//,"")
r.pathname="".concat(n,"/").concat(o)}else r.pathname=e.pathname||t.pathname||""
var i=e.search&&e.search.replace(/^\?/,""),a=t.search&&t.search.replace(/^\?/,""),l=e.search&&e.search.length,u=t.search&&t.search.length,c=l||u
i&&a?r.search="?".concat(i,"&").concat(a):i||a?r.search="?".concat(i||a):c&&(r.search="?")
var s=e.hash&&e.hash.replace(/^#/,""),p=t.hash&&t.hash.replace(/^#/,""),f=e.hash&&e.hash.length,d=t.hash&&t.hash.length,b=f||d
return p||d?r.hash="#".concat(p):s?r.hash="#".concat(s):b&&(r.hash="#"),r}function A(e){var t=e.pathname,r=void 0===t?"":t,n=e.search,o=void 0===n?"":n,i=e.hash,a=void 0===i?"":i
return o&&"?"!==o[0]&&(o="?".concat(o)),a&&"#"!==a[0]&&(a="#".concat(a)),"".concat(r).concat(o).concat(a)}var S=function(e,t){var r=e.productSegment,n=t.recognizer.names
return n&&n[r]}
function E(e,r){if(!r)return u({},e)
if(b.test(e.pathname)){var n=e.pathname.replace(b,(function(e){return e.toLowerCase()}))
return u(u({},e),{},{pathname:"/".concat(s).concat(n)})}if(m.test(e.pathname))return u(u({},e),{},{pathname:e.pathname.replace(m,(function(e){return e.toLowerCase()}))})
var o={hash:e.hash,segments:e.pathname.split(y),search:e.search,productSegment:"",significantId:""}
if(o.productSegment=o.segments[2],o.significantId=w(o.segments),S(o,r)||(o.segments.splice(1,0,s),o.productSegment=o.segments[2]),!_(e.pathname)){if(o.segments[1]===s||!(0,t.isPresent)(o.segments[1])){var i=h.exec(o.search)
i?o.segments[1]=i[1]:(0,t.isPresent)(o.segments[1])||(o.segments[1]=p)}O(o)||o.segments.splice(3,0,s),o.productSegment in k&&(o=u(u({},o),k[o.productSegment](o))),(0,t.isPresent)(o.segments[3])||"charts"===o.productSegment||(o.segments[3]=p)}return{pathname:o.segments.join("/"),search:o.search,hash:o.hash}}function R(e){return e.replace(f,"").replace(d,"/")}e.productSegmentIsValid=S})),define("web-experience-app/utils/sanitize",["exports","@ember/template","@ember/utils","js-htmlencode","striptags","web-experience-app/config/index"],(function(e,t,r,n,o,i){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeForAttribute=function(e){var n=e;(0,t.isHTMLSafe)(n)&&(n=n.toString())
if("string"!==(0,r.typeOf)(n))return"";-1!==n.search(/&#?[a-zA-Z0-9]+;/)&&(n=a(n))
return n=n.replace(c," "),(n=(n=(0,o.default)(n)).replace(/\s/g," ").replace(/\s+/g," ")).replace('"','"')},e.sanitizeForHtml=function(e){var n=e
"string"!==(0,r.typeOf)(n)&&(n="")
if(""===n)return(0,t.htmlSafe)(n);-1!==n.search(/&#?[a-zA-Z0-9]+;/)&&(n=a(n))
return n=(n=(n=l(n)).replace(u,"<br />")).replace(i.default.htmlSanitizeRegex,(function(e,t){var r=e.indexOf("/"),n=e.indexOf(t)
return-1===r?"<".concat(t,">"):r<n?"</".concat(t,">"):"<".concat(t," />")})),(0,t.htmlSafe)(n)}
var a=n.default.htmlDecode,l=n.default.htmlEncode,u=/(\r\n|\r|\n)/g,c=/<br(?=[ />\r\n\t\f])[^>]*>/g})),define("web-experience-app/utils/see-all",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.loadRecordsFromPayload=function(e,t,r){var n=r.serializerFor("store-platform").normalizeResponse(r,e,t)
return r.push(n),function(e){return e.data.reduce((function(e,t){return e[t.id]=t.type,e}),{})}(n)}})),define("web-experience-app/utils/seo",["exports","@ember/string","web-experience-app/utils/routing","web-experience-app/utils/url","@apple/babel-plugin-feature-remover"],(function(e,t,r,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.formatURLSegment=function(e){if(!e)return""
var r="".concat(e)
return(0,t.dasherize)(r.replace(i," ").trim())},e.getNormalisedUrlPath=a,e.getRedirectIfRequired=l,e.handleCanonicalRedirects=function(e,t){var r=e.fastboot,o=e.location,i="".concat(o.pathname).concat(o.search?o.search:""),a=o.host,u=l(i,t,a)
if(u){if(r.isFastBoot)return o.replace(u.targetUrl,u.responseStatusCode)
var c=new n.default(u.targetUrl),s="".concat(c.pathname).concat(c.search)
return e.transitionTo(s)}},e.truncateSEODescription=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300
return e&&e.length>t?"".concat(e.substr(0,t).trim(),"…"):e}
var i=/\W+/g
function a(e){return new n.default(e).pathname||""}function l(e,t,o){var i="https://itunes.apple.com".concat(e),l=new n.default(i),u=l.search,c=a(t)
if(!e.includes("/charts/")){var s=e.split("/")
if(!(0,r.hasSEOSegment)({segments:s}))return}if(l.pathname!==c){var p=function(e,t){var r=new n.default(e)
t&&t!==r.host&&(r.host=t)
return r.toString()}(t,o)
return{responseStatusCode:301,targetUrl:"".concat(p).concat(u)}}return null}})),define("web-experience-app/utils/shelf",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.generateColumnClassNames=function(e){var r=e.small,n=e.medium,o=e.large,i=t
return"l-column small-".concat(i(r)," medium-").concat(i(n)," large-").concat(i(o))},e.generateDefaultArtworkProfile=function(e){var t=e.small,r=e.medium,n=e.large
return"lockup-".concat(t,"-").concat(r,"-").concat(n)}
function t(e){return Math.floor(12/(e%12))}})),define("web-experience-app/utils/ssr",["exports","web-experience-app/config/environment"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.getFastbootJwt=function(){if(i()&&"production"===t.default.environment){return FastBoot.require("process").env.FASTBOOT_MEDIA_API_JWT}return null},e.getHeadersForFastBoot=function(e){var t={}
if(i()){t.origin="https://amp.apple.com"
var a=e.headers.get(r)
a&&(t[r]=a)
var l=e.headers.get(n)
l&&(t[n]=l)
var u=e.headers.getAll(o)
u&&(t[o]=u.join(", "))
var c=e.headers.getAll("cookie").join("; ")
c.length&&(t.cookie=c.split(/[;,]/).map((function(e){return e.trimStart()})).filter((function(e){return e.length>0&&!e.startsWith("=")})).filter((function(e){return!e.startsWith("media-user-token=")})).join("; "))}return t},e.isSSR=i,e.log=void 0
var r="user-country",n="x-apple-jingle-correlation-key",o="x-forwarded-for"
function i(){return"undefined"!=typeof FastBoot}var a,l=(a="log",i()?console[a].bind(console):function(){})
e.log=l})),define("web-experience-app/utils/string-template",["exports","@ember/object","@ember/debug","web-experience-app/helpers/to-locale-fixed","web-experience-app/services/i18n","web-experience-app/config/environment"],(function(e,t,r,n,o,i){Object.defineProperty(e,"__esModule",{value:!0}),e.replaceKeys=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return e.replace(a,(function(e,a){var u=i.default.environment,c=(0,t.get)(r,a),s=null==c
if(l.indexOf(u),!s&&"count"===a&&"number"==typeof c){var p=(0,t.get)(r,o.SERVICE_SIGIL)
p&&(c=(0,n.toLocaleFixed)(c,p.locale,{minimumFractionDigits:0,maximumFractionDigits:2}))}return s?"@@".concat(a,"@@"):c}))}
var a=/@@([^@]+)@@/g,l=["development","mock","test"]})),define("web-experience-app/utils/truncate-text",["exports"],(function(e){function t(e){var t=window.getComputedStyle(e).getPropertyValue("line-height")
return parseFloat(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.getFontSize=function(e){var t=window.getComputedStyle(e).getPropertyValue("font-size")
return parseFloat(t)},e.getLineHeight=t,e.getMaxHeight=function(e,r){var n=t(e)
return Math.floor(n*r)}})),define("web-experience-app/utils/url-search-params",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t="undefined"!=typeof FastBoot?FastBoot.require("url").URLSearchParams:window.URLSearchParams
e.default=t})),define("web-experience-app/utils/url",["exports","web-experience-app/utils/ssr"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.isSSR)()?FastBoot.require("url").URL:window.URL
e.default=r})),define("web-experience-app/utils/urls",["exports","web-experience-app/utils/query-params"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.generateMediaAPIUrl=function(e,r,n,o){var i=e.replace(/^\//,"")
return i=function(e,r,n,o){var i=o||(0,t.getLanguageParam)(n,!0)
if(!i)return e
var a=e.includes("?")
if(a&&Object.keys(r).length)throw new Error("Submitted url ".concat(e," with embedded query params and query params object ").concat(JSON.stringify(r),", you can only submit one or the other."))
if(!a)return r.l=i,e
if(/[?&]l=/.test(e))return e
return"".concat(e,"&l=").concat(i)}(i,r,n,o)},e.makeSeoSegment=function(e){return e.replace(/[\u0000-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u00bf\u00d7\u00f7]/g,"-").replace(/-+/g,"-").toLowerCase()},e.updateProtocol=function(e,t){if(!e)return
if(t&&/^https?:\/\//.test(e))return e.replace(/^https?/,t)
return e}})),define("web-experience-app/config/environment",[],(function(){if("undefined"!=typeof FastBoot)return FastBoot.config("web-experience-app")
try{var e="web-experience-app/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),"undefined"==typeof FastBoot&&(runningTests||require("web-experience-app/app").default.create({PROGRESS_BAR_DELAY:3e3,CLOCK_INTERVAL:1e3,LOADING_SPINNER_SPY:!0,BREAKPOINTS:{large:{min:1069,max:1440,content:980},medium:{min:735,max:1068,content:692},small:{min:320,max:734,content:280}},buildVariant:"podcasts",name:"web-experience-app",version:"2240.3.0+26f95696"}))
