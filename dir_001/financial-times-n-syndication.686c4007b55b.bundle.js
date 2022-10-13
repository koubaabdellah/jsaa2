(window.webpackJsonp=window.webpackJsonp||[]).push([["financial-times-n-syndication"],{"52af5167":function(t,n,e){"use strict";e.r(n),e.d(n,"CONFIG",(function(){return a})),e.d(n,"init",(function(){return ht})),e.d(n,"initRepublishing",(function(){})),e.d(n,"checkIfUserIsSyndicationCustomer",(function(){})),e.d(n,"getUserData",(function(){}));var a={};e.r(a),e.d(a,"MESSAGES",(function(){return w})),e.d(a,"SYNDICATION_ACCESS",(function(){return S})),e.d(a,"TRACKING",(function(){return E}));var o=e("1ae02a0f");async function i(){const t="/syndication/user-status",n={credentials:"include"};try{const e=await fetch(t,n);if(e.ok)return e.json();{switch(e.status){case 401:return null;case 503:if(e.headers.get("content-type").includes("application/json")){const t=await e.json();return t.migrated=!0,t.MAINTENANCE_MODE=!0,t}}const n=await e.text();throw new Error(`Next ${t} responded with "${n}" (${e.status})`)}}catch(t){Object(o.broadcast)("oErrors.log",{error:t,info:{component:"next-syndication-redux"}})}}function c(t){do{if(t===document.documentElement)return null;let n=t.getAttribute("data-content-id");if(!n&&!t.classList.contains("o-header__subnav-item")&&(n=t.getAttribute("data-id"),!n)){let e=t;"A"!==t.tagName.toUpperCase()&&(e=e.querySelector("a")),e&&e.hasAttribute("href")&&(n=e.getAttribute("href").split("/").pop(),n=r(n),n&&t.setAttribute("data-content-id",n))}return n&&(n=r(n),t.setAttribute("data-content-id",n)),n||null}while(t=t.parentElement);return null}function r(t){return t.indexOf("#")>-1&&(t=t.substring(0,t.indexOf("#"))),t.indexOf("?")>-1&&(t=t.substring(0,t.indexOf("?"))),t}function s(t,n){return t.prepend?t.prepend(n):t.childNodes.length?t.insertBefore(n,t.childNodes[0]):t.appendChild(n),t}function d(t){const n=document.createDocumentFragment(),e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t),Array.from(e.children).reverse().forEach(t=>s(n,t)),n}function l(t,n){return String(t).replace(/\{\{([^\}]+)\}\}/gim,(t,e)=>e in n?n[e]:"")}const u=[],f={};let p;function h(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p=t,addEventListener("nSyndication.fetch",t=>b(t.detail.response),!0),"[object Array]"===Object.prototype.toString.call(n)&&b(n)}function m(t){return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";const e=`${t}__${n}`;return f[e]||f[t]||u.find(e=>y(e,t,n))||null}(c(t),function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data-content-id";do{if(t===document.documentElement)return null;const e=t.getAttribute(n);if(e)return e}while(t=t.parentElement);return null}(t,"data-iso-lang")||"en")}function g(t){return u.filter(n=>n.id===t)}function y(t,n,e){const a=`${n}__${e}`;return t.__id__===a||t.id===n&&t.lang===e}function b(t){const n=[];return t.forEach(t=>{const e=t.id,a=t.lang||"en",o=t.__id__=`${e}__${a}`;if(o in f){n.push(t);const o=u.findIndex(t=>y(t,e,a));o>-1&&(u[o]=t)}n.includes(t)||u.push(t),f[o]=t}),Object(o.broadcast)("nSyndication.dataChanged",{existing:n,items:u}),{DATA_STORE:u,DATA_STORE_MAP:f,EXISTING:n}}const _='<p>Please ensure you have considered your <a data-trackable="contractual-rights" href="/republishing/contract">contractual rights</a> before republishing.</p>',v='<p class="syndication-message__content--warning">This content will incur additional charges to republish. Please contact us for further details (<a href="mailto:syndication@ft.com">syndication@ft.com</a> or +44 (0)207 873 4816).</p>',w={EMBARGO:"<p>Please note that this content is embargoed until {{embargoPeriod}} after its original publication date of {{publishedDateDisplay}}.</p>",ENGLISH:'<p class="syndication-message__content--warning">Please note that this content is only available to download in English.</p>',MSG_2000:"{{embargoMessage}}{{translationMessage}}"+_,MSG_2100:"<p>This content has already been downloaded and therefore will not count towards your republishing limit.</p>\n{{embargoMessage}}\n"+_,MSG_2200:'<p>Please contact us for details of republishing rights for this content (<a href="mailto:syndication@ft.com">syndication@ft.com</a> or +44 (0)207 873 4816).</p>',MSG_2300:"{{embargoMessage}}"+v,MSG_2320:`{{embargoMessage}}${v}\n${_}`,MSG_2340:`<p>This content has already been downloaded and therefore will not count towards your republishing limit.</p>\n{{embargoMessage}}\n${v}\n${_}`,MSG_4000:"<p>This content is not available for republishing.</p>",MSG_4050:"<p>Sorry, this content is no longer available.</p>",MSG_4100:"<p>You have reached your download limit for {{type}}s. Please contact your Account Manager to increase your limit.</p>",MSG_4200:"<p>Your contract does not allow {{type}}s to be downloaded. Please contact your Account Manager to change this.</p>",MSG_4250:"<p>You do not have rights to republish this type of content. Please contact your Account Manager for further details.</p>",MSG_4300:"<p>Report contains multiple articles. Please view each article individually for republishing rights.</p>",MSG_5000:"<p>Sorry, an error has occurred. Please try signing out and then in again. If error persists, please contact your Account Manager.</p>",MSG_5100:"<p>The Republishing Service is currently undergoing maintenance. Please try again later.</p>",GRAPHICS:"Please note that for copyright reasons not all the graphics in this article are available for republishing so will not be included in the download.",WORD_FORMAT:'Graphics are only available in Word format. Please select Word format (docx) in your  <a data-trackable="contractual-rights" href="/republishing/contract">syndication management tool</a> to download.'},S={STANDARD:"S1",RICH_ARTICLE:"S2"},E={CATEGORY:"syndication",DATA:{context:{app:"Syndication"},system:{product:"Syndication",source:"o-tracking"}},URI:"https://spoor-api.ft.com/px.gif"};function A(t,n){let e,{MAINTENANCE_MODE:a,contributor_content:o}=n;return t.translationMessage="",t.embargoPeriod&&"number"==typeof t.embargoPeriod&&(t.embargoPeriod=`${t.embargoPeriod} day${t.embargoPeriod>1?"s":""}`),t.embargoMessage=t.embargoPeriod?l(w.EMBARGO,t):"",Boolean(document.getElementById("ftlabsTranslationContainer"))&&(t.translationMessage=l(w.ENGLISH,t)),!0===a?e=w.MSG_5100:"package"===t.type?e=w.MSG_4300:!0===t.notAvailable?e=w.MSG_4050:"verify"===t.canBeSyndicated&&(e="en"!==t.lang?w.MSG_4250:w.MSG_2200),e="withContributorPayment"===t.canBeSyndicated&&!0!==o?w.MSG_2300:"withContributorPayment"===t.canBeSyndicated&&!0===t.downloaded?w.MSG_2340:"withContributorPayment"===t.canBeSyndicated?w.MSG_2320:"no"!==t.canBeSyndicated&&t.canBeSyndicated?!0===t.downloaded?w.MSG_2100:0===t.canDownload?"en"!==t.lang?w.MSG_4250:w.MSG_4200:-1===t.canDownload?w.MSG_4100:w.MSG_2000:w.MSG_4000,l(e,t)}function C(t,n){return function(){let{hasGraphics:t=!1,canAllGraphicsBeSyndicated:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{download_format:e="plain",allowed:a={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=[];a.rich_articles&&(t&&!n&&o.push({messageType:"neutral",message:w.GRAPHICS}),t&&"docx"!==e&&o.push({messageType:"error",message:w.WORD_FORMAT}));return o}(t,n).map(M).join("")}function M(t){let{messageType:n="neutral",message:e=""}=t;return`<div class="o-message o-message--alert o-message--${n} n-syndication-rich-content-message" data-o-component="o-message">\n\t\t<div class="o-message__container">\n\t\t\t<div class="o-message__content">\n\t\t\t\t<p class="o-message__content-main">\n\t\t\t\t\t<span class="o-message__content-highlight n-syndication-rich-message_content-highlight">${e}</span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>`}const T={"a.card__concept-article-link":{fn:"closest",slc:".card__concept-article"},"a.topic-card__concept-article-link":{fn:"closest",slc:".topic-card__concept-article"},"a.package__content-item":{fn:"querySelector",slc:".package__title"},".story__link":{fn:"closest",slc:'article[data-trackable="story"]'},a:{fn:"closest",slc:".o-teaser__heading"},".o-teaser":{fn:"querySelector",slc:".o-teaser__heading"},".stream-item":{fn:"querySelector",slc:".card-openable__headline"},'article[class="article"]':{fn:"querySelector",slc:".o-topper__headline"},"article.article--brand":{fn:"querySelector",slc:".o-topper__headline"},"article.article-grid":{fn:"querySelector",slc:".o-topper__headline",up:1},"div.hero":{fn:"querySelector",slc:".hero__heading"},"main.video":{fn:"querySelector",slc:".video__title"},"li.o-teaser__related-item":{},".js-teaser-headline":{}};let $;function O(t){return $=t,addEventListener("asyncContentLoaded",()=>G(),!0),addEventListener("nSyndication.dataChanged",()=>function(t){Array.isArray(t)||(t=k());const n=Array.from(t).reduce((t,n)=>{const e=n.getAttribute("data-content-id");return Array.isArray(t[e])||(t[e]=[]),t[e].push(n),t},{});u.forEach(t=>function(t,n){if(!n.length)return;n.forEach(n=>function(t,n){const e=function(t){const n="FORM"!==t.tagName.toUpperCase()&&"BUTTON"!==t.tagName.toUpperCase();if(t!==document.documentElement&&n){const n=Object.entries(T);for(let[e,a]of n)if(t.matches(e)){if("number"==typeof a.up&&a.up==a.up){let n=-1;for(;++n<a.up;)t=t.parentElement}if(!a.fn&&!a.slc)return t;const n=t[a.fn](a.slc);if(n)return n}}return null}(n);null!==e&&"true"!==e.getAttribute("data-syndicated")&&(e.classList.add("n-syndication"),e.classList.add("n-syndication-state-"+t.canBeSyndicated),s(e,function(t){const{messageCode:n,lang:e="en",id:a,type:o}=t,i=("n-syndication-icon-state-"+n).toLowerCase();return d(`<button\n\t\t\t\t\t\t\tclass="n-syndication-icon ${i}"\n\t\t\t\t\t\t\tdata-content-id="${a}"\n\t\t\t\t\t\t\tdata-iso-lang="${e}"\n\t\t\t\t\t\t\tdata-content-type="${o}"\n\t\t\t\t\t\t\tdata-syndicated="true"\n\t\t\t\t\t\t\tdata-trackable="syn-icon"\n\t\t\t\t\t\t\tdata-message-code="${n}"\n\t\t\t\t\t\t\ttype="button">\n\t\t\t\t\t\t\t<span class="o-normalise-visually-hidden">${A(t,$)}</span>\n\t\t\t\t\t\t</button>`)}(t)),e.setAttribute("data-content-type",t.type),e.setAttribute("data-syndicated","true"));e!==n&&(n.setAttribute("data-content-type",t.type),n.setAttribute("data-syndicated","true"))}(t,n))}(t,n[t.id])),Object(o.broadcast)("nSyndication.iconified")}(),!0),G()}function k(){return Object(o.$$)(["[data-content-id]","[data-id]","a.card__concept-article-link","a.topic-card__concept-article-link","a.package__content-item",".story__link"].join(", "))}function G(){return async function(t){if(!0===p.MAINTENANCE_MODE){const n=t.map(t=>({id:t,canBeSyndicated:"maintenance",messageCode:"MSG_5100"}));return Object(o.broadcast)("nSyndication.fetch",{request:t,response:n}),Promise.resolve(n)}const n={credentials:"include",headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify(t)};if(t.length)try{const e=await fetch("/syndication/resolve"+location.search,n);if(!e.ok){const t=await e.text();throw new Error(`Next /syndication/resolve responded with "${t}" (${e.status})`)}const a=await e.json();return Object(o.broadcast)("nSyndication.fetch",{request:t,response:a}),a}catch(t){Object(o.broadcast)("oErrors.log",{error:t,info:{component:"next-syndication-redux"}})}}(function(t){const n=Array.from(t).reduce((t,n)=>{const e=c(n);return e&&(t[e]=e),t},{});return Object.keys(n)}(k()))}var D=e("3c85f3e3"),N=e("3f59997e"),I=e.n(N);const R=new I.a("local","syndication"),j=location.pathname.includes("/download"),P=location.pathname.includes("/save");let x,L,B,q,Y;function H(t){addEventListener("click",U,!0),addEventListener("keyup",W,!0),addEventListener("resize",K,!0),D.default.listenTo("resize"),Y=t}function U(t){const n=m(t.target);let e=!0;const a={};if(a.category=E.CATEGORY,a.contractID=Y.contract_id,a.product=E.CATEGORY,a.url=location.href,a.action=t.target.getAttribute("data-trackable"),n&&(a.lang=n.lang,a.message=n.messageCode,a.article_id=n.id,a.syndication_content=n.type),t.target.matches('[data-content-id][data-syndicated="true"].n-syndication-icon'))X(t);else if(t.target.matches('[data-content-id][data-syndicated="true"].download-button'))t.preventDefault(),X(t);else if(t.target.matches('.n-syndication-action[data-action="save"]'))!function(t){const n=m(t.target);g(n.id).forEach(t=>t.saved=!0)}(t),J(),X(t),z();else if(t.target.matches('.n-syndication-action[data-action="download"]'))!function(t){const n=m(t.target);g(n.id).forEach(t=>{t.downloaded=!0,t.messageCode="MSG_2100"}),Object(o.broadcast)("nSyndication.downloadItem",{item:n})}(t),z();else if(Q()){const n=t.target.getAttribute("data-action");(t.target.matches(".n-syndication-modal-shadow")||n&&"close"===n)&&(t.preventDefault(),z())}else e=!1;!e||Object(o.broadcast)("oTracking.event",a)}function W(t){switch(t.key){case"Escape":J();const n={};n.category=E.CATEGORY,n.contractID=Y.contract_id,n.product=E.CATEGORY,n.url=location.href,n.action="close-syndication-modal",Object(o.broadcast)("oTracking.event",n);break;case" ":case"Enter":t.target.matches('[data-content-id][data-syndicated="true"].n-syndication-icon')&&X(t)}}function F(t){const n=function(t){return[!0===Y.MAINTENANCE_MODE,"package"===t.type,!0===t.notAvailable,"verify"===t.canBeSyndicated,"withContributorPayment"===t.canBeSyndicated&&!0!==Y.contributor_content,"no"===t.canBeSyndicated,!t.canBeSyndicated,t.canDownload<1].includes(!0)}(t),e=function(t){return[!0===t.saved,!0===Y.MAINTENANCE_MODE,"package"===t.type,!0!==t.notAvailable&&"no"===t.canBeSyndicated,!0!==t.notAvailable&&!t.canBeSyndicated].includes(!0)}(t),a=n?"#":function(t,n){let e=`${location.port?"":"https://dl.syndication.ft.com"}/syndication/download/${t}${q}`;n.lang&&(e+=(e.includes("?")?"&":"?")+"lang="+n.lang);return e}(t.id,t),o=n?"Download unavailable":"Download",i=e?"#":function(t,n){let e=`/syndication/save/${t}${q}`;n.lang&&(e+=(e.includes("?")?"&":"?")+"lang="+n.lang);return e}(t.id,t),c=j?"save-for-later":"save-for-later-downloads-page",r=!0===Y.MAINTENANCE_MODE?"":t.title;let s,l;return l=!0===t.saved?"Already saved":e?"Save unavailable":"Save for later",j?s="redownload":P||(s="download-items"),d(`<div class="n-syndication-modal-shadow"></div>\n\t\t\t\t\t\t\t<div class="n-syndication-modal n-syndication-modal-${t.type}" role="dialog" aria-labelledby="'Download:  ${r}" tabindex="0">\n\t\t\t\t\t\t\t\t<header class="n-syndication-modal-heading">\n\t\t\t\t\t\t\t\t\t<a class="n-syndication-modal-close" data-action="close" 'data-trackable="close-syndication-modal" role="button" href="#" aria-label="Close" title="Close" tabindex="0"></a>\n\t\t\t\t\t\t\t\t\t<span role="heading" class="n-syndication-modal-title">${r}</span>\n\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t<section class=" n-syndication-modal-content">\n\t\t\t\t\t\t\t\t\t${t.wordCount?`<span class="n-syndication-modal-word-count">Word count: ${t.wordCount}</span>`:""}\n\t\t\t\t\t\t\t\t\t<div class="n-syndication-modal-message">\n\t\t\t\t\t\t\t\t\t${A(t,Y)}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t${C(t,Y)}\n\t\t\t\t\t\t\t\t\t<div class="n-syndication-actions" data-content-id="${t.id}" data-iso-lang="${t.lang}">\n\t\t\t\t\t\t\t\t\t\t<a class="n-syndication-action" data-action="save" ${e?"disabled":""} data-trackable="${c}" href="${i}">${l}</a>\n\t\t\t\t\t\t\t\t\t\t<a class="n-syndication-action n-syndication-action-primary" data-action="download" ${n?"disabled":""} ${s?`data-trackable="${s}"`:""} href="${a}">${o}</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t</div>`)}function z(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,n=setTimeout(()=>{clearTimeout(n),n=null,J()},t)}function J(){Q()&&(L.remove(),B.remove(),x=null,L=null,B=null)}function K(){if(!Q())return;const t=document.documentElement;let n=t.clientWidth/2-L.clientWidth/2,e=Math.max(t.clientHeight/3-L.clientHeight/2,100);L.style.left=n+"px",L.style.top=e+"px"}function X(t){Q()&&J(),function(t){do{if("A"===t.tagName.toUpperCase())return!0}while(t=t.parentElement);return!1}(t.target.parentElement)&&t.preventDefault(),R.get("download_format").then(n=>{q=n&&Date.now()-n.time<=3e5?"?format="+n.format:"",x=F(m(t.target)),L=x.lastElementChild||x.lastChild,B=x.firstElementChild||x.firstChild,document.body.appendChild(x),K()})}function Q(){return!(!L||!document.body.contains(L))}function V(t){const n=document.createElement("a");n.classList.add("o-header__nav-link"),n.classList.add("n-syndication-republishing"),n.setAttribute("data-trackable","Republishing"),n.setAttribute("href","/republishing/contract"),n.textContent="Republishing",n.addEventListener("click",n=>{Object(o.broadcast)("oTracking.event",{category:"syndication",action:"Republishing",contractID:t.contract_id,product:"syndication",referrer:location.href,url:n.target.href||n.target.getAttribute("href")})});const e=document.createElement("li");return e.classList.add("o-header__nav-item"),e.setAttribute("data-trackable","syndication"),e.appendChild(n),e}function Z(t){!function(t){const n=Object(o.$)("#o-header-nav-desktop");if(!n)return;const e=n.querySelector(".o-header__container");if(!e)return;let a=e.querySelector('[data-trackable="user-nav"]');a||(a=document.createElement("ul"),a.classList.add("o-header__nav-list"),a.classList.add("o-header__nav-list--right"),a.setAttribute("data-trackable","user-nav"),e.appendChild(a));const i=V(t);a.appendChild(i)}(t),function(t){const n=Object(o.$)("#o-header-drawer");if(!n)return;const e=n.querySelector('[data-trackable="Portfolio"]');if(!e)return;const a=V(t);e.parentElement.insertAdjacentElement("afterend",a)}(t)}var tt=e("b529f2a5");const nt=new I.a("local","syndication");let et,at,ot,it,ct;function rt(t){const n=m(t.target);let e=!0;const a={};if(a.category=E.CATEGORY,a.contractID=it.contract_id,a.product=E.CATEGORY,a.url=location.href,n&&(a.lang=n.lang,a.message=n.messageCode,a.article_id=n.id,a.syndication_content=n.type),t.target.matches('[data-content-id][data-syndicated="true"].n-syndication-icon'))ft(t);else if(t.target.matches('[data-content-id][data-syndicated="true"].download-button'))t.preventDefault(),ft(t);else if(t.target.matches('.n-syndication-action[data-action="save"]'))lt();else if(pt()){const n=t.target.getAttribute("data-action");(t.target.matches(".n-syndication-modal-shadow")||n&&"maintenance-modal-close"===n)&&(t.preventDefault(),lt())}else e=!1;!e||Object(o.broadcast)("oTracking.event",a)}function st(t){switch(t.key){case"Escape":dt();const n={};n.category=E.CATEGORY,n.contractID=it.contract_id,n.product=E.CATEGORY,n.url=location.href,n.action="close-syndication-modal",Object(o.broadcast)("oTracking.event",n);break;case" ":case"Enter":t.target.matches('[data-content-id][data-syndicated="true"].n-syndication-icon')&&ft(t)}}function dt(){pt()&&(at.remove(),ot.remove(),et=null,at=null,ot=null)}function lt(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,n=setTimeout(()=>{clearTimeout(n),n=null,dt()},t)}function ut(){if(!pt())return;const t=document.documentElement;let n=t.clientWidth/2-at.clientWidth/2,e=Math.max(t.clientHeight/3-at.clientHeight/2,100);at.style.left=n+"px",at.style.top=e+"px"}function ft(t){pt()&&dt(),function(t){do{if("A"===t.tagName.toUpperCase())return!0}while(t=t.parentElement);return!1}(t.target.parentElement)&&t.preventDefault(),nt.get("download_format").then(()=>{et=function(t){const n=!0===it.MAINTENANCE_MODE?"":t.title;return d(`<div class="n-syndication-modal-shadow"></div>\n\t\t\t\t\t\t\t<div class="n-syndication-modal n-syndication-modal-${t.type}" role="dialog" aria-labelledby="'Download:  ${n}" tabindex="0">\n\t\t\t\t\t\t\t\t<header class="n-syndication-modal-heading">\n\t\t\t\t\t\t\t\t<span class="o-icons-icon o-icons-icon--warning-alt demo-icon n-syndication-maintenance-icon"></span>\n\t\t\t\t\t\t\t\t\t<a class="n-syndication-modal-close" data-action="close" 'data-trackable="close-syndication-modal" role="button" href="#" aria-label="Close" title="Close" tabindex="0"></a>\n\t\t\t\t\t\t\t\t\t<span role="heading" class="n-syndication-maintenance-modal-title" >Maintenance work is scheduled in ${ct} days on Oct 6, 2021</span>\n\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t<section class=" n-syndication-modal-content">\n\t\t\t\t\t\t\t\t<div class="n-syndication-maintenance-modal-word-count">\n\t\t\t\t\t\t\t\t\t<span>10:30 - 14:30 BST (British Summer Time)</span> <br>\n\t\t\t\t\t\t\t\t\t<span>5:30 - 9:30 EDT (Eastern Daylight Time)</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="n-syndication-maintenance-modal-message">\n\t\t\t\t\t\t\t\t\tYou will not be able to use the Syndication tool during this time.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="n-syndication-maintenance-modal-lower-message">\n\t\t\t\t\t\t\t\t\tIf you require articles during the maintenance period, we will be able to provide them if you email\n\t\t\t\t\t\t\t\t\t<u><a href = "mailto: syndication@ft.com" style=" color: black" target="_blank">syndication@ft.com</a></u>\n\t\t\t\t\t\t\t\t\twith your requirement.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="n-syndication-actions" data-content-id="${t.id}" data-iso-lang="${t.lang}">\n\t\t\t\t\t\t\t\t\t<button data-action="maintenance-modal-close" class="close-button-maintenance">\n\t\t\t\t\t\t\t\t\t<a><span data-action="maintenance-modal-close" class="close-message-maintenance">Thanks, I understand</span></a>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t</div>`)}(m(t.target)),at=et.lastElementChild||et.lastChild,ot=et.firstElementChild||et.firstChild,document.body.appendChild(et),ut()})}function pt(){return!(!at||!document.body.contains(at))}async function ht(t){if(!t.get("syndication"))return;const n=await async function(){const t=await Object(tt.b)();return t&&t.products?t.products.split(",").filter(t=>t===S.STANDARD||t===S.RICH_ARTICLE):[]}();if(!n.length||!n.includes(S.STANDARD))return;const e=await i();if(!e||!0!==e.migrated)return;Z(e);const a=e.allowed||{};if((!0===a.spanish_content||!0===a.spanish_weekend)&&!0!==a.ft_com)return;h(e),O(e),H(e);let c=function(t){let n=new Date(Date.now());const e=new Date(t)-n,a=Math.ceil(e/864e5);return a>=0?a:-1}("October 5, 2021 10:30:00");c>=0&&function(t,n){addEventListener("click",rt,!0),addEventListener("keyup",st,!0),addEventListener("resize",ut,!0),D.default.listenTo("resize"),it=t,ct=n}(e,c),Object(o.$$)(".video__actions__download").forEach(t=>t.parentNode.removeChild(t))}}}]);
//# sourceMappingURL=financial-times-n-syndication.686c4007b55b.bundle.js.map