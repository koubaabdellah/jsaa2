﻿/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-printshiv-setclasses !*/
!function(n,t){function a(n){var t=r.className,u=i._config.classPrefix||"",e;(f&&(t=t.baseVal),i._config.enableJSClass)&&(e=new RegExp("(^|\\s)"+u+"no-js(\\s|$)"),t=t.replace(e,"$1"+u+"js$2"));i._config.enableClasses&&(t+=" "+u+n.join(" "+u),f?r.className.baseVal=t:r.className=t)}function v(n,t){return typeof n===t}function y(){var r,n,u,f,o,s,t;for(var h in e)if(e.hasOwnProperty(h)){if(r=[],n=e[h],n.name&&(r.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(u=0;u<n.options.aliases.length;u++)r.push(n.options.aliases[u].toLowerCase());for(f=v(n.fn,"function")?n.fn():n.fn,o=0;o<r.length;o++)s=r[o],t=s.split("."),1===t.length?i[t[0]]=f:(!i[t[0]]||i[t[0]]instanceof Boolean||(i[t[0]]=new Boolean(i[t[0]])),i[t[0]][t[1]]=f),c.push((f?"":"no-")+t.join("-"))}}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):f?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function p(){var n=t.body;return n||(n=o(f?"svg":"body"),n.fake=!0),n}function w(n,i,u,f){var s,a,c,v,l="modernizr",h=o("div"),e=p();if(parseInt(u,10))for(;u--;)c=o("div"),c.id=f?f[u]:l+(u+1),h.appendChild(c);return s=o("style"),s.type="text/css",s.id="s"+l,(e.fake?e:h).appendChild(s),e.appendChild(h),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(t.createTextNode(n)),h.id=l,e.fake&&(e.style.background="",e.style.overflow="hidden",v=r.style.overflow,r.style.overflow="hidden",r.appendChild(e)),a=i(h,n),e.fake?(e.parentNode.removeChild(e),r.style.overflow=v,r.offsetHeight):h.parentNode.removeChild(h),!!a}var c=[],e=[],u={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,t){var i=this;setTimeout(function(){t(i[n])},0)},addTest:function(n,t,i){e.push({name:n,fn:t,options:i})},addAsyncTest:function(n){e.push({name:null,fn:n})}},i=function(){},r,f,h,l,s;for(i.prototype=u,i=new i,r=t.documentElement,f="svg"===r.nodeName.toLowerCase(),f||!function(n,t){function l(n,t){var i=n.createElement("p"),r=n.getElementsByTagName("head")[0]||n.documentElement;return i.innerHTML="x<style>"+t+"<\/style>",r.insertBefore(i.lastChild,r.firstChild)}function u(){var n=i.elements;return"string"==typeof n?n.split(" "):n}function w(n,t){var r=i.elements;"string"!=typeof r&&(r=r.join(" "));"string"!=typeof n&&(n=n.join(" "));i.elements=r+" "+n;o(t)}function f(n){var t=p[n[y]];return t||(t={},c++,n[y]=c,p[c]=t),t}function a(n,i,u){if(i||(i=t),r)return i.createElement(n);u||(u=f(i));var e;return e=u.cache[n]?u.cache[n].cloneNode():rt.test(n)?(u.cache[n]=u.createElem(n)).cloneNode():u.createElem(n),!e.canHaveChildren||it.test(n)||e.tagUrn?e:u.frag.appendChild(e)}function b(n,i){if(n||(n=t),r)return n.createDocumentFragment();i=i||f(n);for(var o=i.frag.cloneNode(),e=0,s=u(),h=s.length;h>e;e++)o.createElement(s[e]);return o}function k(n,t){t.cache||(t.cache={},t.createElem=n.createElement,t.createFrag=n.createDocumentFragment,t.frag=t.createFrag());n.createElement=function(r){return i.shivMethods?a(r,n,t):t.createElem(r)};n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+u().join().replace(/[\w\-:]+/g,function(n){return t.createElem(n),t.frag.createElement(n),'c("'+n+'")'})+");return n}")(i,t.frag)}function o(n){n||(n=t);var u=f(n);return!i.shivCSS||s||u.hasCSS||(u.hasCSS=!!l(n,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),r||k(n,u),n}function d(n){for(var t,i=n.getElementsByTagName("*"),r=i.length,e=RegExp("^(?:"+u().join("|")+")$","i"),f=[];r--;)t=i[r],e.test(t.nodeName)&&f.push(t.applyElement(g(t)));return f}function g(n){for(var t,r=n.attributes,u=r.length,i=n.ownerDocument.createElement(e+":"+n.nodeName);u--;)t=r[u],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=n.style.cssText,i}function nt(n){for(var t,i=n.split("{"),r=i.length,f=RegExp("(^|[\\s,>+~])("+u().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+e+"\\:$2";r--;)t=i[r]=i[r].split("}"),t[t.length-1]=t[t.length-1].replace(f,o),i[r]=t.join("}");return i.join("{")}function tt(n){for(var t=n.length;t--;)n[t].removeNode()}function v(n){function r(){clearTimeout(i._removeSheetTimer);t&&t.removeNode(!0);t=null}var t,u,i=f(n),o=n.namespaces,s=n.parentWindow;return!ft||n.printShived?n:("undefined"==typeof o[e]&&o.add(e),s.attachEvent("onbeforeprint",function(){r();for(var o,s,f,c=n.styleSheets,e=[],i=c.length,h=Array(i);i--;)h[i]=c[i];for(;f=h.pop();)if(!f.disabled&&ut.test(f.media)){try{o=f.imports;s=o.length}catch(a){s=0}for(i=0;s>i;i++)h.push(o[i]);try{e.push(f.cssText)}catch(a){}}e=nt(e.reverse().join(""));u=d(n);t=l(n,e)}),s.attachEvent("onafterprint",function(){tt(u);clearTimeout(i._removeSheetTimer);i._removeSheetTimer=setTimeout(r,500)}),n.printShived=!0,n)}var s,r,h=n.html5||{},it=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,rt=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,y="_html5shiv",c=0,p={},i;!function(){try{var n=t.createElement("a");n.innerHTML="<xyz><\/xyz>";s="hidden"in n;r=1==n.childNodes.length||function(){t.createElement("a");var n=t.createDocumentFragment();return"undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}()}catch(i){s=!0;r=!0}}();i={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:h.shivCSS!==!1,supportsUnknownElements:r,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:o,createElement:a,createDocumentFragment:b,addElements:w};n.html5=i;o(t);var ut=/^$|\b(?:all|print)\b/,e="html5shiv",ft=!r&&function(){var i=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof i.applyElement||"undefined"==typeof i.removeNode||"undefined"==typeof n.attachEvent)}();i.type+=" print";i.shivPrint=v;v(t);"object"==typeof module&&module.exports&&(module.exports=i)}("undefined"!=typeof n?n:this,t),h=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""],u._prefixes=h,l=u.testStyles=w,i.addTest("touchevents",function(){var i,r;return"ontouchstart"in n||n.DocumentTouch&&t instanceof DocumentTouch?i=!0:(r=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join(""),l(r,function(n){i=9===n.offsetTop})),i}),y(),a(c),delete u.addTest,delete u.addAsyncTest,s=0;s<i._q.length;s++)i._q[s]();n.Modernizr=i}(window,document);