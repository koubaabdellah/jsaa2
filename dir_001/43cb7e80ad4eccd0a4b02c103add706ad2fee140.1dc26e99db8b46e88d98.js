(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{ZhD5:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("jg1C"),r=n("ERkP"),c=n.n(r),s=n("h2nH"),i=n("JbCn"),o=n("JfQM"),u=n("U7nQ"),l=n("w28x");function d(e,t){return"string"===typeof e&&""!==e&&"string"===typeof t&&""!==t}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.b,t=Object(l.a)(),n=t.channelId,a=t.webcastId,r=d(n,a)?["channelFeed",n,a]:null,c=Object(i.b)(r,{onErrorRetry:function(e,t,n,a,r){var c=r.retryCount;404!==e.status&&setTimeout((function(){return a({retryCount:c+1})}),Object(u.a)(5))},initialData:e,revalidateOnMount:!1,revalidateOnFocus:!1,fetcher:o.a});return c},h=c.a.createContext(s.b),f=h.Provider;t.b=function(e){var t=e.value,n=e.children,r=p(t).data;return Object(a.jsx)(f,{value:r,children:n})}},aiYC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=function(e,t,n){var a;if(null!==(a=window)&&void 0!==a&&a.dataLayer){var r={event:"tracking_event","brighttalk-entity":e,"brighttalk-action":t};n&&(r["brighttalk-label"]=n),window.dataLayer.push(r)}},r=function(e,t,n){var a;if(null!==(a=window)&&void 0!==a&&a.dataLayer){var r={event:"FastPass","event-category":e,"event-action":t,"event-label":n};window.dataLayer.push(r)}},c="Talk player page",s="FastPass",i="Social";var o=function(e){switch(e){case"addToCalendarDisplay":return a(c,"Add to calendar display");case"addToCalendarExpand":return a(c,"Add to calendar expand");case"addToCalendarSelectOutlook":return a(c,"Add to calendar select","Outlook");case"addToCalendarSelectGoogle":return a(c,"Add to calendar select","Google");case"addToCalendarSelectiCal":return a(c,"Add to calendar select","iCal");case"channelInfoDisplayWithLogo":return a(c,"About channel display","With logo");case"channelInfoDisplayWithoutLogo":return a(c,"About channel display","Without logo");case"channelInfoSelect":return a(c,"About channel select");case"channelTalksDisplay":return a(c,"Channel talks display");case"channelTalksSelect":return a(c,"Channel talks select");case"channelTalksSelectUpcoming":return a(c,"Channel talks select","Upcoming content");case"channelTalksSelectLive":return a(c,"Channel talks select","Live content");case"channelTalksSelectRecorded":return a(c,"Channel talks select","Recorded content");case"channelTalksPrev":return a(c,"Channel talks carousel navigation","Left arrow");case"channelTalksNext":return a(c,"Channel talks carousel navigation","Right arrow");case"channelTalksBubbleClick":return a(c,"Channel talks carousel navigation","Bubble");case"viewingCertificateDisplay":return a(c,"Viewing certificate display");case"viewingCertificateRequest":return a(c,"Viewing certificate request");case"viewCertificateSuccess":return a(c,"Viewing certificate success");case"viewCertificateError":return a(c,"Viewing certificate error");case"watchLaterDisplay":return a(c,"Watch later display");case"watchLaterSelect":return a(c,"Watch later select");case"watchLaterRemove":return a(c,"Watch later remove");case"recommendationsDisplay":return a(c,"Smart feed display");case"recommendationsClickMyBrightTALK":return a(c,"Smart feed click","My BrightTALK");case"recommendationsClickContentLive":return a(c,"Smart feed click","Live content");case"recommendationsClickContentUpcoming":return a(c,"Smart feed click","Upcoming content");case"recommendationsClickContentRecorded":return a(c,"Smart feed click","Recorded content");case"socialButtonsDisplay":return a(c,"Social sharing display");case"socialButtonsSelectLinkedIn":return a(c,"Social sharing select","LinkedIn");case"socialButtonsSelectTwitter":return a(c,"Social sharing select","Twitter");case"socialButtonsSelectFacebook":return a(c,"Social sharing select","Facebook");case"socialButtonsSelectURL":return a(c,"Social sharing select","URL link");case"socialButtonsSelectURLCopy":return a(c,"Social sharing select","URL link copy");case"shareWithTeamDisplay":return a(c,"Share with your team display");case"shareWithTeamExpand":return a(c,"Share with your team expand");case"shareWithTeamSelectURL":return a(c,"Share with your team select","URL copy");case"shareWithTeamSelectEmail":return a(c,"Share with your team select","Open email app");case"summitDisplayWithFeed":return a(c,"Summit display","With summit feed");case"summitDisplayWithoutFeed":return a(c,"Summit display","Without summit feed");case"summitSelectUpcoming":return a(c,"Summit feed talk select","Up next");case"summitSelectLive":return a(c,"Summit feed talk select","Live");case"summitSelectRecorded":return a(c,"Summit feed talk select","Available on-demand");case"summitBannerSelect":return a(c,"Summit banner select");case"summitTrackExpand":return a(c,"Summit feed track expand");case"summitTrackSelect":return a(c,"Summit feed track select");case"summitAgendaView":return a(c,"Summit agenda","View");case"summitAgendaHide":return a(c,"Summit agenda","Hide");case"seriesDisplay":return a(c,"Series display");case"seriesBannerSelect":return a(c,"Series banner select");case"seriesSelectUpcoming":return a(c,"Series feed talk select","Up next");case"seriesSelectLive":return a(c,"Series feed talk select","Live");case"seriesSelectRecorded":return a(c,"Series feed talk select","Available on-demand");case"seriesEpisodesView":return a(c,"Series episodes","View");case"seriesEpisodesHide":return a(c,"Series episodes","Hide");case"enterButtonDisplay":return a(c,"Enter button display");case"enterButtonClick":return a(c,"Enter button click");case"enterButtonSuccess":return a(c,"Enter button success");case"relatedTopicsDisplay":return a(c,"Related topics display");case"relatedTopicsSelect":return a(c,"Related topics select","Topic clicked");case"featureImageClick":return a(c,"Feature Image Click");case"calendarIconClick":return a(c,"Icon Click","Calendar icon");case"playIconClick":return a(c,"Icon Click","Play icon");case"showTerms":return r(s,"FastPass Display");case"fastPassExistUserLoggedIn":return r(s,"Logged out registration");case"showTermsNotYouClick":return r(s,"Not You click");case"showTermsUserCreated":return r(s,"Proceed click, success");case"showTermsUserCreateFailed":return r(s,"Proceed click, error");case"redirectToLogin":return r(s,"Shown Terms","Redirect to login");case"lookUpFailedError":return r(s,"API error");case"lookUpFailedTimeOut":return r(s,"API timeout");case"attendeeNetworkingDisplayWithLogo":return a(i,"Attendee networking display","With logo");case"attendeeNetworkingDisplayWithoutLogo":return a(i,"Attendee networking display","Without logo");case"showMoreAttendeeSelect":return a(i,"Attendee networking show more select");case"attendeeOptOutSelect":return a(i,"Attendee networking opt out select");case"attendeeOptInSelect":return a(i,"Attendee networking opt in select");case"attendeeUploadPhotoSelect":return a(i,"Attendee networking upload photo select");case"attendeeUploadPhotoSuccess":return a(i,"Attendee networking upload photo success");case"attendeeUploadPhotoError":return a(i,"Attendee networking upload photo error");case"attendeeRemovePhotoSelect":return a(i,"Attendee networking remove photo select");case"attendeeRemovePhotoSuccess":return a(i,"Attendee networking remove photo success");case"attendeeRemovePhotoError":return a(i,"Attendee networking remove photo error");default:return}}},fPQ2:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("jg1C"),r=n("ERkP"),c=n.n(r),s=n("IebI"),i=n.n(s),o=n("O+IG"),u=n("Bkb1"),l=n("1FNf"),d=n("ZRZy");function p(){return(p=Object(o.a)(i.a.mark((function e(){var t,n,a,r,c,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",e.prev=1,e.next=4,fetch("".concat("https://www.brighttalk.com","/service/authorize/v1/preauth"),{method:"GET",headers:{BTPREAUTH:encodeURIComponent(t),"Cache-Control":"no-cache","Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,r=a.data,c=a.status,e.abrupt("return",{data:r,status:c});case 13:return e.prev=13,e.t0=e.catch(1),Object(l.b)(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var h=function(){return p.apply(this,arguments)};var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"window.location.href";e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),a=n.exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},v=n("B3DP"),g={isPreAuthLogin:!1,loading:!1,setLoading:function(){return null}},m=function(){var e=Object(u.useRouter)().asPath,t=Object(r.useContext)(d.a).isLoggedIn,n=void 0!==t&&t,a=Object(r.useContext)(v.a).isGigCancelled,c=Object(r.useState)(!1),s=c[0],p=c[1],g=Object(r.useState)(!1),m=g[0],b=g[1],y=f("player-preauth",e),k=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,h(y);case 4:b(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),Object(l.b)(e.t0),b(!1);case 11:p(!0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){!y||n||a||s||k()}),[n,a]),{isPreAuthLogin:!!y&&!n&&!s,loading:m,setLoading:b}},b=c.a.createContext(g),y=b.Provider;t.b=function(e){var t=e.children,n=m();return Object(a.jsxs)(y,{value:n,children:[" ",t," "]})}},hBLB:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("jg1C"),r=n("ERkP"),c=n.n(r),s=n("nH/L"),i=c.a.createContext(s.b),o=i.Provider;t.b=function(e){var t=e.children,n=Object(s.a)();return Object(a.jsx)(o,{value:n,children:t})}},mlrR:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("jg1C"),r=n("ERkP"),c=n.n(r),s=n("YIr7"),i=n("JbCn"),o=n("JfQM"),u=n("U7nQ"),l=n("w28x"),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.b,t=Object(l.a)(),n=t.channelId,a=t.webcastId;return Object(i.b)(n&&a?["summit",n,a]:null,o.a,{onErrorRetry:function(e,t,n,a,r){var c=r.retryCount;404!==e.status&&setTimeout((function(){return a({retryCount:c+1})}),Object(u.a)(2))},initialData:e,revalidateOnMount:!1,revalidateOnFocus:!1})},p=c.a.createContext(s.b),h=p.Provider;t.b=function(e){var t=e.value,n=e.children,r=d(t).data;return Object(a.jsx)(h,{value:r,children:n})}},"nH/L":function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p}));var a,r=n("ERkP"),c=n("1FNf"),s=n("YBX9"),i=n("0qIU"),o=n("Pl/V"),u=["unlock","lockout","registered-to-attend","relocate-player","ready-to-play","processing"],l=["Registration","Survey","Login"];!function(e){e.Registration="registrationRequired",e.Survey="surveyRequired",e["ready-to-play"]="playerReady",e["registered-to-attend"]="registrationComplete",e.processing="registrationComplete",e["relocate-player"]="main",e.lockout="loading",e.Login="loginRequired"}(a||(a={}));function d(e){return Object(i.a)(e,"registrationComplete","playerReady","ready")}function p(e){return"ready"===e}var h={registrationState:"awaiting",setPlayerReady:function(){return Object(c.c)("setPlayerReady was called before the function was instantiated")},registrationOverlay:!1,setRegistrationOverlay:function(){return null}};function f(e){var t,n=Object(o.a)(null===e||void 0===e?void 0:e.data);if(n)return function(e,t){if(e&&u.some((function(t){return t===e}))&&("unlock"!==e||l.some((function(e){return e===t}))))return"unlock"===e?t:e}(null===n||void 0===n?void 0:n.body["player-state"],null===n||void 0===n||null===(t=n.body)||void 0===t?void 0:t.payload)}var v=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],c=Object(r.useState)(),i=c[0],o=c[1],u=Object(r.useState)((function(){return h.registrationState})),l=u[0],p=u[1],v=Object(r.useState)(h.registrationOverlay),g=v[0],m=v[1],b=Object(r.useCallback)((function(){p("ready"),n(!0)}),[p,n]);Object(r.useEffect)((function(){return function(){if(g){document.removeEventListener("click",y,!0);var e=document.getElementById("portal-authenticator");e&&e.contentDocument&&e.contentDocument.body.removeEventListener("click",y,!0)}}}),[]),Object(r.useEffect)((function(){if(g&&!d(l)){m(!0),document.addEventListener("click",y,!0);var e=document.getElementById("portal-authenticator");e&&e.contentDocument&&e.contentDocument.body.addEventListener("click",y,!0)}}),[g]),Object(r.useEffect)((function(){if(!t&&i)switch(i){case"Registration":case"Survey":case"ready-to-play":case"registered-to-attend":case"lockout":case"Login":case"processing":p(a[i])}}),[i,t]);var y=function e(t){if(!(t.target.closest("[data-overlay='registration-thumbnail']")||t.target.closest("[data-overlay='text-with-icon-click']"))){m(!1),document.removeEventListener("click",e,!0);var n=document.getElementById("portal-authenticator");n&&n.contentDocument&&n.contentDocument.body.removeEventListener("click",e,!0)}},k=Object(r.useCallback)((function(e){if(!t){var n=f(e);n&&o(n)}}),[o,t]);return Object(s.a)("message",k),{registrationState:l,setPlayerReady:b,registrationOverlay:g,setRegistrationOverlay:m}}},tErS:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("jg1C"),r=n("ERkP"),c=n.n(r),s=n("IebI"),i=n.n(s),o=n("O+IG"),u=n("Bkb1"),l=n("1FNf"),d=n("ZRZy"),p=n("6ld3"),h=n("95NH");function f(e,t){var n=null;try{n=e.data}catch(a){return e||t?{status:t||500,data:{message:400===t?h.a:h.e}}:{status:504,data:{message:h.d}}}return{status:e.status,data:n}}function v(){return(v=Object(o.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.a)("fetchFastPass","".concat("https://www.brighttalk.com","/webcast/api/fastpass"),{method:"POST",body:JSON.stringify(t),timeout:7e3,includeCredentials:!0});case 3:return n=e.sent,a=n.data,r=n.status,e.abrupt("return",f(a,r));case 9:return e.prev=9,e.t0=e.catch(0),Object(l.b)(e.t0),e.abrupt("return",{});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var g=function(e){return v.apply(this,arguments)},m=n("aiYC"),b=n("B3DP"),y=n("w28x"),k={isFastPassLogin:!1,stepNo:0,loading:!1,fastPassSuccessData:{},setPassLoginDisabled:function(){return null},setLoading:function(){return null},setStep:function(){return null},setInvalidCreds:function(){return null}};var S=function(){var e=Object(u.useRouter)().asPath,t=Object(r.useContext)(d.a).isLoggedIn,n=void 0!==t&&t,a=Object(r.useContext)(b.a).isGigCancelled,c=Object(r.useState)(!1),s=c[0],p=c[1],h=Object(r.useState)({}),f=h[0],v=h[1],k=Object(r.useState)(0),S=k[0],w=k[1],C=Object(r.useState)(!1),O=C[0],j=C[1],L=Object(r.useState)(!1),R=L[0],P=L[1],E=Object(r.useState)(!1),x=E[0],T=E[1],I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"window.location.href";e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("bt_tok",e),A=Object(y.a)().channelId,D=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,g({channelId:A,leadId:I});case 4:t=e.sent,T(!1),200===(null===t||void 0===t?void 0:t.status)?null!==t&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.hasBTSESSIONCookie?(Object(m.a)("fastPassExistUserLoggedIn"),U()):(w(1),v(t.data),j(!1)):(504===(null===t||void 0===t?void 0:t.status)?Object(m.a)("lookUpFailedTimeOut"):Object(m.a)("lookUpFailedError"),U()),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),Object(l.b)(e.t0),T(!1),U();case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(){j(!1),v({}),w(0),P(!0)};return Object(r.useEffect)((function(){!I||n||a||!function(e){try{if(0===Object.keys(e).length)return!0}catch(t){Object(l.a)({data:{data:e},message:"Attempted to get number of keys in object"}),Object(l.b)(t)}return!1}(f)||O||D()}),[n,a]),{isFastPassLogin:!R&&!!I&&!n,stepNo:S,loading:x,fastPassSuccessData:f,setStep:w,setPassLoginDisabled:U,setLoading:T,invalidCreds:s,setInvalidCreds:p}},w=c.a.createContext(k),C=w.Provider;t.b=function(e){var t=e.children,n=S();return Object(a.jsx)(C,{value:n,children:t})}}}]);
//# sourceMappingURL=43cb7e80ad4eccd0a4b02c103add706ad2fee140.1dc26e99db8b46e88d98.js.map