window.wafer&&window.wafer.ready((function(){var e="show-drawer",t=null,a=null,r="wafer-fetch-error",i="wafer-fetch-complete",n="stream-related-drawer",o="StreamRelated",s="react-wafer-stream",c="json",d="wafer-fetch",l="stream-uuid-list",u="userintent-disliked-anim",f="data-uuid",m=[],w=document.querySelectorAll(".stream-items"),A=document.querySelector(".stream-ad-fetch"),g=window.innerWidth||document.documentElement.clientWidth,v="js-sponsored-moments-dwell-time",p="userintent-show-reason",h=window.wafer&&window.wafer.utils,L={INARTICLE:9/16,reservemoments:16/9},y=function e(t){var a,r,i=t.getAttribute("data-da-position");if("reservemoments"===i&&(t=t.querySelector("#defaultRESERVEMOMENTS")),a=t.getAttribute("data-html"),r=t.getAttribute("data-darla-config"),a&&r){(r=JSON.parse(r)).dest;var n=window.DARLA.prefetched();if(!window.DARLA.config()||window.DARLA.inProgress()||n&&0!==n.length)setTimeout((function(){e(t)}),500);else{if(!r.h&&!r.w){var o=Math.floor(g*L[i]),s={flex:{h:{min:o},w:{min:g}},h:o,w:g};Object.assign(r,s)}var c=r.id;window.DARLA.addPos(r);var d=new window.DARLA.Response(c,{});a=unescape(a),d.add(c,a),window.DARLA.render(d),t.classList.remove("unprocessed-display-card")}}};window.wafer.on("fetch:success",(function(e){var t=e.elem;if(t&&t.classList&&(t.classList.contains("collections-view-more")&&(document.documentElement.classList.remove("Reader-closed"),document.documentElement.classList.add("Reader-open"),window.wafer.base.lock(document.getElementById("MainView")),window.scrollTo(0,0)),t.classList.contains("stream-batch-fetch"))){var a=document.getElementsByClassName("js-display-card unprocessed-display-card");a.length&&h.convertNodeListToArray(a).forEach((function(e){window.DARLA&&e?y(e):e.style.display="none"}));var r=window.rapidPageConfig&&window.rapidPageConfig.rapidConfig&&window.rapidPageConfig.rapidConfig.spaceid;r&&(window._comscore=window._comscore||[],window._comscore.push({c1:2,c14:window.YAHOO&&window.YAHOO.comscore&&window.YAHOO.comscore.c14||-1,c2:"7241469",c5:r,c7:document.location.href}),window.COMSCORE&&window.COMSCORE.purge())}}));var E=function e(t){var a=Math.floor(16*g/9),r=t.querySelector("#defaultRESERVEMOMENTS"),i=r&&r.getAttribute("data-html");if(i){var n=window.DARLA.prefetched();if(window.DARLA.inProgress()||n&&0!==n.length)setTimeout((function(){e(t)}),500);else{var o={dest:"defaultRESERVEMOMENTS",flex:{h:{min:a},w:{min:g}},h:a,id:"RESERVEMOMENTS",supports:{"exp-ovr":1,"exp-push":1,"resize-to":1},w:g};window.DARLA.addPos(o);var s=new window.DARLA.Response("RESERVEMOMENTS",{});i=unescape(i),s.add("RESERVEMOMENTS",i),window.DARLA.render(s)}}},N={};if(w&&w.length){h.convertNodeListToArray(w).forEach((function(u){if(u.addEventListener("animationend",(function(e){var t=e&&e.target;e&&t&&("hideStreamItem"===e.animationName||"fadeOutAdConfirm"===e.animationName)&&(t.classList.contains("ad-feedback-options")||(t.classList.contains("give-feedback-screen")?t=h.findAncestor(t,"stream-item"):t.classList.contains("comm-undo")&&(t=h.findAncestor(t,"stream-item-card")),t.parentNode&&(window.wafer.base.destroy(t),t.parentNode.removeChild(t))))})),u.addEventListener("click",(function(w){var A=w.target;if(A.classList.contains("userintent-undo")){var g=A.getAttribute("data-wf-toggle-target"),v=u.querySelector(g);if(v){var p=v.getAttribute(f);p&&N[p]&&clearTimeout(N[p])}}!function(u){window.location.href.indexOf("functest=1")>-1&&u.preventDefault();var f=u.target;if(h&&f){var w=h.findAncestor(f,"js-content-viewer");if(w){var A=h.findAncestor(w,"stream-cluster-item")||h.findAncestor(w,"js-stream-content");if(A){var g=A.getAttribute("data-uuid");if(g){var v=A&&A.getAttribute("data-parent-uuid");if(t=v&&document.querySelector('li[data-uuid="'+v+'"]')||A,a=t&&t.getElementsByClassName(n)[0]){if(t.classList.contains(e))return;var p=function(){for(var e=Array.prototype.slice.call(document.getElementsByClassName(l)),t=0;t<e.length;t++){var a=e[t],r=a.text;a.classList.remove(l);try{var i=JSON.parse(r);i&&Array.isArray(i.uuidList)&&m.length+i.uuidList.length<=250&&(m=m.concat(i.uuidList))}catch(e){}}return{dedupUuids:m}}(),L=window.YAHOO&&window.YAHOO.context||{},y={config:{leadItemUuid:v||g},ctrl:o,lang:L.lang,m_id:s,m_mode:c,region:L.region,site:L.site},E={dedupUuids:p.dedupUuids.join(","),uuid:g},N=a.getAttribute("data-cfg");if(N){var b=A.getAttribute("data-cposy");b=isNaN(b)?null:parseInt(b,10);try{var q=JSON.parse(N);null!==b&&(q.i13n.cposy=b),y.config=Object.assign(y.config,q)}catch(e){}}var R=a.getAttribute("data-bucket");R&&(y.bucket=R),y.config.ncpParams=y.config.ncpParams||{},y.config.ncpParams.query=y.config.ncpParams.query||{},y.config.ncpParams.query=Object.assign(E,y.config.ncpParams.query);var S=window.wafer.base.state.drawer,O=S&&S.adsToken;O&&(y.config.ncpParams.query.geminiDedupeToken=O),a.setAttribute("data-wf-body",JSON.stringify(y)),a.classList.remove(r,i),a.classList.add(d),window.wafer.base.sync(a.parentNode)}}}}}}(w)})),A&&window.wafer.base&&h){var w=A.getAttribute("data-wf-url"),p=A.getAttribute("data-wf-body");h.fetchWithCache(w,{body:p,cache:0}).then((function(e){if(e&&e.html){A.innerHTML=e.html;var t=A.querySelectorAll(".stream-ad"),a=A.getElementsByClassName("wafer-state")[0],r=u.querySelectorAll(".stream-ad-placeholder");if(t&&r)for(var i=t.length,n=r.length,o=0;o<n&&o<i;o++)r[o].replaceWith(t[o]);A.innerHTML="",a&&A.appendChild(a),window.wafer.base.sync(u)}})).catch((function(e){var t=u.querySelectorAll(".wafer-fetch.stream-batch-fetch");t.length&&h.convertNodeListToArray(t).forEach((function(e){var t=e.classList;t&&(t.add("wafer-fetch-error"),t.remove("wafer-fetch"))}))}))}var L=u.querySelectorAll("."+v+", ."+v+"-mon");if(L.length){h.convertNodeListToArray(L).forEach((function(e){e.classList&&e.classList.contains("js-reserve-moments")&&(window.DARLA?E(e):e.style.display="none")}));var b=L[0].querySelector(".js-panorama-scroll-view");b&&0===b.scrollLeft&&(b.scrollLeft=(b.scrollWidth-g)/2)}var q=!!window.DARLA,R=u.querySelectorAll(".js-display-card.unprocessed-display-card");R.length&&h.convertNodeListToArray(R).forEach((function(e){q&&e?y(e):e.style.display="none"}))}));var b,q,R=document.getElementById("scrollable-smad"),S=document.getElementById("scrollable-video"),O=window.innerHeight||document.documentElement.clientHeight,T={},U=function(e){return e&&(e=(e=(e=(e=(e=(e=e.replace(/\$\(V_AUTOPLAYED\)/,!1)).replace(/\$\(V_PLAYER_WIDTH\)/,R.clientHeight)).replace(/\$\(V_PLAYER_HEIGHT\)/,R.clientWidth)).replace(/\$\(V_SKIP_AVAIL\)/,!1)).replace(/\$\(V_EXPANDED\)/,!1)).replace(/\$\(V_AUD_INFO\)/,2)),e};if(R){var C=R.getBoundingClientRect();b=C.top-O,q=C.bottom-b,T.startActionUrl=R.getAttribute("data-video-quartile-start"),T.quartileActionUrl25=R.getAttribute("data-video-quartile-25"),T.quartileActionUrl50=R.getAttribute("data-video-quartile-50"),T.quartileActionUrl75=R.getAttribute("data-video-quartile-75"),T.quartileActionUrl100=R.getAttribute("data-video-quartile-100")}R&&S&&window.addEventListener("scroll",h.throttle((function(){var e=S&&S.duration,t=R.getBoundingClientRect();if(t.top<O&&t.bottom>0){S.currentTime=(window.pageYOffset-b)*e/q;var a=(O-t.top)/O*100;(a=5*Math.ceil(a/5))>=100&&T.quartileActionUrl100?(h.fireBeacon(U(T.quartileActionUrl100),{useNavigator:!1}),T.quartileActionUrl100=null):a>=75&&T.quartileActionUrl75?(h.fireBeacon(U(T.quartileActionUrl75),{useNavigator:!1}),T.quartileActionUrl75=null):a>=50&&T.quartileActionUrl50?(h.fireBeacon(U(T.quartileActionUrl50),{useNavigator:!1}),T.quartileActionUrl50=null):a>=25&&T.quartileActionUrl25?(h.fireBeacon(U(T.quartileActionUrl25),{useNavigator:!1}),T.quartileActionUrl25=null):a>=5&&T.startActionUrl&&(h.fireBeacon(U(T.startActionUrl),{useNavigator:!1}),T.startActionUrl=null)}}),16))}window.addEventListener("viewerClosed",(function(){if(t){var r=t,i=a&&!!a.getElementsByClassName("stream-realted-list")[0];!r.classList.contains(e)&&i&&(r.classList.add("drawer-beacon"),setTimeout((function(){r.classList.add(e)}),10)),a=null,t=null}}));window.wafer.on("video:adplaybackstart",(function(e){e&&e.elem&&e.elem.parentNode&&e.elem.parentNode.classList&&e.elem.parentNode.classList.contains("stream-video-ad-v2")&&e.elem.parentNode.classList.remove("video-endcard")})),window.wafer.on("video:playbackcomplete",(function(e){e&&e.elem&&e.elem.parentNode&&e.elem.parentNode.classList&&e.elem.parentNode.classList.contains("stream-video-ad-v2")&&e.elem.parentNode.classList.add("video-endcard")}));window.wafer.on("toggle:change",(function(e){if(e&&e.meta&&e.elem){var t=e.elem,a=t.getAttribute("data-wf-toggle-target");if("userintent-hidestrmitem"===e.meta.className&&"add"===e.meta.action&&w&&w.length)h.convertNodeListToArray(w).forEach((function(e){if(a&&e){var t=e.querySelector(a),r=t&&t.getAttribute(f);r&&(N[r]=setTimeout((i=t,function(){i.classList.contains(u)||i.classList.add(u)}),8e3))}var i}));else if("show-drawer"===e.meta.className)w&&w.length&&h.convertNodeListToArray(w).forEach((function(e){var t=e.querySelector(a),r=t&&t.getElementsByClassName("drawer-fetch-target")[0];setTimeout((function(){r&&(r.innerHTML="")}),300)}));else if("userintent-show"===e.meta.className&&t){var r=h.findAncestor(t,"stream-item");if(!r)return;"add"===e.meta.action?(r.classList.add(p),window.rapidInstance&&window.rapidInstance.reevaluateModulesViewability(r)):"remove"===e.meta.action&&r.classList.remove(p)}}}))}));