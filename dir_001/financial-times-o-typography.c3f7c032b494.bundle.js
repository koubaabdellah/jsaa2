(window.webpackJsonp=window.webpackJsonp||[]).push([["financial-times-o-typography"],{"62c6128b":function(t,o,e){"use strict";e.r(o);var n=e("efadc595"),i=e.n(n);class s{constructor(t,o){this.typographyEl=t,this.fontLoadingPrefix="o-typography--loading-",this.opts=o||s.getOptions(t),void 0===this.opts.loadOnInit&&(this.opts.loadOnInit=!0),void 0===this.opts.rejectOnFontLoadFailure&&(this.opts.rejectOnFontLoadFailure=!1),this.opts=s.checkOptions(this.opts),this.hasRun=!1,this.fontConfigs=[{family:"FinancierDisplayWeb",weight:"normal",label:"display"},{family:"MetricWeb",weight:"normal",label:"sans"},{family:"MetricWeb",weight:600,label:"sans-bold"},{family:"FinancierDisplayWeb",weight:700,label:"display-bold"}],this.opts.loadOnInit&&this.loadFonts()}static getOptions(t){const o=Object(t.dataset);return Object.keys(o).reduce((t,e)=>{if("oComponent"===e)return t;const n=e.replace(/^oTypography(\w)(\w+)$/,(t,o,e)=>o.toLowerCase()+e);try{t[n]=JSON.parse(o[e].replace(/\'/g,'"'))}catch(i){t[n]=o[e]}return t},{})}static checkOptions(t){return t.fontLoadedCookieName||(t.fontLoadedCookieName="o-typography-fonts-loaded"),t}checkFontsLoaded(){return new RegExp(`(^|s)${this.opts.fontLoadedCookieName}=1(;|$)`).test(document.cookie)}setCookie(){const t=/.ft.com$/.test(location.hostname)?".ft.com":location.hostname;document.cookie=`${this.opts.fontLoadedCookieName}=1;domain=${t};path=/;max-age=604800`}removeLoadingClasses(){this.fontConfigs.forEach(t=>{this.typographyEl.classList.remove(`${this.fontLoadingPrefix}${t.label}`)})}loadFonts(){if(this.hasRun)return Promise.resolve();if(this.checkFontsLoaded())return this.removeLoadingClasses(),this.setCookie(),this.hasRun=!0,Promise.resolve();const t=this.fontConfigs.map(t=>new i.a(t.family,{weight:t.weight}).load().then(()=>{this.typographyEl.classList.remove(`${this.fontLoadingPrefix}${t.label}`)}));return Promise.all(t).then(()=>{this.setCookie(),this.hasRun=!0}).catch(t=>{if(this.opts.rejectOnFontLoadFailure)throw t})}static init(t,o){if(t||(t=document.documentElement),t instanceof HTMLElement||(t=document.querySelector(t)),t instanceof HTMLElement&&t.matches("[data-o-component=o-typography]"))return new s(t,o)}}var a=s;const r=function(){a.init(),document.removeEventListener("o.DOMContentLoaded",r)};"undefined"!=typeof document&&document.addEventListener("o.DOMContentLoaded",r);o.default=a}}]);
//# sourceMappingURL=financial-times-o-typography.c3f7c032b494.bundle.js.map