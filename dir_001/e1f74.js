!function(){const e=function(){const e={rootMargin:"200px 0px",threshold:.01},t=[];let n,a,i;d();const o=document.querySelector("body");function d(){n=Array.from(document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)")),i&&i.disconnect(),"IntersectionObserver"in window?(i=new IntersectionObserver(c,e),n.forEach((function(e){e.getAttribute("data-lazy-loaded")||i.observe(e)})),window.addEventListener("beforeprint",l),window.matchMedia&&window.matchMedia("print").addListener((function(e){e.matches&&l()}))):r()}function r(){for(i&&i.disconnect();n.length>0;)s(n[0])}function c(e){for(let t=0;t<e.length;t++){const n=e[t];n.intersectionRatio>0&&(i.unobserve(n.target),s(n.target))}0===n.length&&i.disconnect()}function l(){if(!a&&(n.length>0||t.length>0)){a=document.createElement("div"),a.id="loadingWarning",a.style.fontWeight="bold",a.innerText=jetpackLazyImagesL10n.loading_warning;const e=document.createElement("style");e.innerHTML="#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}",a.appendChild(e),o.insertBefore(a,o.firstChild)}n.length>0&&r(),a&&alert(jetpackLazyImagesL10n.loading_warning)}function s(e){let a;if(!(e instanceof HTMLImageElement))return;const i=e.getAttribute("data-lazy-srcset"),o=e.getAttribute("data-lazy-sizes");e.removeAttribute("data-lazy-srcset"),e.removeAttribute("data-lazy-sizes"),e.removeAttribute("data-lazy-src"),e.classList.add("jetpack-lazy-image--handled"),e.setAttribute("data-lazy-loaded",1),o&&e.setAttribute("sizes",o),i?e.setAttribute("srcset",i):e.removeAttribute("srcset"),e.setAttribute("loading","eager"),t.push(e);const d=n.indexOf(e);d>=0&&n.splice(d,1),e.complete?g.call(e,null):(e.addEventListener("load",g,{once:!0}),e.addEventListener("error",g,{once:!0}));try{a=new Event("jetpack-lazy-loaded-image",{bubbles:!0,cancelable:!0})}catch(e){a=document.createEvent("Event"),a.initEvent("jetpack-lazy-loaded-image",!0,!0)}e.dispatchEvent(a)}function g(){const e=t.indexOf(this);e>=0&&t.splice(e,1),a&&0===n.length&&0===t.length&&(a.parentNode.removeChild(a),a=null)}o&&(o.addEventListener("is.post-load",d),o.addEventListener("jetpack-lazy-images-load",d))};"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
;!function(){var e={90:function(e){!function(t,n){var a=function(e,t,n){"use strict";var a,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var r=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],y={},h=Array.prototype.forEach,z=function(e,t){return y[t]||(y[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),y[t].test(e[l]("class")||"")&&y[t]},p=function(e,t){z(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=z(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},C=function(e,t,n){var a=n?s:"removeEventListener";n&&C(e,t),v.forEach((function(n){e[a](n,t)}))},b=function(e,n,i,r,o){var s=t.createEvent("Event");return i||(i={}),i.instance=a,s.initEvent(n,!r,!o),s.detail=i,e.dispatchEvent(s),s},A=function(t,n){var a;!o&&(a=e.picturefill||i.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},w=(pe=[],ge=[],Ce=pe,be=function(){var e=Ce;for(Ce=pe.length?ge:pe,he=!0,ze=!1;e.length;)e.shift()();he=!1},Ae=function(e,n){he&&!n?e.apply(this,arguments):(Ce.push(e),ze||(ze=!0,(t.hidden?d:u)(be)))},Ae._lsFlush=be,Ae),M=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w((function(){e.apply(t,n)}))}},N=function(e){var t,a=0,r=i.throttleDelay,o=i.ricTimeout,s=function(){t=!1,a=n.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:M((function(){d(s)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=r-(n.now()-a))<0&&(i=0),e||i<9?l():d(l,i))}},x=function(e){var t,a,i=99,r=function(){t=null,e()},o=function(){var e=n.now()-a;e<i?d(o,i-e):(f||r)(r)};return function(){a=n.now(),t||(t=d(o,i))}},L=(K=/^img$/i,Q=/^iframe$/i,V="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==J&&(J="hidden"==E(t.body,"visibility")),J||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},ae=function(e,n){var a,i=e,o=ne(e);for(I-=n,G+=n,j-=n,U+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(o=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(a=i.getBoundingClientRect(),o=U>a.left&&j<a.right&&G>a.top-1&&I<a.bottom+1);return o},ie=function(){var e,n,o,s,c,d,u,f,m,v,y,h,z=a.elements;if((k=i.loadMode)&&Z<8&&(e=z.length)){for(n=0,ee++;n<e;n++)if(z[n]&&!z[n]._lazyRace)if(!V||a.prematureUnveil&&a.prematureUnveil(z[n]))fe(z[n]);else if((f=z[n][l]("data-expand"))&&(d=1*f)||(d=Y),v||(v=!i.expand||i.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:i.expand,a._defEx=v,y=v*i.expFactor,h=i.hFac,J=null,Y<y&&Z<1&&ee>2&&k>2&&!t.hidden?(Y=y,ee=0):Y=k>1&&ee>1&&Z<6?v:X),m!==d&&($=innerWidth+d*h,q=innerHeight+d,u=-1*d,m=d),o=z[n].getBoundingClientRect(),(G=o.bottom)>=u&&(I=o.top)<=q&&(U=o.right)>=u*h&&(j=o.left)<=$&&(G||U||j||I)&&(i.loadHidden||ne(z[n]))&&(P&&Z<3&&!f&&(k<3||ee<4)||ae(z[n],d))){if(fe(z[n]),c=!0,Z>9)break}else!c&&P&&!s&&Z<4&&ee<4&&k>2&&(R[0]||i.preloadAfterLoad)&&(R[0]||!f&&(G||U||j||I||"auto"!=z[n][l](i.sizesAttr)))&&(s=R[0]||z[n]);s&&!c&&fe(s)}},re=N(ie),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),p(t,i.loadedClass),g(t,i.loadingClass),C(t,le),b(t,"lazyloaded"))},se=M(oe),le=function(e){se({target:e.target})},ce=function(e,t){var n=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},de=function(e){var t,n=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ue=M((function(e,t,n,a,r){var o,s,c,u,f,v;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?p(e,i.autosizesClass):e.setAttribute("sizes",a)),s=e[l](i.srcsetAttr),o=e[l](i.srcAttr),r&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(s||o||u),f={target:e},p(e,i.loadingClass),v&&(clearTimeout(D),D=d(te,2500),C(e,le,!0)),u&&h.call(c.getElementsByTagName("source"),de),s?e.setAttribute("srcset",s):o&&!u&&(Q.test(e.nodeName)?ce(e,o):e.src=o),r&&(s||u)&&A(e,{src:o})),e._lazyRace&&delete e._lazyRace,g(e,i.lazyClass),w((function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&p(e,i.fastLoadedClass),oe(f),e._lazyCache=!0,d((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=K.test(e.nodeName),a=n&&(e[l](i.sizesAttr)||e[l]("sizes")),r="auto"==a;(!r&&P||!n||!e[l]("src")&&!e.srcset||e.complete||z(e,i.errorClass)||!z(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,r&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,ue(e,t,r,a,n))}},me=x((function(){i.loadMode=3,re()})),ve=function(){3==i.loadMode&&(i.loadMode=2),me()},ye=function(){P||(n.now()-H<999?d(ye,999):(P=!0,i.loadMode=3,re(),c("scroll",ve,!0)))},{_:function(){H=n.now(),a.elements=t.getElementsByClassName(i.lazyClass),R=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",re,!0),c("resize",re,!0),c("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(re).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",re,!0),r[s]("DOMAttrModified",re,!0),setInterval(re,999)),c("hashchange",re,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,re,!0)})),/d$|^c/.test(t.readyState)?ye():(c("load",ye),t[s]("DOMContentLoaded",re),d(ye,2e4)),a.elements.length?(ie(),w._lsFlush()):re()},checkElems:re,unveil:fe,_aLSL:ve}),W=(T=M((function(e,t,n,a){var i,r,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),m.test(t.nodeName||""))for(r=0,o=(i=t.getElementsByTagName("source")).length;r<o;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||A(e,n.detail)})),F=function(e,t,n){var a,i=e.parentNode;i&&(n=_(e,i,n),(a=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&T(e,i,a,n))},O=x((function(){var e,t=B.length;if(t)for(e=0;e<t;e++)F(B[e])})),{_:function(){B=t.getElementsByClassName(i.autosizesClass),c("resize",O)},checkElems:O,updateElem:F}),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,W._(),L._())};var B,T,F,O;var R,P,D,k,H,$,q,I,j,U,G,J,K,Q,V,X,Y,Z,ee,te,ne,ae,ie,re,oe,se,le,ce,de,ue,fe,me,ve,ye;var he,ze,pe,ge,Ce,be,Ae;return d((function(){i.init&&S()})),a={cfg:i,autoSizer:W,loader:L,init:S,uP:A,aC:p,rC:g,hC:z,fire:b,gW:_,rAF:w}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(90);n.n(e)().init()}()}();
//# sourceMappingURL=smush-lazy-load.min.js.map
;/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            /* nectar addition */
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = 0 == sliderTimeout ? !1 : !0;
                this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(content) {
                content && content.preventDefault && content.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }($el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click") : $el.find(".vc_toggle_title").off("click") : jQuery(".vc_toggle_title").off("click")).on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function(ver) {
            var $call, old_version;
            jQuery.ui && ($call = ver || jQuery(".wpb_tabs, .wpb_tour"), ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10", old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9, $call.each(function(index) {
                var interval = jQuery(this).attr("data-interval"),
                    tabs_array = [],
                    $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        activate: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    });
                if (interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (err) {
                    window.console && window.console.warn && console.warn("tabs behaviours error", err)
                }
                jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                    return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(length) {
                    var index;
                    length && length.preventDefault && length.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                })
            }))
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $this = jQuery(this),
                    active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                    $tabs = !1 === active_tab || "yes" === $this.data("collapsible"),
                    $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                        header: "> div > h3",
                        autoHeight: !1,
                        heightStyle: "content",
                        active: active_tab,
                        collapsible: $tabs,
                        navigation: !0,
                        activate: vc_accordionActivate,
                        change: function(event, ui) {
                            void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                        }
                    });
                !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function($thumbs) {
                    $thumbs && $thumbs.preventDefault && $thumbs.preventDefault();
                    $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).on("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var fluid_ul = jQuery(this);
                !0 !== fluid_ul.data("carousel_enabled") && fluid_ul.is(":visible") && (fluid_ul.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1"), (fluid_ul = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                    "margin-right": fluid_ul.css("margin-left"),
                    "margin-left": 0
                }), (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300), jQuery(window).on("resize", function() {
                    screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                        location.reload()
                    }, 20)
                }))
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, sliderTimeout, this_element = jQuery(this);
                this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var el_margin_left, el_margin_right, offset, width, padding, paddingRight, $el_full = $el.next(".vc_row-full-width");
                    ($el_full = !$el_full.length ? $el.parent().next(".vc_row-full-width") : $el_full).length && (el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width(), "rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                        position: "relative",
                        left: offset,
                        "box-sizing": "border-box",
                        width: width
                    }), $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : (paddingRight = width - (padding = (padding = -1 * offset) < 0 ? 0 : padding) - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })), $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    }))
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var fullHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
                $element.length && (fullHeight = $(window).height(), (offsetTop = $element.offset().top) < fullHeight && (fullHeight = 100 - offsetTop / (fullHeight / 100), $element.css("min-height", fullHeight + "vh"))), $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrStart = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrStart + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrStart - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $frame = panel.find(".vc_line-chart"),
                $google_maps = panel.find('[data-ride="vc_carousel"]');
            vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $frame.length && jQuery.fn.vcLineChart && $frame.vcLineChart({
                reload: !1
            }), $google_maps.length && jQuery.fn.carousel && $google_maps.carousel("resizeAction"), $frame = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $frame.length && $frame.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")), panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            }), $(document).trigger("wpb_prepare_tab_content", panel)
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            var $pie_charts, $round_charts, $line_charts, $carousel;
            ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"), $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'), void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            }))
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeId = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeId)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).on("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(id) {
            if (void 0 === id) return !1;
            id = id.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var hoverBoxHeight = jQuery(this),
                    hoverBoxInner = hoverBoxHeight.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = hoverBoxHeight.find(".vc-hoverbox-front-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight < frontHeight ? frontHeight : hoverBoxHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).on("resize", window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);