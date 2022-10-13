(window.webpackJsonp=window.webpackJsonp||[]).push([["financial-times-x-gift-article"],{af1b8468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("7220c657"),n=r("3a7b5fa1");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(){return i.h("div",{className:"x-gift-article-loading"},i.h("div",{className:"x-gift-article-loading__spinner"}))},h=function(e){var t=e.giftCredits,r=e.monthlyAllowance,n=e.monthNow,a=e.isFreeArticle,s=e.isArticleSharingUxUpdates,o=e.title,l=void 0===o?"":o;return s?("Share on Social"!==l&&(l=a?"This article is free for anyone to read":"You have ".concat(t," out of ").concat(r," gift credits left in ").concat(n)),i.h("div",{className:"x-gift-article__title",id:"gift-article-title"},l)):i.h("div",{className:"x-gift-article__title",id:"gift-article-title"},l)},p="gift",d="enterprise",m="nonGift",g={raf:"refer-a-friend-link",dummy:"example-gift-link",gift:"gift-link",nonGift:"non-gift-link"},b=function(e){var t=e.shareType,r=e.showGiftUrlSection,n=e.showEnterpriseUrlSection,a=e.showNonGiftUrlSection,s=e.enterpriseEnabled,o=void 0!==s&&s,l=e.enterpriseLimit,c=void 0===l?100:l,u=e.enterpriseRequestAccess,f=void 0!==u&&u,h=e.enterpriseAlert,g=void 0!==h&&h;return i.h("div",{className:"o-forms-input o-forms-input--radio-round o-forms-field x-gift-article__radio_buttons",role:"group","aria-labelledby":"article-share-options"},i.h("span",{className:"x-gift-article--visually-hidden",id:"article-share-options"},"Article share options"),!0===o&&i.h("label",{htmlFor:"enterpriseLink"},i.h("input",{type:"radio",name:"gift-form__radio",value:"enterpriseLink",id:"enterpriseLink",checked:t===d,onChange:n}),i.h("span",{className:"o-forms-input__label"},c&&!f?"Up to ".concat(c," recipients"):"Multiple recipients",i.h("span",{className:"o-labels x-gift-article__enterprise-label"},"Enterprise"),g&&i.h("span",{className:"x-gift-article__enterprise-no-credits-icon"}))),i.h("label",{htmlFor:"giftLink"},i.h("input",{type:"radio",name:"gift-form__radio",value:"giftLink",id:"giftLink",checked:t===p,onChange:r}),i.h("span",{className:"o-forms-input__label"},o?"Single recipient":"with anyone")),i.h("label",{htmlFor:"nonGiftLink"},i.h("input",{type:"radio",name:"gift-form__radio",value:"nonGiftLink",id:"nonGiftLink",checked:t===m,onChange:a}),i.h("span",{className:"o-forms-input__label"},"FT subscribers only")))},y=function(e){var t=e.shareType,r=e.isGiftUrlCreated,n=e.url,a=e.urlType;return i.h("span",{className:"o-forms-input o-forms-input--text"},i.h("input",{type:"text",name:a,value:n,className:"x-gift-article__url-input",disabled:(t===p||t===d)&&!r,readOnly:!0,"aria-label":"Gift article shareable link"}))},v=function(e){var t=e.shareType,r=e.isGiftUrlCreated,n=e.isFreeArticle,a=e.giftCredits,s=e.monthlyAllowance,o=e.nextRenewalDateText,l=e.redemptionLimit,c=e.invalidResponseFromApi,u=e.isArticleSharingUxUpdates,f=e.enterpriseLimit,h=e.enterpriseHasCredits,g=e.enterpriseRequestAccess,b=e.enterpriseFirstTimeUser;if(u){if(n)return null;if(t===p)return 0===a?i.h("div",{className:"x-gift-article-message"},"You’ve used all your ",i.h("strong",null,"gift article credits"),i.h("br",null),"You’ll get your next ",s," on ",i.h("strong",null,o)):c?i.h("div",{className:"x-gift-article-message"},"Unable to fetch gift credits. Please try again later"):i.h("div",{className:"x-gift-article-message"},"A gift link can be opened up to ",i.h("strong",null,l||3," times"));if(t===m)return i.h("div",{className:"x-gift-article-message"},"This link can only be read by existing subscribers")}return n?i.h("div",{className:"x-gift-article-message"},"This article is currently ",i.h("strong",null,"free")," for anyone to read"):t===p?0===a?i.h("div",{className:"x-gift-article-message"},"You’ve used all your ",i.h("strong",null,"gift article credits"),i.h("br",null),"You’ll get your next ",s," on ",i.h("strong",null,o)):r?i.h("div",{className:"x-gift-article-message"},"This link can be opened up to ",l," times and is valid for 90 days"):c?i.h("div",{className:"x-gift-article-message"},"Unable to fetch gift credits. Please try again later"):i.h("div",{className:"x-gift-article-message"},"Uses 1 gift credit. You have"," ",i.h("strong",null,a," gift article ",1===a?"credit":"credits")," ","left this month"):t===d?c?i.h("div",{className:"x-gift-article-message"},"Unable to create enterprise link. Please try again later"):!0===r?i.h("div",{className:"x-gift-article-message"},"This link can be opened by up to ",f," people."):!0===h?b?i.h("div",{className:"x-gift-article-message x-gift-article-message--enterprise"},i.h("h4",null,"Engage more effectively with clients and colleagues."),i.h("p",null,"Enterprise Sharing lets members of your organisation share FT article links with up to"," ",f," people, even if they don’t have a FT subscription.")):i.h("div",{className:"x-gift-article-message"},"Your organisation has ",i.h("strong",null,"Enterprise Sharing credits")," available for you to use"):g?i.h("div",{className:"x-gift-article-message x-gift-article-message--enterprise"},i.h("h4",null,"Enterprise Sharing is not enabled for your team"),i.h("p",null,"Enterprise Sharing lets members of your organisation share FT article links with potentially thousands people, even if they don’t have a FT subscription"),i.h("a",{href:"https://enterprise.ft.com/ft-enterprise-sharing-request-access/?segmentId=c87259e0-7073-3ea8-7f83-b988f05c3f94",target:"_blank",rel:"noreferrer","data-trackable":"enterprise-request-access",className:"x-gift-article__button"},"Learn more")):i.h("div",{className:"x-gift-article-message x-gift-article-message--enterprise"},i.h("h4",null,"Your organisation has run out of share credits."),i.h("p",null,"Request more credits and our Enterprise team will get in touch with the admin of your FT subscription to arrange a top-up of sharing credits."),i.h("a",{href:"https://enterprise.ft.com/ft-enterprise-sharing-request-access/?segmentId=c87259e0-7073-3ea8-7f83-b988f05c3f94",target:"_blank",rel:"noreferrer","data-trackable":"enterprise-out-of-credits",className:"x-gift-article__button",type:"button"},"Request more credits")):t===m?i.h("div",{className:"x-gift-article-message"},"This link can only be read by existing subscribers"):void 0},w=function(e){var t=e.shareType,r=e.isGiftUrlCreated,n=e.mailtoUrl,a=e.showCopyButton,s=e.nativeShare,o=e.actions,l=e.giftCredits;return r||t===m?s?i.h("div",{className:"x-gift-article__buttons"},i.h("button",{className:"js-copy-link x-gift-article__button x-gift-article-button--gap",type:"button",onClick:o.shareByNativeShare},"Share link")):i.h("div",{className:"x-gift-article__buttons"},a&&i.h("button",{className:"js-copy-link x-gift-article__button x-gift-article-button--gap",type:"button",onClick:t===p?o.copyGiftUrl:t===d?o.copyEnterpriseUrl:o.copyNonGiftUrl,"aria-label":"Copy the gift article link to your clipboard"},"Copy link"),i.h("a",{className:"x-gift-article__button",href:n,target:"_blank",rel:"noopener noreferrer",onClick:t===p?o.emailGiftUrl:t===d?o.emailEnterpriseUrl:o.emailNonGiftUrl},"Email link ",i.h("span",{className:"x-gift-article--visually-hidden"},"to Share this article"))):i.h("div",{className:"x-gift-article__buttons"},i.h("button",{className:"x-gift-article__button",disabled:!l,type:"button",onClick:t===d?o.createEnterpriseUrl:o.createGiftUrl},"Create ",t===d?"enterprise":"gift"," link"))},U=function(e){var t=e.shareType,r=e.isGiftUrlCreated,n=e.isFreeArticle,a=e.url,s=e.urlType,o=e.giftCredits,l=e.monthlyAllowance,c=e.nextRenewalDateText,u=e.mailtoUrl,f=e.redemptionLimit,h=e.showCopyButton,m=e.nativeShare,g=e.invalidResponseFromApi,b=e.isArticleSharingUxUpdates,U=e.actions,k=e.enterpriseLimit,C=e.enterpriseHasCredits,x=e.enterpriseRequestAccess,_=e.enterpriseFirstTimeUser,N=!(0===o&&t===p||(x||!C)&&t===d);return i.h("div",{className:"js-gift-article__url-section x-gift-article__url-section","data-section-id":t+"Link","data-trackable":t+"Link"},N&&i.h(y,{shareType:t,isGiftUrlCreated:r,url:a,urlType:s}),i.h(v,{shareType:t,isGiftUrlCreated:r,isFreeArticle:n,giftCredits:o,monthlyAllowance:l,nextRenewalDateText:c,redemptionLimit:f,invalidResponseFromApi:g,isArticleSharingUxUpdates:b,enterpriseHasCredits:C,enterpriseLimit:k,enterpriseRequestAccess:x,enterpriseFirstTimeUser:_}),N&&i.h(w,{shareType:t,isGiftUrlCreated:r,mailtoUrl:u,showCopyButton:h,nativeShare:m,actions:U,giftCredits:o}))},k=function(e){var t=e.mobileShareLinks;return i.h("div",{className:"x-gift-article-mobile-share-buttons"},i.h(h,{title:"Share on Social"}),i.h("div",{className:"x-gift-article-mobile-share-buttons__inner"},i.h("span",{className:"x-gift-article-mobile-share-buttons__button","data-share":"facebook"},i.h("a",{className:"x-gift-article-mobile-share-buttons--facebook",rel:"noopener",href:t.facebook,"data-trackable":"facebook"},"Facebook"," ",i.h("span",{className:"x-gift-article-mobile-share-buttons__hidden-button-text"},"(opens new window)"))),i.h("span",{className:"x-gift-article-mobile-share-buttons__button","data-share":"twitter"},i.h("a",{className:"x-gift-article-mobile-share-buttons--twitter",rel:"noopener",href:t.twitter,"data-trackable":"twitter"},"Twitter"," ",i.h("span",{className:"x-gift-article-mobile-share-buttons__hidden-button-text"},"(opens new window)"))),i.h("span",{className:"x-gift-article-mobile-share-buttons__button","data-share":"linkedin"},i.h("a",{className:"x-gift-article-mobile-share-buttons--linkedin",rel:"noopener",href:t.linkedin,"data-trackable":"linkedin"},"LinkedIn"," ",i.h("span",{className:"x-gift-article-mobile-share-buttons__hidden-button-text"},"(opens new window)"))),i.h("span",{className:"x-gift-article-mobile-share-buttons__button","data-share":"whatsapp"},i.h("a",{className:"x-gift-article-mobile-share-buttons--whatsapp",rel:"noopener",href:t.whatsapp,"data-trackable":"whatsapp"},"Whatsapp"," ",i.h("span",{className:"x-gift-article-mobile-share-buttons__hidden-button-text"},"(opens new window)")))))},C=function(e){var t=e.hideCopyConfirmation,r=e.isArticleSharingUxUpdates;return i.h("div",{className:"o-message o-message--alert o-message--success x-gift-article__copy-confirmation",role:"alert"},i.h("div",{className:"o-message__container"},i.h("div",{className:"o-message__content"},i.h("p",{className:"o-message__content-main"},r?i.h("span",null,"The link has been copied to your clipboard"):i.h("span",{className:"o-message__content-highlight"},"The link has been copied to your clipboard"))),i.h("button",{className:"o-message__close","aria-label":"close",title:"Close",onClick:t})))},x=function(e){var t=e.rafTitle,r=e.rafDescription,n=e.urls,a=e.actions;return i.h("div",{className:"x-gift-article--raf"},i.h("h4",null,t),i.h("p",null,r),i.h("div",{className:"js-gift-article__url-section x-gift-article__url-section","data-section-id":g.raf+"Link","data-trackable":g.raf+"Link"},i.h("span",{className:"o-forms-input o-forms-input--text"},i.h("input",{type:"text",name:g.raf,value:n.raf,className:"x-gift-article__url-input",readOnly:!0,"aria-label":"Gift free subscription shareable link"})),i.h("div",{className:"x-gift-article__buttons"},i.h("button",{className:"js-copy-link x-gift-article__button x-gift-article-button--gap",type:"button",onClick:a.copyRafUrl,"aria-label":"Copy the free subscription link to your clipboard"},"Copy link"))))},_=function(e){return i.h("div",{className:"x-gift-article"},i.h("form",{name:"gift-form",className:"x-gift-article__form"},i.h("div",{role:"group",arialabelledby:"gift-article-title"},i.h(h,e),!e.isFreeArticle&&i.h(b,{shareType:e.shareType,isArticleSharingUxUpdates:e.isArticleSharingUxUpdates,showGiftUrlSection:e.actions.showGiftUrlSection,showEnterpriseUrlSection:e.actions.showEnterpriseUrlSection,showNonGiftUrlSection:e.actions.showNonGiftUrlSection,enterpriseLimit:e.enterpriseLimit,enterpriseHasCredits:e.enterpriseHasCredits,enterpriseRequestAccess:e.enterpriseRequestAccess,enterpriseAlert:!e.enterpriseHasCredits&&!e.enterpriseRequestAccess,enterpriseEnabled:e.enterpriseEnabled}),i.h(U,e))),e.showCopyConfirmation&&i.h(C,{hideCopyConfirmation:e.actions.hideCopyConfirmation,isArticleSharingUxUpdates:e.isArticleSharingUxUpdates}),e.isRafActive&&i.h("div",null,i.h(x,e),e.showRafCopyConfirmation&&i.h(C,{hideCopyConfirmation:e.actions.hideRafCopyConfirmation,isArticleSharingUxUpdates:e.isArticleSharingUxUpdates})),e.showMobileShareLinks&&i.h(k,{mobileShareLinks:e.mobileShareLinks}))},N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.protocol,i=t.domain;o(this,e),this.protocol=r,this.domain=i}return c(e,[{key:"getFetchUrl",value:function(e){var t="";return this.domain&&(t="//".concat(this.domain),this.protocol&&(t="".concat(this.protocol,":").concat(t))),"".concat(t).concat(e)}},{key:"fetchJson",value:function(e,t){var r=this.getFetchUrl(e),i=Object.assign({credentials:"include"},t);return fetch(r,i).then((function(e){return e.json()}))}},{key:"getGiftArticleAllowance",value:function(){return new Promise(function(e,t){var r,i=function(r){try{return e({monthlyAllowance:void 0,giftCredits:void 0,nextRenewalDate:void 0})}catch(e){return t(e)}};try{return Promise.resolve(this.fetchJson("/article/gift-credits")).then((function(t){try{return e({monthlyAllowance:(r=t).allowance,giftCredits:r.remainingCredits,nextRenewalDate:r.renewalDate})}catch(e){return i()}}),i)}catch(e){i()}}.bind(this))}},{key:"getGiftUrl",value:function(e){return new Promise(function(t,r){var i,n=function(e){try{return t({redemptionUrl:void 0,redemptionLimit:void 0})}catch(e){return r(e)}};try{return Promise.resolve(this.fetchJson("/article/gift-link/"+encodeURIComponent(e))).then((function(e){try{if((i=e).errors)throw new Error("Failed to get gift article link: ".concat(i.errors.join(", ")));return t(s({},i))}catch(e){return n()}}),n)}catch(e){n()}}.bind(this))}},{key:"getShorterUrl",value:function(e){return new Promise(function(t,r){var i,n,a;i=e,n=!1;var s=function(){try{return t({url:i,isShortened:n})}catch(e){return r(e)}},o=function(e){try{return s()}catch(e){return r(e)}};try{return Promise.resolve(this.fetchJson("/article/shorten-url/"+encodeURIComponent(e))).then((function(e){try{return(a=e).shortenedUrl&&(n=!0,i=a.shortenedUrl),s()}catch(e){return o()}}),o)}catch(e){o()}}.bind(this))}}]),e}(),S=function(){function e(t){o(this,e),this.baseUrl=t}return c(e,[{key:"getFetchUrl",value:function(e){if(!this.baseUrl)throw new Error("Enterprise Sharing API base url missing");return"".concat(this.baseUrl).concat(e)}},{key:"fetchJson",value:function(e,t){return new Promise(function(r,i){var n,a,s;return n=this.getFetchUrl(e),a=Object.assign({credentials:"include",headers:{"Content-Type":"application/json"}},t),Promise.resolve(fetch(n,a)).then((function(e){try{return 403===(s=e).status?i(new Error("ShowRequestAccess")):404===s.status?i(new Error("UserIsNotB2b")):Promise.resolve(s.json()).then(r,i)}catch(e){return i(e)}}),i)}.bind(this))}},{key:"getEnterpriseArticleAllowance",value:function(){return new Promise(function(e,t){var r,i=function(r){try{return"ShowRequestAccess"===(null==r?void 0:r.message)?e({enabled:!0,limit:100,hasCredits:!1,firstTimeUser:!1,requestAccess:!0}):e({enabled:!1,limit:0,hasCredits:!1,firstTimeUser:!1,requestAccess:!1})}catch(e){return t(e)}};try{return Promise.resolve(this.fetchJson("/v1/users/me/allowance")).then((function(t){try{return e({limit:(r=t).limit,hasCredits:r.hasCredits,firstTimeUser:r.firstTimeUser,enabled:!0,requestAccess:!1})}catch(e){return i(e)}}),i)}catch(e){i(e)}}.bind(this))}},{key:"getESUrl",value:function(e){return new Promise(function(t,r){var i,n=function(e){try{return t({redemptionUrl:void 0,redemptionLimit:void 0})}catch(e){return r(e)}};try{return Promise.resolve(this.fetchJson("/v1/shares",{method:"POST",body:JSON.stringify({contentId:e})})).then((function(e){try{return t({redemptionUrl:(i=e).url,redemptionLimit:i.redeemLimit})}catch(e){return n()}}),n)}catch(e){n()}}.bind(this))}}]),e}();var A=function(e,t){var r=encodeURIComponent(e),i=encodeURIComponent(t);return"mailto:?subject=".concat(r,"&body=").concat(i)},T=function(e){var t=e.target.closest(".js-gift-article__url-section").querySelector("input"),r=t.contentEditable,i=t.readOnly,n=document.createRange();t.contenteditable=!0,t.readonly=!1,t.focus(),n.selectNodeContents(t);var a=window.getSelection();try{a.removeAllRanges(),a.addRange(n),t.setSelectionRange(0,999999)}catch(e){t.select()}t.contentEditable=r,t.readOnly=i,document.execCommand("copy"),t.blur()};function G(e){var t=new CustomEvent("oTracking.event",{detail:e,bubbles:!0});document.body.dispatchEvent(t)}var R=function(e,t){return G({category:"gift-link",action:"create",linkType:"giftLink",link:e,longUrl:t})},L=function(e){return G({category:"gift-link",action:"create",linkType:"enterpriseLink",link:e})},P=function(e){return G({category:"gift-link",action:"open",status:e})},E=function(e,t){return G({category:"gift-link",action:"copy",linkType:e,link:t})},F=function(e,t){return G({category:"gift-link",action:"mailto",linkType:e,link:t})},O=["January","February","March","April","May","June","July","August","September","October","November","December"],j=function(e){return{shareType:p,url:e.urls.gift||e.urls.dummy,urlType:e.urls.gift?g.gift:g.dummy,mailtoUrl:e.mailtoUrls.gift,isGiftUrlCreated:!!e.urls.gift,showCopyConfirmation:!1,invalidResponseFromApi:!1}},q=function(e){return{shareType:d,url:e.urls.enterprise||e.urls.dummy,urlType:e.urls.enterprise?g.gift:g.dummy,mailtoUrl:e.mailtoUrls.enterprise,isGiftUrlCreated:!!e.urls.enterprise,showCopyConfirmation:!1,invalidResponseFromApi:!1}},D=function(e){return{shareType:m,url:e.urls.nonGift,urlType:g.nonGift,mailtoUrl:e.mailtoUrls.nonGift,isGiftUrlCreated:!1,showCopyConfirmation:!1,invalidResponseFromApi:!1}},I=function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(n){var a=A(n.article.title,e);return{url:e,mailtoUrl:a,redemptionLimit:i?n.redemptionLimit:t,isGiftUrlCreated:!0,isGiftUrlShortened:r,urlType:i?g.enterprise:g.gift,urls:Object.assign(n.urls,u({},i?"enterprise":"gift",e)),mailtoUrls:Object.assign(n.mailtoUrls,u({},i?"enterprise":"gift",a)),invalidResponseFromApi:!1}}},J=function(e){return function(t){var r=A(t.article.title,e);return{url:e,mailtoUrl:r,isNonGiftUrlShortened:!0,urls:Object.assign(t.urls,{nonGift:e}),mailtoUrls:Object.assign(t.mailtoUrls,{nonGift:r})}}},B=function(e){return{invalidResponseFromApi:e}},H="undefined"!=typeof document&&document.queryCommandSupported&&document.queryCommandSupported("copy"),M=new Date,Y="".concat(O[M.getMonth()]),W=n.withActions((function(e){var t=new N({protocol:e.apiProtocol,domain:e.apiDomain}),r=new S(e.enterpriseApiBaseUrl);return{showGiftUrlSection:function(){return j},showEnterpriseUrlSection:function(){return q},showNonGiftUrlSection:function(){return function(e){return new Promise((function(r,i){var n,a,s;if(n=D(e),!e.isNonGiftUrlShortened)return Promise.resolve(t.getShorterUrl(e.urls.nonGift)).then(function(t){try{return s=(a=t).url,a.isShortened&&Object.assign(n,J(s)(e)),o.call(this)}catch(e){return i(e)}}.bind(this),i);function o(){return r(n)}return o.call(this)}))}},createGiftUrl:function(){return new Promise((function(r,i){var n,a,s,o,l,c;return Promise.resolve(t.getGiftUrl(e.article.id)).then(function(e){try{return a=(n=e).redemptionUrl,s=n.redemptionLimit,a?Promise.resolve(t.getShorterUrl(a)).then((function(e){try{return l=(o=e).url,c=o.isShortened,R(l,a),r(I(l,s,c))}catch(e){return i(e)}}),i):r(B(!0))}catch(e){return i(e)}}.bind(this),i)}))},createEnterpriseUrl:function(){return new Promise((function(t,i){var n,a,s;return Promise.resolve(r.getESUrl(e.article.id)).then((function(e){try{return a=(n=e).redemptionUrl,s=n.redemptionLimit,a?(L(a),t(I(a,s,!1,!0))):t(B(!0))}catch(e){return i(e)}}),i)}))},copyGiftUrl:function(e){return T(e),function(e){var t=e.urls.gift;return E("giftLink",t),{showCopyConfirmation:!0}}},copyEnterpriseUrl:function(e){return T(e),function(e){var t=e.urls.enterprise;return E("enterpriseLink",t),{showCopyConfirmation:!0}}},copyNonGiftUrl:function(e){return T(e),function(e){var t=e.urls.nonGift;return E("nonGiftLink",t),{showCopyConfirmation:!0}}},emailGiftUrl:function(){return function(e){F("giftLink",e.urls.gift)}},emailEnterpriseUrl:function(){return function(e){F("enterpriseLink",e.urls.enterprise)}},emailNonGiftUrl:function(){return function(e){F("nonGiftLink",e.urls.nonGift)}},hideCopyConfirmation:function(){return{showCopyConfirmation:!1}},copyRafUrl:function(e){return T(e),function(e){var t=e.urls.raf;return E("rafLink",t),{showRafCopyConfirmation:!0}}},hideRafCopyConfirmation:function(){return{showRafCopyConfirmation:!1}},shareByNativeShare:function(){throw new Error("shareByNativeShare should be implemented by x-gift-article's consumers")},activate:function(){return function(i){return new Promise((function(n,a){var o,l,c,u,f,h,m,g,b,y,v,w;return e.isFreeArticle?Promise.resolve(t.getShorterUrl(i.urls.nonGift)).then(function(e){try{return l=(o=e).url,o.isShortened?n(J(l)(i)):U.call(this)}catch(e){return a(e)}}.bind(this),a):Promise.resolve(t.getGiftArticleAllowance()).then(function(e){try{return u=(c=e).giftCredits,f=c.monthlyAllowance,h=c.nextRenewalDate,Promise.resolve(r.getEnterpriseArticleAllowance()).then(function(e){try{return g=(m=e).enabled,b=m.limit,y=m.hasCredits,v=m.firstTimeUser,w=m.requestAccess,P(g?w?"enterprise-request-access":y?"enterprise-enabled":"enterprise-no-credits":"enterprise-disabled"),n(u>0||0===u?s(s({},function(e,t,r){var i=new Date(r);return{giftCredits:e,monthlyAllowance:t,nextRenewalDateText:"".concat(O[i.getMonth()]," ").concat(i.getDate()),invalidResponseFromApi:!1}}(u,f,h)),{},{shareType:g&&y?d:p,enterpriseEnabled:g,enterpriseLimit:b,enterpriseHasCredits:y,enterpriseFirstTimeUser:v,enterpriseRequestAccess:w}):{invalidResponseFromApi:!0,enterpriseEnabled:g,enterpriseLimit:b,enterpriseHasCredits:y,enterpriseFirstTimeUser:v,enterpriseRequestAccess:w})}catch(e){return a(e)}}.bind(this),a)}catch(e){return a(e)}}.bind(this),a);function U(){return n()}}))}}}}),(function(e){var t,r,i,n={title:"Share this article",giftCredits:void 0,monthlyAllowance:void 0,monthNow:Y,showCopyButton:H,isGiftUrlCreated:!1,isGiftUrlShortened:!1,isNonGiftUrlShortened:!1,isArticleSharingUxUpdates:!1,rafTitle:(null===(t=e.raf)||void 0===t?void 0:t.title)||"Gift 2 months free access to the FT",rafDescription:(null===(r=e.raf)||void 0===r?void 0:r.description)||"Instead of sharing this article, gift free full access. Share this link with your friend or colleague for them to get free access for 60 days. By sharing this link, you confirm that you have your friend's consent to do so.",urls:{raf:(null===(i=e.raf)||void 0===i?void 0:i.url)||"https://www.ft.com/join/licence/aa618a29-4699-4aca-ba3c-ce4d0b22e190/details",dummy:"https://on.ft.com/gift_link",gift:void 0,enterprise:void 0,nonGift:"".concat(e.article.url,"?shareType=nongift")},mailtoUrls:{gift:void 0,enterprise:void 0,nonGift:A(e.article.title,"".concat(e.article.url,"?shareType=nongift"))},mobileShareLinks:e.showMobileShareLinks?{facebook:"http://www.facebook.com/sharer.php?u=".concat(encodeURIComponent(e.article.url),"&t=").concat(encodeURIComponent(e.article.title)),twitter:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(e.article.url),"&text=").concat(encodeURIComponent(e.article.title),"&via=financialtimes"),linkedin:"http://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(e.article.url),"&title=").concat(encodeURIComponent(e.article.title),"&source=Financial+Times"),whatsapp:"whatsapp://send?text=".concat(encodeURIComponent(e.article.title),"%20-%20").concat(encodeURIComponent(e.article.url))}:void 0},a=Object.assign({},e,n),s=e.isFreeArticle?D(a):j(a);return Object.assign(n,s)}))((function(e){return e.isLoading?i.h(f,null):i.h(_,e)}));t.GiftArticle=W}}]);
//# sourceMappingURL=financial-times-x-gift-article.ea231cc2370e.bundle.js.map