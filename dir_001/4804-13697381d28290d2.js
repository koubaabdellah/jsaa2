"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4804],{64804:function(a,b,c){c.d(b,{qb:function(){return d},"_g":function(){return e},r4:function(){return H},Nq:function(){return I},PR:function(){return J},Xt:function(){return K},"_D":function(){return L},p4:function(){return M},l1:function(){return N}});var d,e,f=c(32390),g=c.n(f),h=c(42503),i=c(53736),j=c.n(i);function k(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function l(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function m(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){l(f,d,e,g,h,"next",a)}function h(a){l(f,d,e,g,h,"throw",a)}g(void 0)})}}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){n(a,b,c[b])})}return a}function p(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||r(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function q(a){return(function(a){if(Array.isArray(a))return k(a)})(a)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(a)||r(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function r(a,b){if(a){if("string"==typeof a)return k(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return k(a,b)}}(s=d||(d={})).NotSent="NotSent",s.Fetching="Fetching",s.Error="Error",s.Success="Success",(t=e||(e={})).Webcast="learning",t.Whitepaper="whitepaper",t.NewsletterSubscription="newsletter-subscription",t.Swoogo="swoogo";var s,t,u,v,w,x,y,z,A,B,C="/api/v1",D=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"POST",c={Accept:"application/json","Content-Type":"POST"===b?"application/json":"application/merge-patch+json",Authorization:a?"Bearer ".concat(a):void 0};return function(a,d){return fetch(j()("https://userapi.cyberriskalliance.com",C,a),{method:b,headers:c,body:"string"==typeof d?d:JSON.stringify(d)})}},E=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"";return D(a,"PATCH")},F=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b={Accept:"application/json",Authorization:a?"Bearer ".concat(a):void 0};return function(a,c){return fetch(j()("https://userapi.cyberriskalliance.com",C,c?"".concat(a,"?").concat(new URLSearchParams(c)):a),{method:"GET",headers:b})}},G=(u=m(g().mark(function a(b){var c,d,e,f,i,j,k,l;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b.status>=200&&b.status<300)){a.next=5;break}return a.next=3,b.json();case 3:return a.t0=a.sent,a.abrupt("return",[a.t0,null]);case 5:return a.next=7,b.json();case 7:if(!(e=null!==(d=(c=a.sent).violations)&& void 0!==d?d:[]).length){a.next=14;break}for(i=0,f={};i<e.length;i+=1)f[(j=e[i]).propertyPath]=q(null!==(k=f[j.propertyPath])&& void 0!==k?k:[]).concat([j.message,]);return a.abrupt("return",[c,null!=f?f:null]);case 14:return a.abrupt("return",[c,{alert:null!==(l=c.title)&& void 0!==l?l:h.hF}]);case 16:case"end":return a.stop()}},a)})),function(a){return u.apply(this,arguments)}),H=(v=m(g().mark(function a(b){var c,d;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c=o({createdAt:new Date().toISOString()},Object.fromEntries(Object.entries(b).filter(function(a){var b=p(a,2),c=b[0],d=b[1];return!!c&&!!d}))),a.next=4,D()("/users",c);case 4:return d=a.sent,a.abrupt("return",G(d));case 8:return a.prev=8,a.t0=a.catch(0),(0,h.cM)(a.t0),a.abrupt("return",[null,{alert:h.hF}]);case 12:case"end":return a.stop()}},a,null,[[0,8]])})),function(a){return v.apply(this,arguments)}),I=(w=m(g().mark(function a(b,c,d){var e,f;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=o({createdAt:new Date().toISOString()},Object.fromEntries(Object.entries(d).filter(function(a){var b=p(a,2),c=b[0],d=b[1];return!!c&&!!d}))),a.next=4,E(c)("/users/".concat(b),e);case 4:return f=a.sent,a.abrupt("return",G(f));case 8:return a.prev=8,a.t0=a.catch(0),(0,h.cM)(a.t0),a.abrupt("return",[null,{alert:h.hF}]);case 12:case"end":return a.stop()}},a,null,[[0,8]])})),function(a,b,c){return w.apply(this,arguments)}),J=(x=m(g().mark(function a(b,c){var d,e;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F(c)("/users/".concat(b));case 3:return d=a.sent,a.next=6,d.json();case 6:e=a.sent,a.t0=d.status,a.next=200===a.t0?10:404===a.t0?11:12;break;case 10:return a.abrupt("return",e.authID===b?[e,null]:[null,new Error("User ID mismatch!")]);case 11:return a.abrupt("return",[null,new Error("User not found!")]);case 12:return(0,h.cM)(e),a.abrupt("return",[null,new Error("Error retrieving user data.")]);case 14:a.next=20;break;case 16:return a.prev=16,a.t1=a.catch(0),(0,h.cM)(a.t1),a.abrupt("return",[null,(0,h.Jb)()]);case 20:case"end":return a.stop()}},a,null,[[0,16]])})),function(a,b){return x.apply(this,arguments)}),K=(y=m(g().mark(function a(b,c,d){var e,f,i,j,k;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=b||"0",a.next=4,D(c)("/users/".concat(e,"/content/fields"),{resources:d});case 4:return f=a.sent,a.next=7,f.json();case 7:i=a.sent,a.t0=f.status,a.next=200===a.t0?11:403===a.t0?13:(a.t0,15);break;case 11:return a.abrupt("return",[null!==(j=i.missingFields)&& void 0!==j?j:[],null]);case 13:return a.abrupt("return",[null!==(k=i.missingFields)&& void 0!==k?k:[],new Error(i.exception||"".concat(h.hF," Please, log out and log in again.")),]);case 15:return(0,h.cM)(i),a.abrupt("return",[null,(0,h.Jb)()]);case 17:a.next=23;break;case 19:return a.prev=19,a.t1=a.catch(0),(0,h.cM)(a.t1),a.abrupt("return",[null,(0,h.Jb)()]);case 23:case"end":return a.stop()}},a,null,[[0,19]])})),function(a,b,c){return y.apply(this,arguments)}),L=(z=m(g().mark(function a(b,c,d){var e,f,i,j=arguments;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=j.length>3&& void 0!==j[3]?j[3]:{},a.prev=1,a.next=4,D(c)("/users/".concat(b,"/content/submit"),{resources:d,_meta:e});case 4:if(!(200!==(f=a.sent).status)){a.next=11;break}return a.t0=Error,a.next=9,f.text();case 9:throw a.t1=a.sent,new a.t0(a.t1);case 11:return a.next=13,f.json();case 13:if(!((i=a.sent).authID!==b)){a.next=16;break}throw new Error("User ID mismatch during content submit!");case 16:return a.abrupt("return",[i,null]);case 19:return a.prev=19,a.t2=a.catch(1),(0,h.cM)(a.t2),a.abrupt("return",[null,(0,h.Jb)()]);case 23:case"end":return a.stop()}},a,null,[[1,19]])})),function(a,b,c){return z.apply(this,arguments)}),M=(A=m(g().mark(function a(b){var c;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D()("/newsletter",b);case 3:if(!(200!==(c=a.sent).status)){a.next=10;break}return a.t0=Error,a.next=8,c.text();case 8:throw a.t1=a.sent,new a.t0(a.t1);case 10:return a.next=12,c.json();case 12:return a.t2=a.sent,a.abrupt("return",[a.t2,null]);case 16:return a.prev=16,a.t3=a.catch(0),(0,h.cM)(a.t3),a.abrupt("return",[null,(0,h.Jb)()]);case 20:case"end":return a.stop()}},a,null,[[0,16]])})),function(a){return A.apply(this,arguments)}),N=(B=m(g().mark(function a(b){var c;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D()("/partners",b);case 3:return c=a.sent,a.abrupt("return",G(c));case 7:return a.prev=7,a.t0=a.catch(0),(0,h.cM)(a.t0),a.abrupt("return",[null,{alert:h.hF}]);case 11:case"end":return a.stop()}},a,null,[[0,7]])})),function(a){return B.apply(this,arguments)})}}])