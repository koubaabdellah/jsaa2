(window.webpackJsonp=window.webpackJsonp||[]).push([["financial-times-o-share"],{"1770ddfe":function(t,e,n){"use strict";n.r(e);var o=n("d8ac1740"),a=n.n(o);function r(t,e){const n=this,o={};function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"oShare";n.rootEl.dispatchEvent(new CustomEvent(o+"."+t,{detail:e,bubbles:!0}))}function c(t){const e=t.target.closest("li.o-share__action");if(n.rootEl.contains(e)&&e.querySelector("a[href]")){t.preventDefault(),t.stopPropagation();const a=e.querySelector("a[href]").href,i=n.rootEl.dataset.oShareLocation||"";r("event",{category:"share",action:"click",button:e.textContent.trim().toLowerCase(),location:i},"oTracking"),function(t){t&&(o[t]&&!o[t].closed?o[t].focus():(o[t]=window.open(t,"","width=646,height=436"),o[t].opener=null),r("open",{share:n,action:"social",url:t}))}(a)}}function l(){!function(){const t=document.createElement("a");t.href=e.url,e.url=t.protocol+"//"+t.host+t.pathname+t.search+t.hash}();const t=document.createElement("ul");for(let n=0;n<e.links.length;n++){const o=document.createElement("li"),a=document.createElement("span"),r=document.createElement("a");o.classList.add("o-share__action","o-share__action--"+e.links[n]),a.classList.add("o-share__text"),a.innerText=s(e,e.links[n]),r.classList.add("o-share__icon","o-share__icon--"+e.links[n]),r.href=i(e,e.links[n]),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener"),r.appendChild(a),o.appendChild(r),t.appendChild(o)}n.rootEl.appendChild(t)}!function(){t?t instanceof HTMLElement||(t=document.querySelector(t)):t=document.body;const o=new a.a(t);o.on("click",c),t.setAttribute("data-o-share--js",""),n.rootDomDelegate=o,n.rootEl=t,0===t.children.length&&(e||((e={}).links=t.hasAttribute("data-o-share-links")?t.getAttribute("data-o-share-links").split(" "):[],e.url=t.getAttribute("data-o-share-url")||"",e.title=t.getAttribute("data-o-share-title")||"",e.titleExtra=t.getAttribute("data-o-share-titleExtra")||"",e.summary=t.getAttribute("data-o-share-summary")||"",e.relatedTwitterAccounts=t.getAttribute("data-o-share-relatedTwitterAccounts")||""),l()),r("ready",{share:n})}()}function i(t,e){const n=encodeURIComponent(t.url),o=encodeURIComponent(t.title),a=encodeURIComponent(t.titleExtra),r=encodeURIComponent(t.summary);return{twitter:`https://twitter.com/intent/tweet?url=${n}&text=${o}&related=${encodeURIComponent(t.relatedTwitterAccounts)}&via=FT`,facebook:"http://www.facebook.com/sharer.php?u="+n,linkedin:`http://www.linkedin.com/shareArticle?mini=true&url=${n}&title=${o}+%7C+${a}&summary=${r}&source=Financial+Times`,pinterest:`http://www.pinterest.com/pin/create/button/?url=${n}&description=${o}`,whatsapp:`whatsapp://send?text=${o}%20(${a})%20-%20${n}`,link:n,enterpriseSharing:n}[e]}function s(t,e){return{twitter:`Share ${t.title} on Twitter (opens a new window)`,facebook:`Share ${t.title} on Facebook (opens a new window)`,linkedin:`Share ${t.title} on LinkedIn (opens a new window)`,pinterest:`Share ${t.title} on Pinterest (opens a new window)`,whatsapp:`Share ${t.title} on Whatsapp (opens a new window)`,link:"Open link in new window",enterpriseSharing:`Share ${t.title} with your Enterprise Sharing tools (opens a new window)`}[e]}r.prototype.destroy=function(){this.rootDomDelegate.destroy(),this.rootEl.textContent="",this.rootEl.removeAttribute("data-o-share--js"),this.rootEl=void 0},r.init=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return t instanceof HTMLElement||(t=document.querySelector(t)),t instanceof HTMLElement&&t.matches("[data-o-component=o-share]")?new r(t):Array.from(t.querySelectorAll("[data-o-component=o-share]"),t=>new r(t))};var c=r;const l=function(){c.init(),document.removeEventListener("o.DOMContentLoaded",l)};"undefined"!=typeof document&&document.addEventListener("o.DOMContentLoaded",l);e.default=c}}]);
//# sourceMappingURL=financial-times-o-share.2aca50dcc885.bundle.js.map